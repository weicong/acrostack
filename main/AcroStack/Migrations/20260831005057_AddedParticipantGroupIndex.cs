using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class AddedParticipantGroupIndex : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GroupIndex",
                table: "ClsParticipants",
                type: "INTEGER",
                nullable: false,
                defaultValue: 1);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GroupIndex",
                table: "ClsParticipants");
        }
    }
}
