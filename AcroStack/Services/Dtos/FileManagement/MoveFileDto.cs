using System;

namespace AcroStack.Services.Dtos.FileManagement;

public class MoveFileDto
{
    public Guid? TargetFolderId { get; set; }
}
