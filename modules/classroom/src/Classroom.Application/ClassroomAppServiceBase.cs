using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Uow;

namespace Classroom;

/// <summary>Classroom 应用服务基类：提供"UoW 提交成功后推送"的公共挂接点。</summary>
public abstract class ClassroomAppServiceBase : ApplicationService
{
    /// <summary>
    /// 注册 UoW 提交成功后的 SignalR 推送回调（提示词七节：数据库事务提交成功后才广播）。
    /// 无 UoW 上下文（单元测试）时立即执行。
    /// </summary>
    protected void RegisterNotifierCallback(Func<Task> callback)
    {
        var uow = UnitOfWorkManager.Current;
        if (uow is null)
        {
            callback().GetAwaiter().GetResult();
            return;
        }

        uow.OnCompleted(() => callback());
    }
}
