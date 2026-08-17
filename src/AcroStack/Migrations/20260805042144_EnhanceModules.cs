using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class EnhanceModules : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CurrentVersion",
                table: "AppFileEntries",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "AttachmentBlobName",
                table: "AppChatMessages",
                type: "TEXT",
                maxLength: 128,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AttachmentContentType",
                table: "AppChatMessages",
                type: "TEXT",
                maxLength: 128,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AttachmentName",
                table: "AppChatMessages",
                type: "TEXT",
                maxLength: 256,
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "AttachmentSize",
                table: "AppChatMessages",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<bool>(
                name: "IsEdited",
                table: "AppChatMessages",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "AppChatBlockedUsers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    BlockedUserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppChatBlockedUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppChatMessageReactions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    ChatMessageId = table.Column<Guid>(type: "TEXT", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Reaction = table.Column<string>(type: "TEXT", maxLength: 32, nullable: false),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppChatMessageReactions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppFileShares",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    FileEntryId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Token = table.Column<string>(type: "TEXT", maxLength: 32, nullable: false),
                    ExpirationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    MaxDownloadCount = table.Column<int>(type: "INTEGER", nullable: true),
                    DownloadCount = table.Column<int>(type: "INTEGER", nullable: false),
                    IsRevoked = table.Column<bool>(type: "INTEGER", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "TEXT", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppFileShares", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppFileVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    FileEntryId = table.Column<Guid>(type: "TEXT", nullable: false),
                    VersionNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    BlobName = table.Column<string>(type: "TEXT", maxLength: 128, nullable: false),
                    ByteSize = table.Column<long>(type: "INTEGER", nullable: false),
                    ContentType = table.Column<string>(type: "TEXT", maxLength: 128, nullable: true),
                    UploadedByUserId = table.Column<Guid>(type: "TEXT", nullable: true),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "TEXT", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppFileVersions", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppChatBlockedUsers_TenantId_UserId_BlockedUserId",
                table: "AppChatBlockedUsers",
                columns: new[] { "TenantId", "UserId", "BlockedUserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppChatMessageReactions_TenantId_ChatMessageId_UserId_Reaction",
                table: "AppChatMessageReactions",
                columns: new[] { "TenantId", "ChatMessageId", "UserId", "Reaction" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppFileShares_TenantId_FileEntryId",
                table: "AppFileShares",
                columns: new[] { "TenantId", "FileEntryId" });

            migrationBuilder.CreateIndex(
                name: "IX_AppFileShares_Token",
                table: "AppFileShares",
                column: "Token",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppFileVersions_TenantId_FileEntryId",
                table: "AppFileVersions",
                columns: new[] { "TenantId", "FileEntryId" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppChatBlockedUsers");

            migrationBuilder.DropTable(
                name: "AppChatMessageReactions");

            migrationBuilder.DropTable(
                name: "AppFileShares");

            migrationBuilder.DropTable(
                name: "AppFileVersions");

            migrationBuilder.DropColumn(
                name: "CurrentVersion",
                table: "AppFileEntries");

            migrationBuilder.DropColumn(
                name: "AttachmentBlobName",
                table: "AppChatMessages");

            migrationBuilder.DropColumn(
                name: "AttachmentContentType",
                table: "AppChatMessages");

            migrationBuilder.DropColumn(
                name: "AttachmentName",
                table: "AppChatMessages");

            migrationBuilder.DropColumn(
                name: "AttachmentSize",
                table: "AppChatMessages");

            migrationBuilder.DropColumn(
                name: "IsEdited",
                table: "AppChatMessages");
        }
    }
}
