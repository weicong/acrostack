using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Extensions.DependencyInjection;
using Microsoft.AspNetCore.RateLimiting;
using System.Threading.RateLimiting;
using AcroStack.Data;
using AcroStack.Localization;
using AcroStack.HealthChecks;
using AcroStack.Swagger;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Microsoft.Extensions.DependencyInjection.Extensions;
using OpenIddict.Server;
using OpenIddict.Validation.AspNetCore;
using AcroStack.AccountPro;
using static OpenIddict.Server.OpenIddictServerEvents;
using Volo.Abp;
using Volo.Abp.Studio;
using Volo.Abp.Uow;
using Volo.Abp.Account;
using Volo.Abp.Account.Web;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.SettingManagement;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic.Bundling;
using Volo.Abp.AspNetCore.Serilog;
using Volo.Abp.Auditing;
using Volo.Abp.Autofac;
using Volo.Abp.Mapperly;
using Volo.Abp.Caching;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Emailing;
using Volo.Abp.Localization;
using Localization.Resources.AbpUi;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.HttpApi;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.Swashbuckle;
using Volo.Abp.UI.Navigation.Urls;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.TenantManagement;
using Volo.Abp.OpenIddict;
using Volo.Abp.PermissionManagement.OpenIddict;
using Volo.Abp.Security.Claims;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Sqlite;
using Volo.CmsKit;
using Volo.CmsKit.EntityFrameworkCore;
using Volo.Abp.BackgroundWorkers;
using AcroStack.Books;
using AcroStack.BackgroundJobs;
using AcroStack.OpenIddictManagement;
using AcroStack.IdentityClaims;
using AcroStack.AuditLogging;
using AcroStack.AppUsers;
using AcroStack.FileManagement;
using AcroStack.Chat;
using Classroom;
using Classroom.EntityFrameworkCore;

namespace AcroStack;

[DependsOn(
    // ABP Framework packages
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpAutofacModule),
    typeof(AbpMapperlyModule),
    typeof(AbpCachingModule),
    typeof(AbpSwashbuckleModule),
    typeof(AbpAspNetCoreSerilogModule),
    typeof(AbpBackgroundWorkersModule),

    // theme
    typeof(AbpAspNetCoreMvcUiBasicThemeModule),

    // Account module packages
    typeof(AbpAccountApplicationModule),
    typeof(AbpAccountHttpApiModule),
    typeof(AbpAccountWebOpenIddictModule),

    // Identity module packages
    typeof(AbpPermissionManagementDomainIdentityModule),
    typeof(AbpPermissionManagementDomainOpenIddictModule),
    typeof(AbpIdentityApplicationModule),
    typeof(AbpIdentityHttpApiModule),

    // Tenant Management module packages
    typeof(AbpTenantManagementHttpApiModule),
    typeof(AbpTenantManagementApplicationModule),

    // Permission Management module packages
    typeof(AbpPermissionManagementApplicationModule),
    typeof(AbpPermissionManagementHttpApiModule),

    // Feature Management module packages
    typeof(AbpFeatureManagementHttpApiModule),
    typeof(AbpFeatureManagementApplicationModule),

    // Setting Management module packages
    typeof(AbpSettingManagementHttpApiModule),
    typeof(AbpSettingManagementApplicationModule),

    // Entity Framework Core packages for the used modules
    typeof(AbpAuditLoggingEntityFrameworkCoreModule),
    typeof(AbpIdentityEntityFrameworkCoreModule),
    typeof(AbpOpenIddictEntityFrameworkCoreModule),
    typeof(AbpTenantManagementEntityFrameworkCoreModule),
    typeof(AbpFeatureManagementEntityFrameworkCoreModule),
    typeof(AbpPermissionManagementEntityFrameworkCoreModule),
    typeof(AbpSettingManagementEntityFrameworkCoreModule),
    typeof(AbpBackgroundJobsEntityFrameworkCoreModule),
    typeof(BlobStoringDatabaseEntityFrameworkCoreModule),
    typeof(AbpEntityFrameworkCoreSqliteModule),

    // CMS Kit module packages (open-source Volo.CmsKit)
    typeof(CmsKitDomainModule),
    typeof(CmsKitApplicationModule),
    typeof(CmsKitHttpApiModule),
    typeof(CmsKitEntityFrameworkCoreModule),

    // AcroStack modules
    typeof(BooksModule),
    typeof(BackgroundJobsModule),
    typeof(OpenIddictManagementModule),
    typeof(IdentityClaimsModule),
    typeof(AuditLoggingModule),
    typeof(AccountProModule),
    typeof(AppUsersModule),
    typeof(FileManagementModule),
    typeof(ChatModule),

    // Classroom 课堂实时答题模块（分层模块：HttpApi + EF Core）
    typeof(ClassroomHttpApiModule),
    typeof(ClassroomEntityFrameworkCoreModule)
)]
public class AcroStackModule : AbpModule
{
    /* Single point to enable/disable multi-tenancy */
    public const bool IsMultiTenant = true;

    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        var hostingEnvironment = context.Services.GetHostingEnvironment();
        var configuration = context.Services.GetConfiguration();

