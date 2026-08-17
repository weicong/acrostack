using System;
using System.Collections.Generic;

namespace AcroStack.OpenIddictManagement;

public class OpenIddictScopeDto
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public string? DisplayName { get; set; }
    public string? Description { get; set; }
    public List<string> Resources { get; set; } = new();
    public DateTime CreationTime { get; set; }
}
