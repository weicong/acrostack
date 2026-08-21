#:package Microsoft.Data.Sqlite@10.0.*
using Microsoft.Data.Sqlite;

using var conn = new SqliteConnection("Data Source=src/AcroStack/AcroStack.db");
conn.Open();
using var cmd = conn.CreateCommand();
cmd.CommandText = """
    SELECT 'QuizQuestions', COUNT(*) FROM ClsQuizQuestions
    UNION ALL SELECT 'Quizzes', COUNT(*) FROM ClsQuizzes
    UNION ALL SELECT 'Questions', COUNT(*) FROM ClsQuestions
    UNION ALL SELECT 'SessionQuestions', COUNT(*) FROM ClsSessionQuestions
    UNION ALL SELECT 'Participants', COUNT(*) FROM ClsParticipants
    UNION ALL SELECT 'AnswerRecords', COUNT(*) FROM ClsAnswerRecords
    """;
using var reader = cmd.ExecuteReader();
while (reader.Read())
{
    Console.WriteLine($"{reader.GetString(0)}: {reader.GetInt64(1)}");
}
