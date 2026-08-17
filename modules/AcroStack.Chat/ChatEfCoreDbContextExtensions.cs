using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace AcroStack.Chat;

public static class ChatEfCoreDbContextExtensions
{
    private const int MaxMessageTextLength = 4000;

    public static void ConfigureChat(this ModelBuilder builder, string tablePrefix = "App", string? schema = null)
    {
        builder.Entity<ChatMessage>(b =>
        {
            b.ToTable(tablePrefix + "ChatMessages", schema);
            b.ConfigureByConvention();
            b.Property(x => x.Text).IsRequired().HasMaxLength(MaxMessageTextLength);
            b.Property(x => x.AttachmentName).HasMaxLength(256);
            b.Property(x => x.AttachmentBlobName).HasMaxLength(128);
            b.Property(x => x.AttachmentContentType).HasMaxLength(128);
            b.Property(x => x.AttachmentSize);
            b.Property(x => x.IsEdited);
        });

        builder.Entity<UserMessage>(b =>
        {
            b.ToTable(tablePrefix + "ChatUserMessages", schema);
            b.ConfigureByConvention();
            b.HasIndex(x => new { x.TenantId, x.UserId, x.TargetUserId });
            b.HasIndex(x => new { x.TenantId, x.UserId, x.IsRead });
        });

        builder.Entity<Conversation>(b =>
        {
            b.ToTable(tablePrefix + "ChatConversations", schema);
            b.ConfigureByConvention();
            b.Property(x => x.LastMessage).HasMaxLength(MaxMessageTextLength);
            b.HasIndex(x => new { x.TenantId, x.UserId, x.TargetUserId });
        });

        builder.Entity<ChatMessageReaction>(b =>
        {
            b.ToTable(tablePrefix + "ChatMessageReactions", schema);
            b.ConfigureByConvention();
            b.Property(x => x.Reaction).IsRequired().HasMaxLength(32);
            b.HasIndex(x => new { x.TenantId, x.ChatMessageId, x.UserId, x.Reaction }).IsUnique();
        });

        builder.Entity<ChatBlockedUser>(b =>
        {
            b.ToTable(tablePrefix + "ChatBlockedUsers", schema);
            b.ConfigureByConvention();
            b.HasIndex(x => new { x.TenantId, x.UserId, x.BlockedUserId }).IsUnique();
        });
    }
}
