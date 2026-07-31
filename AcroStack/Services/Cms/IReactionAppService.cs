using System;
using System.Threading.Tasks;
using AcroStack.Services.Dtos.Cms;
using Volo.Abp.Application.Services;

namespace AcroStack.Services.Cms;

/// <summary>
/// Polymorphic reaction API. Mirrors ABP Commercial CMS Kit Pro's
/// <c>ReactionAppService</c> surface. Reads are public; toggling a reaction
/// requires only an authenticated user.
/// </summary>
public interface IReactionAppService : IApplicationService
{
    /// <summary>Per-type counts plus the current user's reactions on an entity.</summary>
    Task<ReactionSummaryDto> GetForEntityAsync(string entityType, Guid entityId);

    /// <summary>
    /// Toggles the current user's reaction of the given type on the entity.
    /// Adds the reaction if absent, removes it if present.
    /// </summary>
    Task<ReactionSummaryDto> ToggleAsync(CreateReactionInput input);

    /// <summary>Removes the current user's reaction of the given type.</summary>
    Task DeleteAsync(string entityType, Guid entityId, string reactionType);
}
