using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class RemoveStatisticsPublishedStatus : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // StatisticsPublished 状态已移除：历史数据修正为 AnswerPublished（统计随答案一并可见）
            migrationBuilder.Sql(
                "UPDATE ClsSessionQuestions SET Status = 40 WHERE Status = 30;" +
                "UPDATE ClsSessionQuestions SET StatisticsPublishedAt = AnswerPublishedAt " +
                "WHERE StatisticsPublishedAt IS NULL AND AnswerPublishedAt IS NOT NULL;");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
