using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Volo.Abp.AspNetCore.Mvc;

namespace AcroStack.Controllers;

public class HomeController(IHostEnvironment env) : AbpController
{
    public ActionResult Index()
    {
        return env.IsDevelopment()
            ? Redirect("~/swagger")
            : File("~/index.html", "text/html");
    }
}
