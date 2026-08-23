namespace AcroStack.Books;

public static class BooksPermissions
{
    public const string GroupName = "Books";

    // 权限名沿用 "AcroStack.*" 前缀（已持久化于数据库授权记录），仅分组独立。
    public const string Default = "AcroStack.Books";
    public const string Create = Default + ".Create";
    public const string Edit = Default + ".Edit";
    public const string Delete = Default + ".Delete";
}
