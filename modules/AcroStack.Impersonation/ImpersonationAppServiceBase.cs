using AcroStack.Impersonation.Localization;
using Volo.Abp.Application.Services;
using Volo.Abp.Localization;

namespace AcroStack.Impersonation;

/// <summary>
/// 模块应用服务基类：绑定模块自持的本地化资源，不依赖宿主的本地化资源类型。
/// </summary>
public abstract class ImpersonationAppServiceBase : ApplicationService
{
    protected ImpersonationAppServiceBase()
    {
        LocalizationResource = typeof(ImpersonationResource);
    }
}
