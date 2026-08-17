using Microsoft.Extensions.Localization;
using AcroStack.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace AcroStack;

[Dependency(ReplaceServices = true)]
public class AcroStackBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<AcroStackResource> _localizer;

    public AcroStackBrandingProvider(IStringLocalizer<AcroStackResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}