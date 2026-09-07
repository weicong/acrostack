using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class AddStudentProfiles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "StudentProfileId",
                table: "ClsParticipants",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ClsStudentProfiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 32, nullable: false),
                    Phone = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    Unit = table.Column<string>(type: "TEXT", maxLength: 64, nullable: false),
                    Position = table.Column<string>(type: "TEXT", maxLength: 32, nullable: false),
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
                    table.PrimaryKey("PK_ClsStudentProfiles", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClsParticipants_SessionId_StudentProfileId",
                table: "ClsParticipants",
                columns: new[] { "SessionId", "StudentProfileId" });

            migrationBuilder.CreateIndex(
                name: "IX_ClsParticipants_StudentProfileId",
                table: "ClsParticipants",
                column: "StudentProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_ClsStudentProfiles_TenantId_Phone",
                table: "ClsStudentProfiles",
                columns: new[] { "TenantId", "Phone" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClsStudentProfiles");

            migrationBuilder.DropIndex(
                name: "IX_ClsParticipants_SessionId_StudentProfileId",
                table: "ClsParticipants");

            migrationBuilder.DropIndex(
                name: "IX_ClsParticipants_StudentProfileId",
                table: "ClsParticipants");

            migrationBuilder.DropColumn(
                name: "StudentProfileId",
                table: "ClsParticipants");
        }
    }
}
