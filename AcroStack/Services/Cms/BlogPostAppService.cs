using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Entities.Cms;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.Cms;
using Microsoft.AspNetCore.Authorization;
using System.Linq.Dynamic.Core;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Services.Cms;

/// <summary>
/// Implements blog post CRUD with tag synchronization. Mirrors ABP
/// Commercial CMS Kit Pro's <c>BlogPostAppService</c>. On Create/Update the
/// EntityTag rows for the post are replaced by the new tag list, and any
/// unknown Tag rows are auto-created.
/// </summary>
public class BlogPostAppService : ApplicationService, IBlogPostAppService
{
    public const string EntityType = "BlogPost";

    private readonly IRepository<BlogPost, Guid> _repository;
    private readonly IRepository<Blog, Guid> _blogRepository;
    private readonly IRepository<EntityTag, Guid> _entityTagRepository;
    private readonly IRepository<Tag, Guid> _tagRepository;

    public BlogPostAppService(
        IRepository<BlogPost, Guid> repository,
        IRepository<Blog, Guid> blogRepository,
        IRepository<EntityTag, Guid> entityTagRepository,
        IRepository<Tag, Guid> tagRepository)
    {
        _repository = repository;
        _blogRepository = blogRepository;
        _entityTagRepository = entityTagRepository;
        _tagRepository = tagRepository;
    }

    [AllowAnonymous]
    public async Task<PagedResultDto<BlogPostDto>> GetListAsync(BlogPostGetListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();
        var entityTagQueryable = await _entityTagRepository.GetQueryableAsync();

        if (input.BlogId.HasValue)
        {
            queryable = queryable.Where(p => p.BlogId == input.BlogId.Value);
        }

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(p => p.Title.Contains(input.Filter!) || p.Slug.Contains(input.Filter!));
        }

        if (!input.Tag.IsNullOrWhiteSpace())
        {
            var tagName = input.Tag!;
            var taggedIds = entityTagQueryable
                .Where(et => et.EntityType == EntityType && et.TagName == tagName)
                .Select(et => et.EntityId);
            queryable = queryable.Where(p => taggedIds.Contains(p.Id));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "CreationTime desc" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var posts = await AsyncExecuter.ToListAsync(query);
        var tagsByPost = await LoadTagsForPostsAsync(posts.Select(p => p.Id).ToList());

        return new PagedResultDto<BlogPostDto>(
            totalCount,
            posts.Select(p => MapToDto(p, tagsByPost.GetValueOrDefault(p.Id))).ToList());
    }

    [AllowAnonymous]
    public async Task<BlogPostDto> GetAsync(Guid id)
    {
        var post = await _repository.GetAsync(id);
        var tags = await LoadTagsForPostsAsync(new[] { post.Id });
        return MapToDto(post, tags.GetValueOrDefault(post.Id));
    }

    [AllowAnonymous]
    public async Task<BlogPostDto> GetBySlugAsync(Guid blogId, string slug)
    {
        var queryable = await _repository.GetQueryableAsync();
        var post = await AsyncExecuter.FirstOrDefaultAsync(
            queryable.Where(p => p.BlogId == blogId && p.Slug == slug))
            ?? throw new BusinessException("AcroStack:Cms:BlogPostNotFound");

        var tags = await LoadTagsForPostsAsync(new[] { post.Id });
        return MapToDto(post, tags.GetValueOrDefault(post.Id));
    }

    [Authorize(AcroStackPermissions.Cms.BlogPosts.Create)]
    public async Task<BlogPostDto> CreateAsync(CreateBlogPostInput input)
    {
        await EnsureBlogExistsAsync(input.BlogId);
        await EnsureSlugUniqueAsync(input.BlogId, input.Slug);

        var post = new BlogPost(GuidGenerator.Create(), input.BlogId, input.Title, input.Slug, input.Content)
        {
            Excerpt = input.Excerpt,
            CoverImage = input.CoverImage,
            ReadingTime = EstimateReadingTime(input.Content),
        };
        await _repository.InsertAsync(post);

        await SyncTagsAsync(post.Id, input.Tags);

        return MapToDto(post, input.Tags);
    }

    [Authorize(AcroStackPermissions.Cms.BlogPosts.Update)]
    public async Task<BlogPostDto> UpdateAsync(Guid id, UpdateBlogPostInput input)
    {
        var post = await _repository.GetAsync(id);

        if (post.Slug != input.Slug)
        {
            await EnsureSlugUniqueAsync(post.BlogId, input.Slug);
        }

        post.Title = input.Title;
        post.Slug = input.Slug;
        post.Content = input.Content;
        post.Excerpt = input.Excerpt;
        post.CoverImage = input.CoverImage;
        post.ReadingTime = EstimateReadingTime(input.Content);
        await _repository.UpdateAsync(post);

        await SyncTagsAsync(post.Id, input.Tags);

        return MapToDto(post, input.Tags);
    }

