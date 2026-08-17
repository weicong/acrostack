using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;

namespace AcroStack.Chat;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ChatMessageReactionToDtoMapper : MapperBase<ChatMessageReaction, ChatMessageReactionDto>
{
    [MapperIgnoreTarget(nameof(ChatMessageReactionDto.UserName))]
    public override partial ChatMessageReactionDto Map(ChatMessageReaction source);

    [MapperIgnoreTarget(nameof(ChatMessageReactionDto.UserName))]
    public override partial void Map(ChatMessageReaction source, ChatMessageReactionDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class ChatBlockedUserToBlockedUserDtoMapper : MapperBase<ChatBlockedUser, BlockedUserDto>
{
    [MapperIgnoreTarget(nameof(BlockedUserDto.BlockedUserName))]
    public override partial BlockedUserDto Map(ChatBlockedUser source);

    [MapperIgnoreTarget(nameof(BlockedUserDto.BlockedUserName))]
    public override partial void Map(ChatBlockedUser source, BlockedUserDto destination);
}
