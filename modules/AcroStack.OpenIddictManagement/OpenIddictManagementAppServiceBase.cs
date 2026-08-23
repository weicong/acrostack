using AcroStack.OpenIddictManagement.Localization;
using Volo.Abp.Application.Services;

namespace AcroStack.OpenIddictManagement;

/// <summary>OpenIddictManagement 模块应用服务基类（对齐 ABP 官方模块模式：模块内自持基类，不依赖宿主项目）。</summary>
public abstract class OpenIddictManagementAppServiceBase : ApplicationService
{
    protected OpenIddictManagementAppServiceBase()
    {
        LocalizationResource = typeof(OpenIddictManagementResource);
    }
}
