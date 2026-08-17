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
                options.CustomSchemaIds(type => type.FullName);
                options.CustomOperationIds(apiDesc =>
                {
                    var controller = apiDesc.ActionDescriptor.RouteValues["controller"];
                    var action = apiDesc.ActionDescriptor.RouteValues["action"];
                    return $"{controller}_{action}";
                });
            });
    }
}
