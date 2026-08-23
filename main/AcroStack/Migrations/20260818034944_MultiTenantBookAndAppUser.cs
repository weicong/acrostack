using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class MultiTenantBookAndAppUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AppUsers_UserName",
                table: "AppUsers");

            migrationBuilder.DropIndex(
                name: "IX_AppFileEntries_TenantId_FolderId",
                table: "AppFileEntries");

            migrationBuilder.AddColumn<Guid>(
                name: "TenantId",
                table: "AppUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "AppBooks",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "REAL");

            migrationBuilder.AddColumn<Guid>(
                name: "TenantId",
                table: "AppBooks",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppUsers_TenantId_UserName",
                table: "AppUsers",
                columns: new[] { "TenantId", "UserName" });

            migrationBuilder.CreateIndex(
                name: "IX_AppFileEntries_TenantId_FolderId_Name",
                table: "AppFileEntries",
                columns: new[] { "TenantId", "FolderId", "Name" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AppUsers_TenantId_UserName",
                table: "AppUsers");

            migrationBuilder.DropIndex(
                name: "IX_AppFileEntries_TenantId_FolderId_Name",
                table: "AppFileEntries");

            migrationBuilder.DropColumn(
                name: "TenantId",
                table: "AppUsers");

            migrationBuilder.DropColumn(
                name: "TenantId",
                table: "AppBooks");

            migrationBuilder.AlterColumn<float>(
                name: "Price",
                table: "AppBooks",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.CreateIndex(
                name: "IX_AppUsers_UserName",
                table: "AppUsers",
                column: "UserName");

            migrationBuilder.CreateIndex(
                name: "IX_AppFileEntries_TenantId_FolderId",
                table: "AppFileEntries",
                columns: new[] { "TenantId", "FolderId" });
        }
    }
}
