using Volo.Abp.Application;
using Volo.Abp.Modularity;

namespace AcroStack.Common;

[DependsOn(typeof(AbpDddApplicationModule))]
public class AcroStackCommonModule : AbpModule
{
}
