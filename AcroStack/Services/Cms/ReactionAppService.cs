using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AcroStack.Entities.Cms;
using AcroStack.Services.Dtos.Cms;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace AcroStack.Services.Cms;

/// <summary>
/// Implements polymorphic reactions. Mirrors ABP Commercial CMS Kit Pro's
/// <c>ReactionAppService</c>. A user can leave at most one reaction of each
/// type per entity; toggling removes an existing one or inserts a new one.
/// </summary>
public class ReactionAppService : ApplicationService, IReactionAppService
{
    private readonly IRepository<Reaction, Guid> _repository;

    public ReactionAppService(IRepository<Reaction, Guid> repository)
    {
        _repository = repository;
    }

    [AllowAnonymous]
    public async Task<ReactionSummaryDto> GetForEntityAsync(string entityType, Guid entityId)
    {
        var queryable = await _repository.GetQueryableAsync();
        var reactions = await AsyncExecuter.ToListAsync(
            queryable.Where(r => r.EntityType == entityType && r.EntityId == entityId));

        var summary = new ReactionSummaryDto
        {
            EntityType = entityType,
            EntityId = entityId,
            TotalCount = reactions.Count,
            CountsByType = reactions
                .GroupBy(r => r.ReactionType)
                .ToDictionary(g => g.Key, g => g.Count()),
        };

        if (CurrentUser.IsAuthenticated)
        {
            var currentUserId = CurrentUser.GetId();
            summary.currentUserReactions = reactions
                .Where(r => r.CreatorId == currentUserId)
                .Select(r => r.ReactionType)
                .ToList();
        }

        return summary;
    }

    [Authorize]
    public async Task<ReactionSummaryDto> ToggleAsync(CreateReactionInput input)
    {
        var currentUserId = CurrentUser.GetId();
        var queryable = await _repository.GetQueryableAsync();

        var existing = await AsyncExecuter.FirstOrDefaultAsync(
            queryable.Where(r => r.EntityType == input.EntityType
                && r.EntityId == input.EntityId
                && r.ReactionType == input.ReactionType
                && r.CreatorId == currentUserId));

        if (existing != null)
        {
            await _repository.DeleteAsync(existing);
        }
        else
        {
            var reaction = new Reaction(
                GuidGenerator.Create(), input.EntityType, input.EntityId, input.ReactionType);
            await _repository.InsertAsync(reaction);
        }

        return await GetForEntityAsync(input.EntityType, input.EntityId);
    }

    [Authorize]
    public async Task DeleteAsync(string entityType, Guid entityId, string reactionType)
    {
        var currentUserId = CurrentUser.GetId();
        var queryable = await _repository.GetQueryableAsync();

        var existing = await AsyncExecuter.FirstOrDefaultAsync(
            queryable.Where(r => r.EntityType == entityType
                && r.EntityId == entityId
                && r.ReactionType == reactionType
                && r.CreatorId == currentUserId));

        if (existing != null)
        {
            await _repository.DeleteAsync(existing);
        }
    }
}
