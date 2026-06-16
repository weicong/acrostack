namespace AcroStack.Permissions;

public static class AcroStackPermissions
{
    public const string GroupName = "AcroStack";

    public static class Books
    {
        public const string Default = GroupName + ".Books";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
