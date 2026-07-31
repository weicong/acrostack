using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.AppUsers;
using AcroStack.Entities.Cms;
using AcroStack.Permissions;
using AcroStack.Services.Dtos.Cms;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace AcroStack.Services.Cms;

/// <summary>
/// Implements polymorphic commenting. Mirrors ABP Commercial CMS Kit Pro's
/// <c>CommentAppService</c>. Reads are anonymous; creating a comment is open
/// to any authenticated user; deletion is restricted to the author or users
/// with the <see cref="AcroStackPermissions.Cms.Comments.Delete"/> permission.
/// </summary>
public class CommentAppService : ApplicationService, ICommentAppService
{
    private readonly IRepository<Comment, Guid> _repository;
    private readonly IRepository<AppUser, Guid> _appUserRepository;
    private readonly IPermissionChecker _permissionChecker;

    public CommentAppService(
        IRepository<Comment, Guid> repository,
        IRepository<AppUser, Guid> appUserRepository,
        IPermissionChecker permissionChecker)
    {
        _repository = repository;
        _appUserRepository = appUserRepository;
        _permissionChecker = permissionChecker;
    }

    [AllowAnonymous]
    public async Task<PagedResultDto<CommentDto>> GetListForEntityAsync(CommentGetListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();
        var userQueryable = await _appUserRepository.GetQueryableAsync();

        var baseQuery = queryable
            .Where(c => c.EntityType == input.EntityType && c.EntityId == input.EntityId);

        var totalCount = await AsyncExecuter.CountAsync(baseQuery);

        var query =
            from c in baseQuery
            join u in userQueryable on c.CreatorId equals u.Id into uc
            from u in uc.DefaultIfEmpty()
            orderby c.CreationTime
            select new { c, CreatorUserName = u != null ? u.UserName : null };

        var rows = await AsyncExecuter.ToListAsync(query.Skip(input.SkipCount).Take(input.MaxResultCount));

        return new PagedResultDto<CommentDto>(
            totalCount,
            rows.Select(r => MapToDto(r.c, r.CreatorUserName)).ToList());
    }

    [Authorize]
    public async Task<CommentDto> CreateAsync(CreateCommentInput input)
    {
        var currentUserId = CurrentUser.GetId();

        var comment = new Comment(GuidGenerator.Create(), input.EntityType, input.EntityId, input.Text)
        {
            ParentId = input.ParentId,
        };
        await _repository.InsertAsync(comment);

        // Denormalize the author's display name for fast reads.
        var userQueryable = await _appUserRepository.GetQueryableAsync();
        var user = await AsyncExecuter.FirstOrDefaultAsync(
            userQueryable.Where(u => u.Id == currentUserId));
        if (user != null)
        {
            comment.AuthorName = !user.Name.IsNullOrWhiteSpace()
                ? $"{user.Name} {user.Surname}".Trim()
                : user.UserName;
            await _repository.UpdateAsync(comment);
        }

        return MapToDto(comment, user?.UserName);
    }

    [Authorize]
    public async Task DeleteAsync(Guid id)
    {
        var comment = await _repository.GetAsync(id);
        var currentUserId = CurrentUser.GetId();

        var isAuthor = comment.CreatorId == currentUserId;
        var canDeleteAny = await _permissionChecker.IsGrantedAsync(AcroStackPermissions.Cms.Comments.Delete);
        if (!isAuthor && !canDeleteAny)
        {
            throw new BusinessException("Volo.Abp:Unauthorized");
        }

        await _repository.DeleteAsync(comment);
    }

    private CommentDto MapToDto(Comment comment, string? creatorUserName) => new()
    {
        Id = comment.Id,
        EntityType = comment.EntityType,
        EntityId = comment.EntityId,
        Text = comment.Text,
        AuthorName = comment.AuthorName,
        ParentId = comment.ParentId,
        CreatorUserId = comment.CreatorId,
        CreatorUserName = creatorUserName,
        CreationTime = comment.CreationTime,
        CreatorId = comment.CreatorId,
        LastModificationTime = comment.LastModificationTime,
        LastModifierId = comment.LastModifierId,
    };
}
