using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AcroStack.Migrations
{
    /// <inheritdoc />
    public partial class AddedClassroomModule : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClsAnswerRecords",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    SessionId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SessionQuestionId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ParticipantId = table.Column<Guid>(type: "TEXT", nullable: false),
                    AnswerContent = table.Column<string>(type: "TEXT", maxLength: 4000, nullable: false),
                    FirstStartedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LastSubmittedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: false),
                    Revision = table.Column<int>(type: "INTEGER", nullable: false),
                    IsCorrect = table.Column<bool>(type: "INTEGER", nullable: true),
                    RequestId = table.Column<string>(type: "TEXT", maxLength: 64, nullable: false),
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
                    table.PrimaryKey("PK_ClsAnswerRecords", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClsAnswerRevisions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    AnswerRecordId = table.Column<Guid>(type: "TEXT", nullable: false),
                    AnswerContent = table.Column<string>(type: "TEXT", maxLength: 4000, nullable: false),
                    Revision = table.Column<int>(type: "INTEGER", nullable: false),
                    SubmittedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClsAnswerRevisions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClsClassSessions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    QuizId = table.Column<Guid>(type: "TEXT", nullable: false),
                    TeacherId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ClassroomCode = table.Column<string>(type: "TEXT", maxLength: 6, nullable: false),
                    Status = table.Column<int>(type: "INTEGER", nullable: false),
                    CurrentSessionQuestionId = table.Column<Guid>(type: "TEXT", nullable: true),
                    Version = table.Column<int>(type: "INTEGER", nullable: false),
                    StartedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    FinishedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    CurrentQuestionNumber = table.Column<int>(type: "INTEGER", nullable: false),
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
                    table.PrimaryKey("PK_ClsClassSessions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClsParticipants",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    SessionId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Nickname = table.Column<string>(type: "TEXT", maxLength: 32, nullable: false),
                    StudentNumber = table.Column<string>(type: "TEXT", maxLength: 32, nullable: true),
                    JoinedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: false),
                    LastSeenAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: false),
                    OnlineStatus = table.Column<int>(type: "INTEGER", nullable: false),
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
                    table.PrimaryKey("PK_ClsParticipants", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClsQuestions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    Type = table.Column<int>(type: "INTEGER", nullable: false),
                    Stem = table.Column<string>(type: "TEXT", maxLength: 2000, nullable: false),
                    CorrectAnswer = table.Column<string>(type: "TEXT", maxLength: 128, nullable: true),
                    Explanation = table.Column<string>(type: "TEXT", maxLength: 4000, nullable: true),
                    ExtraProperties = table.Column<string>(type: "TEXT", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CreatorId = table.Column<Guid>(type: "TEXT", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "TEXT", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Options = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClsQuestions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClsQuizzes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 128, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
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
                    table.PrimaryKey("PK_ClsQuizzes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClsSessionQuestions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TenantId = table.Column<Guid>(type: "TEXT", nullable: true),
                    SessionId = table.Column<Guid>(type: "TEXT", nullable: false),
                    QuestionId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Order = table.Column<int>(type: "INTEGER", nullable: false),
                    Status = table.Column<int>(type: "INTEGER", nullable: false),
                    DurationSeconds = table.Column<int>(type: "INTEGER", nullable: false),
                    OpenedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    EndsAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    ClosedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    StatisticsPublishedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    AnswerPublishedAt = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
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
                    table.PrimaryKey("PK_ClsSessionQuestions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClsQuizQuestions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    QuestionId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Order = table.Column<int>(type: "INTEGER", nullable: false),
                    QuizId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClsQuizQuestions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClsQuizQuestions_ClsQuizzes_QuizId",
                        column: x => x.QuizId,
                        principalTable: "ClsQuizzes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClsAnswerRecords_RequestId",
                table: "ClsAnswerRecords",
                column: "RequestId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClsAnswerRecords_SessionQuestionId_LastSubmittedAt",
                table: "ClsAnswerRecords",
                columns: new[] { "SessionQuestionId", "LastSubmittedAt" });

            migrationBuilder.CreateIndex(
                name: "IX_ClsAnswerRecords_SessionQuestionId_ParticipantId",
                table: "ClsAnswerRecords",
                columns: new[] { "SessionQuestionId", "ParticipantId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClsAnswerRevisions_AnswerRecordId",
                table: "ClsAnswerRevisions",
                column: "AnswerRecordId");

            migrationBuilder.CreateIndex(
                name: "IX_ClsClassSessions_ClassroomCode",
                table: "ClsClassSessions",
                column: "ClassroomCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClsClassSessions_Status",
                table: "ClsClassSessions",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_ClsClassSessions_TeacherId",
                table: "ClsClassSessions",
                column: "TeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_ClsParticipants_SessionId",
                table: "ClsParticipants",
                column: "SessionId");

            migrationBuilder.CreateIndex(
                name: "IX_ClsParticipants_SessionId_Nickname",
                table: "ClsParticipants",
                columns: new[] { "SessionId", "Nickname" });

            migrationBuilder.CreateIndex(
                name: "IX_ClsQuestions_Type",
                table: "ClsQuestions",
                column: "Type");

            migrationBuilder.CreateIndex(
                name: "IX_ClsQuizQuestions_QuizId_Order",
                table: "ClsQuizQuestions",
                columns: new[] { "QuizId", "Order" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClsSessionQuestions_SessionId",
                table: "ClsSessionQuestions",
                column: "SessionId");

            migrationBuilder.CreateIndex(
                name: "IX_ClsSessionQuestions_SessionId_Order",
                table: "ClsSessionQuestions",
                columns: new[] { "SessionId", "Order" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClsSessionQuestions_Status",
                table: "ClsSessionQuestions",
                column: "Status");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClsAnswerRecords");

            migrationBuilder.DropTable(
                name: "ClsAnswerRevisions");

            migrationBuilder.DropTable(
                name: "ClsClassSessions");

            migrationBuilder.DropTable(
                name: "ClsParticipants");

            migrationBuilder.DropTable(
                name: "ClsQuestions");

            migrationBuilder.DropTable(
                name: "ClsQuizQuestions");

            migrationBuilder.DropTable(
                name: "ClsSessionQuestions");

            migrationBuilder.DropTable(
                name: "ClsQuizzes");
        }
    }
}