    [Authorize(AcroStackPermissions.Cms.BlogPosts.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);

        // Cascade-delete the post's EntityTag rows.
        var entityTagQueryable = await _entityTagRepository.GetQueryableAsync();
        var tags = await AsyncExecuter.ToListAsync(
            entityTagQueryable.Where(et => et.EntityType == EntityType && et.EntityId == id));
        foreach (var t in tags)
        {
            await _entityTagRepository.DeleteAsync(t);
        }
    }

    private async Task EnsureBlogExistsAsync(Guid blogId)
    {
        var blogQueryable = await _blogRepository.GetQueryableAsync();
        var exists = await AsyncExecuter.AnyAsync(blogQueryable.Where(b => b.Id == blogId));
        if (!exists)
        {
            throw new BusinessException("AcroStack:Cms:BlogNotFound");
        }
    }

    private async Task EnsureSlugUniqueAsync(Guid blogId, string slug)
    {
        var queryable = await _repository.GetQueryableAsync();
        var exists = await AsyncExecuter.AnyAsync(
            queryable.Where(p => p.BlogId == blogId && p.Slug == slug));
        if (exists)
        {
            throw new BusinessException("AcroStack:Cms:SlugAlreadyExists");
        }
    }

    private async Task<Dictionary<Guid, List<string>>> LoadTagsForPostsAsync(IEnumerable<Guid> postIds)
    {
        var ids = postIds.ToList();
        if (ids.Count == 0)
        {
            return new Dictionary<Guid, List<string>>();
        }

        var entityTagQueryable = await _entityTagRepository.GetQueryableAsync();
        var rows = await AsyncExecuter.ToListAsync(
            entityTagQueryable.Where(et => et.EntityType == EntityType && ids.Contains(et.EntityId)));

        return rows
            .GroupBy(et => et.EntityId)
            .ToDictionary(g => g.Key, g => g.Select(et => et.TagName).ToList());
    }

    private async Task SyncTagsAsync(Guid postId, List<string> tagNames)
    {
        // Remove existing associations.
        var entityTagQueryable = await _entityTagRepository.GetQueryableAsync();
        var existing = await AsyncExecuter.ToListAsync(
            entityTagQueryable.Where(et => et.EntityType == EntityType && et.EntityId == postId));
        foreach (var et in existing)
        {
            await _entityTagRepository.DeleteAsync(et);
        }

        var distinctTags = tagNames
            .Where(t => !t.IsNullOrWhiteSpace())
            .Select(t => t.Trim())
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();
        if (distinctTags.Count == 0)
        {
            return;
        }

        // Ensure Tag rows exist (auto-create unknown ones).
        var tagQueryable = await _tagRepository.GetQueryableAsync();
        var existingTags = await AsyncExecuter.ToListAsync(
            tagQueryable.Where(t => distinctTags.Contains(t.Name)));
        var existingNames = existingTags.Select(t => t.Name).ToHashSet(StringComparer.OrdinalIgnoreCase);
        foreach (var name in distinctTags.Where(n => !existingNames.Contains(n)))
        {
            await _tagRepository.InsertAsync(new Tag(GuidGenerator.Create(), name));
        }

        // Insert the new associations.
        foreach (var name in distinctTags)
        {
            await _entityTagRepository.InsertAsync(new EntityTag(
                GuidGenerator.Create(), name, postId, EntityType));
        }
    }

    private static int EstimateReadingTime(string content)
    {
        if (string.IsNullOrWhiteSpace(content))
        {
            return 0;
        }
        // ~200 words per minute, rounded up, minimum 1.
        var words = content.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
        return Math.Max(1, (int)Math.Ceiling(words / 200.0));
    }

    private BlogPostDto MapToDto(BlogPost post, IReadOnlyList<string>? tags) => new()
    {
        Id = post.Id,
        BlogId = post.BlogId,
        Title = post.Title,
        Slug = post.Slug,
        Content = post.Content,
        Excerpt = post.Excerpt,
        CoverImage = post.CoverImage,
        ReadingTime = post.ReadingTime,
        Tags = tags ?? Array.Empty<string>(),
        CreationTime = post.CreationTime,
        CreatorId = post.CreatorId,
        LastModificationTime = post.LastModificationTime,
        LastModifierId = post.LastModifierId,
        IsDeleted = post.IsDeleted,
        DeleterId = post.DeleterId,
        DeletionTime = post.DeletionTime,
    };
}
