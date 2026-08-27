using Microsoft.OpenApi;

namespace AcroStack.Swagger;

public static class SwaggerConfigurationExtensions
{
    public static void AddAcroStackSwagger(this IServiceCollection services)
    {
        var configuration = services.GetConfiguration();

        services.AddAbpSwaggerGenWithOAuth(
            configuration["AuthServer:Authority"]!,
            new Dictionary<string, string>
            {
                { "AcroStack", "AcroStack API" }
            },
            options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "AcroStack API", Version = "v1" });
                options.DocInclusionPredicate((docName, description) => true);
                options.CustomSchemaIds(SchemaIdSelector);
                options.CustomOperationIds(apiDesc =>
                {
                    var controller = apiDesc.ActionDescriptor.RouteValues["controller"];
                    var action = apiDesc.ActionDescriptor.RouteValues["action"];
                    return $"{controller}_{action}";
                });

                options.SchemaFilter<SwaggerEnumSchemaFilter>();

                if (configuration.GetValue<bool>("Swagger:ShowSummaries"))
                {
                    var loadedAssemblyNames = AppDomain.CurrentDomain.GetAssemblies()
                        .Where(a => !a.IsDynamic && !string.IsNullOrEmpty(a.GetName().Name))
                        .Select(a => a.GetName().Name + ".xml")
                        .ToHashSet();

                    foreach (var xmlFile in Directory.GetFiles(AppContext.BaseDirectory, "*.xml"))
                    {
                        if (loadedAssemblyNames.Contains(Path.GetFileName(xmlFile)))
                        {
                            options.IncludeXmlComments(xmlFile);
                        }
                    }
                }
            });
    }

    private static string SchemaIdSelector(Type modelType)
    {
        if (!modelType.IsConstructedGenericType)
        {
            return modelType.FullName;
        }

        var name = modelType.Name.Split('`').First();
        var args = string.Join("", modelType.GetGenericArguments().Select(SchemaIdSelector));
        return name + "Of" + args;
    }
}
