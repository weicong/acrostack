using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using AcroStack.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;
using AcroStack.Entities.SaaS;
using AcroStack.Services.Dtos.SaaS;

namespace AcroStack.Services.SaaS;

[Authorize(AcroStackPermissions.SaaS.Editions)]
public class EditionAppService : ApplicationService, IEditionAppService
{
    private readonly IRepository<Edition, Guid> _repository;

    public EditionAppService(IRepository<Edition, Guid> repository)
    {
        _repository = repository;
    }

    public async Task<EditionDto> GetAsync(Guid id)
    {
        var edition = await _repository.GetAsync(id);
        return ObjectMapper.Map<Edition, EditionDto>(edition);
    }

    public async Task<PagedResultDto<EditionDto>> GetListAsync(EditionGetListInput input)
    {
        var queryable = await _repository.GetQueryableAsync();

        if (!input.Filter.IsNullOrWhiteSpace())
        {
            queryable = queryable.Where(x => x.DisplayName.Contains(input.Filter!));
        }

        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "DisplayName" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var editions = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<EditionDto>(
            totalCount,
            ObjectMapper.Map<List<Edition>, List<EditionDto>>(editions)
        );
    }

    [Authorize(AcroStackPermissions.SaaS.EditionsCreate)]
    public async Task<EditionDto> CreateAsync(CreateUpdateEditionDto input)
    {
        var edition = ObjectMapper.Map<CreateUpdateEditionDto, Edition>(input);
        await _repository.InsertAsync(edition);
        return ObjectMapper.Map<Edition, EditionDto>(edition);
    }

    [Authorize(AcroStackPermissions.SaaS.EditionsUpdate)]
    public async Task<EditionDto> UpdateAsync(Guid id, CreateUpdateEditionDto input)
    {
        var edition = await _repository.GetAsync(id);
        ObjectMapper.Map(input, edition);
        await _repository.UpdateAsync(edition);
        return ObjectMapper.Map<Edition, EditionDto>(edition);
    }

    [Authorize(AcroStackPermissions.SaaS.EditionsDelete)]
    public async Task DeleteAsync(Guid id)
    {
        await _repository.DeleteAsync(id);
    }
}
