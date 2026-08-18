using System;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace AcroStack.Books;

public class Book : AuditedAggregateRoot<Guid>, IMultiTenant
{
    public string Name { get; set; }

    public BookType Type { get; set; }

    public DateTime PublishDate { get; set; }

    /// <summary>金额必须使用 decimal，float 存在二进制精度误差。</summary>
    public decimal Price { get; set; }

    public virtual Guid? TenantId { get; protected set; }
}
