using Classroom.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Classroom.Permissions;

public static class ClassroomPermissions
{
    public const string GroupName = "Classroom";

    public static class Questions
    {
        public const string Manage = "Classroom.Questions.Manage";
        public const string Default = Manage;
    }

    public static class Quizzes
    {
        public const string Manage = "Classroom.Quizzes.Manage";
        public const string Default = Manage;
    }

    public static class Sessions
    {
        public const string Create = "Classroom.Sessions.Create";
        public const string Control = "Classroom.Sessions.Control";
        public const string ViewDashboard = "Classroom.Sessions.ViewDashboard";
        public const string Default = Create;
    }
}

public class ClassroomPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(ClassroomPermissions.GroupName, L("Permission:Classroom"));

        group.AddPermission(ClassroomPermissions.Questions.Manage, L("Permission:Questions.Manage"));
        group.AddPermission(ClassroomPermissions.Quizzes.Manage, L("Permission:Quizzes.Manage"));

        var sessions = group.AddPermission(ClassroomPermissions.Sessions.Create, L("Permission:Sessions.Create"));
        sessions.AddChild(ClassroomPermissions.Sessions.Control, L("Permission:Sessions.Control"));
        sessions.AddChild(ClassroomPermissions.Sessions.ViewDashboard, L("Permission:Sessions.ViewDashboard"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ClassroomResource>(name);
    }
}
