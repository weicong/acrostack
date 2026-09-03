using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class AddImpersonationSessions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppImpersonationSessions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    ImpersonatorUserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ImpersonatorTenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    ImpersonatorUserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    TargetUserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    TargetTenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    TargetUserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    ClientId = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    EndTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsRevoked = table.Column<bool>(type: "INTEGER", nullable: false),
                    RevokedByUserId = table.Column<Guid>(type: "TEXT", nullable: true),
                    RevocationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppImpersonationSessions", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppImpersonationSessions_TenantId_CreationTime",
                table: "AppImpersonationSessions",
                columns: new[] { "TenantId", "CreationTime" });

            migrationBuilder.CreateIndex(
                name: "IX_AppImpersonationSessions_TenantId_ImpersonatorUserId_CreationTime",
                table: "AppImpersonationSessions",
                columns: new[] { "TenantId", "ImpersonatorUserId", "CreationTime" });

            migrationBuilder.CreateIndex(
                name: "IX_AppImpersonationSessions_TenantId_TargetUserId_CreationTime",
                table: "AppImpersonationSessions",
                columns: new[] { "TenantId", "TargetUserId", "CreationTime" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppImpersonationSessions");
        }
    }
}
