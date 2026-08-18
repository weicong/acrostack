using System;
using System.Threading.Tasks;
using AcroStack.Books;
using Microsoft.Extensions.Hosting;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace AcroStack.Data;

public class AcroStackDataSeederContributor
    : IDataSeedContributor, ITransientDependency
{
    private readonly IRepository<Book, Guid> _bookRepository;
    private readonly IHostEnvironment _hostEnvironment;

    public AcroStackDataSeederContributor(
        IRepository<Book, Guid> bookRepository,
        IHostEnvironment hostEnvironment)
    {
        _bookRepository = bookRepository;
        _hostEnvironment = hostEnvironment;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        // Demo books belong to the development database only.
        if (!_hostEnvironment.IsDevelopment())
        {
            return;
        }

        if (await _bookRepository.GetCountAsync() <= 0)
        {
            await _bookRepository.InsertAsync(
                new Book
                {
                    Name = "1984",
                    Type = BookType.Dystopia,
                    PublishDate = new DateTime(1949, 6, 8),
                    Price = 19.84m
                },
                autoSave: true
            );

            await _bookRepository.InsertAsync(
                new Book
                {
                    Name = "The Hitchhiker's Guide to the Galaxy",
                    Type = BookType.ScienceFiction,
                    PublishDate = new DateTime(1995, 9, 27),
                    Price = 42.0m
                },
                autoSave: true
            );
        }
    }
}