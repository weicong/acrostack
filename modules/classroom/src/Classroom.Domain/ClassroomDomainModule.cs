using Volo.Abp.Modularity;

namespace Classroom;

[DependsOn(typeof(ClassroomDomainSharedModule))]
public class ClassroomDomainModule : AbpModule
{
}
