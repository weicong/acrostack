using Classroom.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Classroom;

[DependsOn(typeof(AbpValidationModule))]
public class ClassroomDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ClassroomDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<ClassroomResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/Classroom");

            options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "简体中文"));
        });

        // 结构化错误码：Classroom:xxx 错误码通过 ClassroomResource 本地化
        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("Classroom", typeof(ClassroomResource));
        });
    }
}
