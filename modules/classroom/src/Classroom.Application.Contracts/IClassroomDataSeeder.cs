using System.Threading.Tasks;

namespace Classroom;

/// <summary>
/// 示例题库/试卷种子数据（教师测试账号由宿主 Identity 种子负责）。
/// DbMigrator 与宿主 --migrate-database 均调用。
/// </summary>
public interface IClassroomDataSeeder
{
    Task SeedAsync();
}
