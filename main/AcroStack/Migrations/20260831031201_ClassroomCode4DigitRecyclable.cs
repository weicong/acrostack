using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class ClassroomCode4DigitRecyclable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ClsClassSessions_ClassroomCode",
                table: "ClsClassSessions");

            migrationBuilder.CreateIndex(
                name: "IX_ClsClassSessions_ClassroomCode",
                table: "ClsClassSessions",
                column: "ClassroomCode",
                unique: true,
                filter: "[Status] <> 40");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ClsClassSessions_ClassroomCode",
                table: "ClsClassSessions");

            migrationBuilder.CreateIndex(
                name: "IX_ClsClassSessions_ClassroomCode",
                table: "ClsClassSessions",
                column: "ClassroomCode",
                unique: true);
        }
    }
}
