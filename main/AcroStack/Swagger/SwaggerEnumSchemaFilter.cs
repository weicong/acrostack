using System.Text.Json.Nodes;
using Microsoft.OpenApi;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace AcroStack.Swagger;

public class SwaggerEnumSchemaFilter : ISchemaFilter
{
    public void Apply(IOpenApiSchema schema, SchemaFilterContext context)
    {
        var type = context.Type;
        if (type is null || !type.IsEnum || schema.Extensions is null || schema.Extensions.ContainsKey("x-enumNames"))
        {
            return;
        }

        var enumNames = new JsonArray();
        foreach (var name in Enum.GetNames(type))
        {
            enumNames.Add(name);
        }

        schema.Extensions.Add("x-enumNames", new JsonNodeExtension(enumNames));
    }
}
