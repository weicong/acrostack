using Volo.Abp.Application.Services;
using AcroStack.Localization;

namespace AcroStack;

/* Inherit your application services from this class. */
public abstract class AcroStackAppService : ApplicationService
{
    protected AcroStackAppService()
    {
        LocalizationResource = typeof(AcroStackResource);
    }
}
