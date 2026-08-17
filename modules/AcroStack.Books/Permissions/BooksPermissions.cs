namespace AcroStack.Books;

public static class BooksPermissions
{
    public const string Default = AcroStackPermissionConsts.GroupName + ".Books";
    public const string Create = Default + ".Create";
    public const string Edit = Default + ".Edit";
    public const string Delete = Default + ".Delete";
}
