using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Modularity;

namespace Classroom;

[DependsOn(
    typeof(ClassroomDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule)
)]
public class ClassroomApplicationContractsModule : AbpModule
{
}
