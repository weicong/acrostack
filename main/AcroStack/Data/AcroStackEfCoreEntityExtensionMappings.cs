namespace AcroStack.Data;

public static class AcroStackEfCoreEntityExtensionMappings
{
    public static void Configure()
    {
        AcroStackGlobalFeatureConfigurator.Configure();
        AcroStackModuleExtensionConfigurator.Configure();
    }
}
