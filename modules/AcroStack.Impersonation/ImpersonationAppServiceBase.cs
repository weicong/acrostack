using AcroStack.AccountPro.Localization;
using Volo.Abp.Application.Services;
using Volo.Abp.Localization;

namespace AcroStack.AccountPro;

/// <summary>
/// AccountPro 模块应用服务基类：绑定模块自持的本地化资源，
/// 与其它 AcroStack 模块（AuditLogging、BackgroundJobs ...）保持一致，
/// 不依赖宿主的本地化资源类型。
/// </summary>
public abstract class AccountProAppServiceBase : ApplicationService
{
    protected AccountProAppServiceBase()
    {
        LocalizationResource = typeof(AccountProResource);
    }
}
