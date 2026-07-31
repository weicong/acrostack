using System;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Entities.Cms;
using AcroStack.Services.Dtos.Cms;
using Microsoft.AspNetCore.Authorization;
using System.Linq.Dynamic.Core;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Services.Cms;

/// <summary>
/// Implements tag lookup. Mirrors ABP Commercial CMS Kit Pro's
/// <c>TagAppService</c> read surface.
/// </summary>
public class TagAppService : ApplicationService, ITagAppService
{
    private readonly IRepository<Tag, Guid> _repository;

    public TagAppService(IRepository<Tag, Guid> repository)
    {
        _repository = repository;
    }

    [AllowAnonymous]
    public async Task<PagedResultDto<TagDto>> GetListAsync(TagGetListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.Name.Contains(input.Filter!));
        }

        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var tags = await AsyncExecuter.ToListAsync(query);
        return new PagedResultDto<TagDto>(totalCount, tags.Select(MapToDto).ToList());
    }

    private TagDto MapToDto(Tag tag) => new()
    {
        Id = tag.Id,
        Name = tag.Name,
        CreationTime = tag.CreationTime,
        CreatorId = tag.CreatorId,
        LastModificationTime = tag.LastModificationTime,
        LastModifierId = tag.LastModifierId,
    };
}
