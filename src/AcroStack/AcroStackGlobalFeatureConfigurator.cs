using Volo.Abp.GlobalFeatures;
using Volo.Abp.Threading;
using Volo.CmsKit.GlobalFeatures;

namespace AcroStack;

public static class AcroStackGlobalFeatureConfigurator
{
    private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

    public static void Configure()
    {
        OneTimeRunner.Run(() =>
        {
            /* Enable the open-source CMS Kit features used by this project.
             * Only the core 6 are enabled (Pages, Blogs, Tags, Comments,
             * Reactions, Menus). Ratings / Media / GlobalResources stay off.
             * See https://docs.abp.io/en/abp/latest/Global-Features */
            var cmsKit = GlobalFeatureManager.Instance.Modules.CmsKit();
            cmsKit.EnableAll();
        });
    }
}