        context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
        {
            options.AddAssemblyResource(
                typeof(AcroStackResource)
            );
        });

        PreConfigure<OpenIddictBuilder>(builder =>
        {
            builder.AddValidation(options =>
            {
                options.AddAudiences("AcroStack");
                options.UseLocalServer();
                options.UseAspNetCore();
            });
        });

        // Register the custom Impersonation grant type at the /connect/token endpoint,
        // mirroring ABP Account Pro's "Impersonation" grant type.
        // The open-source ABP Account module does not ship impersonation endpoints,
        // so we handle it via an OpenIddict custom flow (see ImpersonationGrantHandler).
        PreConfigure<OpenIddictServerBuilder>(serverBuilder =>
        {
            serverBuilder.AllowCustomFlow(ImpersonationGrantHandler.GrantType);

            serverBuilder.AddEventHandler<HandleTokenRequestContext>(cfg =>
                cfg.UseScopedHandler<ImpersonationGrantHandler>()
                   .SetOrder(0));
        });

        if (!hostingEnvironment.IsDevelopment())
        {
            PreConfigure<AbpOpenIddictAspNetCoreOptions>(options =>
            {
                options.AddDevelopmentEncryptionAndSigningCertificate = false;
            });

            // Fail fast with actionable guidance instead of an obscure
            // cryptographic exception deep inside OpenIddict startup.
            var certificatePassPhrase = configuration["AuthServer:CertificatePassPhrase"];
            if (certificatePassPhrase.IsNullOrWhiteSpace() || !File.Exists("openiddict.pfx"))
            {
                throw new AbpInitializationException(
                    "Production requires the OpenIddict signing certificate. " +
                    "Place 'openiddict.pfx' next to the app and provide " +
                    "'AuthServer:CertificatePassPhrase' via environment variable " +
                    "(AuthServer__CertificatePassPhrase) or appsettings.secrets.json.");
            }

            PreConfigure<OpenIddictServerBuilder>(serverBuilder =>
            {
                serverBuilder.AddProductionEncryptionAndSigningCertificate("openiddict.pfx", certificatePassPhrase);
            });
        }

        AcroStackGlobalFeatureConfigurator.Configure();
        AcroStackModuleExtensionConfigurator.Configure();
        AcroStackEfCoreEntityExtensionMappings.Configure();
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var hostingEnvironment = context.Services.GetHostingEnvironment();
        var configuration = context.Services.GetConfiguration();

        context.Services.AddMapperlyObjectMapper<AcroStackModule>();

        if (!hostingEnvironment.IsProduction())
        {
            Microsoft.IdentityModel.Logging.IdentityModelEventSource.ShowPII = true;
            Microsoft.IdentityModel.Logging.IdentityModelEventSource.LogCompleteSecurityArtifact = true;
        }

        if (hostingEnvironment.IsDevelopment())
        {
            context.Services.Replace(ServiceDescriptor.Singleton<IEmailSender, NullEmailSender>());
        }

        ConfigureAuthentication(context);
        ConfigureBundles(hostingEnvironment);
        ConfigureMultiTenancy();
        ConfigureUrls(configuration);
        ConfigureHealthChecks(context);
        ConfigureSwagger(context);
        ConfigureAutoApiControllers();
        ConfigureLocalization();
        ConfigureCors(context, configuration);
        ConfigureDataProtection(context, hostingEnvironment, configuration);
        ConfigureVirtualFiles(hostingEnvironment);
        ConfigureEfCore(context);
        ConfigureRateLimiting(context);
        ConfigureAuditing();

        // SignalR for the Chat module (real-time messaging).
        context.Services.AddSignalR();

        if (hostingEnvironment.IsDevelopment())
        {
            context.Services.AddRazorPages()
                .AddRazorRuntimeCompilation();
        }
        Configure<AbpDistributedEntityEventOptions>(options =>
        {
            options.AutoEventSelectors.AddAll();
            options.AutoEventSelectors.Add<Volo.Abp.Identity.IdentityUser>();
            options.EtoMappings.Add<Volo.Abp.Identity.IdentityUser, AppUsers.AppIdentityUserEto>();
        });

        // Configure impersonation options (mirrors ABP Account Pro's AbpAccountOptions).
        Configure<ImpersonationOptions>(configuration.GetSection("Impersonation"));
    }


    private void ConfigureHealthChecks(ServiceConfigurationContext context)
    {
        context.Services.AddAcroStackHealthChecks();
    }

    private void ConfigureAuditing()
    {
        Configure<AbpAuditingOptions>(options =>
        {
            // ABP 默认不记录任何实体的变更历史（EntityHistorySelectors 为空），
            // 审计日志 UI 的"实体变更"页面需要显式配置选择器才有数据来源。
            //
            // 仅勾选业务实体（Books / AppUsers / FileManagement）：
            // - 排除 Chat：消息写入高频，且聊天记录已有独立查询界面，
            //   双写 AbpEntityChanges + AbpEntityPropertyChanges 会成倍放大表体积；
            // - 切勿改用 AddAllEntities()：OpenIddict 令牌/授权等框架实体的
            //   每次刷新都会触发实体变更记录，数据量不可控。
            options.EntityHistorySelectors.Add(
                new NamedTypeSelector(
                    "AcroStackBusinessEntities",
                    type => type.Namespace is not null
                            && (type.Namespace.StartsWith("AcroStack.Books")
                                || type.Namespace.StartsWith("AcroStack.AppUsers")
                                || type.Namespace.StartsWith("AcroStack.FileManagement"))));

            // HTTP GET 请求不产生审计日志（ABP 默认即 false；显式声明，
            // 避免被误开启后只读流量刷爆审计表）。
            options.IsEnabledForGetRequests = false;
        });
    }

    private void ConfigureAuthentication(ServiceConfigurationContext context)
    {
        context.Services.ForwardIdentityAuthenticationForBearer(OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme);
        context.Services.Configure<AbpClaimsPrincipalFactoryOptions>(options =>
        {
            options.IsDynamicClaimsEnabled = true;
        });
    }

    private void ConfigureBundles(IHostEnvironment hostingEnvironment)
    {
        Configure<AbpBundlingOptions>(options =>
        {
            options.StyleBundles.Configure(
                BasicThemeBundles.Styles.Global,
                bundle =>
                {
                    bundle.AddFiles("/global-styles.css");
                }
            );

            options.ScriptBundles.Configure(
                BasicThemeBundles.Scripts.Global,
                bundle =>
                {
                    bundle.AddFiles("/global-scripts.js");
                    if (hostingEnvironment.IsDevelopment())
                    {
                        bundle.AddFiles("/dev-login-helper.js");
                    }
                }
            );
        });
    }

    private void ConfigureMultiTenancy()
    {
        Configure<AbpMultiTenancyOptions>(options =>
        {
            options.IsEnabled = IsMultiTenant;
        });
    }

    private void ConfigureUrls(IConfiguration configuration)
    {
        Configure<AppUrlOptions>(options =>
        {
            options.Applications["MVC"].RootUrl = configuration["App:SelfUrl"];
            options.RedirectAllowedUrls.AddRange(configuration["App:RedirectAllowedUrls"]?.Split(',') ?? Array.Empty<string>());

            options.Applications["React"].RootUrl = configuration["App:ReactUrl"];
            options.Applications["React"].Urls[AccountUrlNames.PasswordReset] = "account/reset-password";
        });
    }

    private void ConfigureLocalization()
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<AcroStackResource>("zh-Hans")
                .AddBaseTypes(typeof(AbpValidationResource), typeof(AbpUiResource))
                .AddVirtualJson("/Localization/AcroStack");

            options.DefaultResourceType = typeof(AcroStackResource);

            options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "简体中文"));

        });
    }

    private void ConfigureAutoApiControllers()
    {
        Configure<AbpAspNetCoreMvcOptions>(options =>
        {
            options.ConventionalControllers.Create(typeof(AcroStackModule).Assembly);
            options.ConventionalControllers.Create(typeof(BooksModule).Assembly);
            options.ConventionalControllers.Create(typeof(BackgroundJobsModule).Assembly);
            options.ConventionalControllers.Create(typeof(OpenIddictManagementModule).Assembly);
            options.ConventionalControllers.Create(typeof(IdentityClaimsModule).Assembly);
            options.ConventionalControllers.Create(typeof(AuditLoggingModule).Assembly);
            options.ConventionalControllers.Create(typeof(AppUsersModule).Assembly);
            options.ConventionalControllers.Create(typeof(FileManagementModule).Assembly);
            options.ConventionalControllers.Create(typeof(ChatModule).Assembly);
            options.ConventionalControllers.Create(typeof(ClassroomApplicationModule).Assembly);
        });
    }

    private void ConfigureSwagger(ServiceConfigurationContext context)
    {
        context.Services.AddAcroStackSwagger();
    }

    private void ConfigureCors(ServiceConfigurationContext context, IConfiguration configuration)
    {
        context.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(builder =>
            {
                builder
                    .WithOrigins(
                        configuration["App:CorsOrigins"]?
                            .Split(",", StringSplitOptions.RemoveEmptyEntries)
                            .Select(o => o.RemovePostFix("/"))
                            .ToArray() ?? Array.Empty<string>()
                    )
                    .WithAbpExposedHeaders()
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });
    }

    private void ConfigureDataProtection(ServiceConfigurationContext context, IHostEnvironment hostingEnvironment, IConfiguration configuration)
    {
        var dataProtection = context.Services.AddDataProtection().SetApplicationName("AcroStack");

        if (!hostingEnvironment.IsDevelopment())
        {
            // Persist keys to disk so restarts don't invalidate auth cookies / antiforgery
            // tokens. Multi-instance deployments must point this at shared storage
            // (or use Redis) — otherwise each instance generates its own key ring.
            var keysDirectory = configuration["DataProtection:KeysDirectory"] ?? "DataProtection-Keys";
            dataProtection.PersistKeysToFileSystem(new DirectoryInfo(Path.Combine(hostingEnvironment.ContentRootPath, keysDirectory)));
        }
    }

    /// <summary>
    /// Throttle /connect/token by client IP to blunt password-guessing and
    /// token-endpoint abuse. 30 attempts/min/IP comfortably covers normal
    /// sign-in, Swagger OAuth and impersonation flows.
    /// Behind a reverse proxy set ForwardedHeaders so RemoteIpAddress is real.
    /// </summary>
    private void ConfigureRateLimiting(ServiceConfigurationContext context)
    {
        context.Services.AddRateLimiter(options =>
        {
            options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
            options.OnRejected = static async (onRejectedContext, _) =>
            {
                onRejectedContext.HttpContext.Response.Headers.RetryAfter = "60";
                await onRejectedContext.HttpContext.Response.WriteAsync("Too many token requests. Please try again later.");
            };

            options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(httpContext =>
            {
                if (HttpMethods.IsPost(httpContext.Request.Method) &&
                    httpContext.Request.Path.StartsWithSegments("/connect/token"))
                {
                    return RateLimitPartition.GetFixedWindowLimiter(
                        httpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown",
                        _ => new FixedWindowRateLimiterOptions
                        {
                            PermitLimit = 30,
                            Window = TimeSpan.FromMinutes(1),
                            QueueLimit = 0,
                            AutoReplenishment = true
                        });
                }

                return RateLimitPartition.GetNoLimiter(string.Empty);
            });
        });
    }

    private void ConfigureVirtualFiles(IWebHostEnvironment hostingEnvironment)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<AcroStackModule>();
            options.FileSets.AddEmbedded<AcroStackResource>();
            if (hostingEnvironment.IsDevelopment())
            {
                /* Using physical files in development, so we don't need to recompile on changes */
                options.FileSets.ReplaceEmbeddedByPhysical<AcroStackModule>(hostingEnvironment.ContentRootPath);
            }
        });
    }

    private void ConfigureEfCore(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<AcroStackDbContext>(options =>
        {
            /* You can remove "includeAllEntities: true" to create
             * default repositories only for aggregate roots
             * Documentation: https://docs.abp.io/en/abp/latest/Entity-Framework-Core#add-default-repositories
             */
            options.AddDefaultRepositories(includeAllEntities: true);
        });

        Configure<AbpDbContextOptions>(options =>
        {
            options.Configure(configurationContext =>
            {
                configurationContext.UseSqlite();
            });
        });

        context.Services.AddAlwaysDisableUnitOfWorkTransaction();
        Configure<AbpUnitOfWorkDefaultOptions>(options =>
        {
            options.TransactionBehavior = UnitOfWorkTransactionBehavior.Disabled;
        });
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();
        var env = context.GetEnvironment();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseAbpRequestLocalization();

        if (!env.IsDevelopment())
        {
            app.UseErrorPage();
        }

        app.UseCorrelationId();
        app.UseRouting();
        app.UseRateLimiter();
        app.UseStaticFiles();
        app.UseAbpSecurityHeaders();
        app.UseCors();

        // SignalR cannot set Authorization header for WebSocket/SSE transports,
        // so the access token is sent as a query string. Move it to the header
        // for hub paths (chat: OpenIddict teacher token; classroom: OpenIddict
        // teacher token — student/presentation classroom tokens are validated
        // by the hub itself via IClassroomTokenService) so the ABP/OpenIddict
        // auth middleware picks it up.
        app.Use(async (httpContext, next) =>
        {
            var accessToken = httpContext.Request.Query["access_token"];
            var path = httpContext.Request.Path;
            if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/signalr-hubs"))
            {
                httpContext.Request.Headers["Authorization"] = "Bearer " + accessToken;
            }
            await next();
        });

        app.UseAuthentication();
        app.UseAbpOpenIddictValidation();

        if (IsMultiTenant)
        {
            app.UseMultiTenancy();
        }

        app.UseUnitOfWork();
        app.UseDynamicClaims();
        app.UseAuthorization();

        // Swagger exposes the full API surface — development only.
        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseAbpSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "AcroStack API");
                options.OAuthClientId(context.GetConfiguration()["AuthServer:SwaggerClientId"]);
            });
        }

        app.UseAuditing();
        app.UseAbpSerilogEnrichers();
        app.UseConfiguredEndpoints(endpoints =>
        {
            endpoints.MapHub<ChatHub>("/signalr-hubs/chat");
            endpoints.MapHub<ClassroomHub>(ClassroomHttpApiModule.HubPath);
            endpoints.MapFallbackToFile("index.html");
        });
    }
}
