import { useState } from "react";
import { toast } from "sonner";
import { UserRoundCog } from "lucide-react";
import { Alert, AlertDescription } from "@acrostack/ui/components/alert";
import { Button } from "@acrostack/ui/components/button";
import { backToMyAccount, useCurrentUser } from "@acrostack/core";

/**
 * 模拟登录横幅：当前会话是「以他人身份登录」时在整站顶部提示，
 * 并提供「返回原账户」动作。
 *
 * 身份取自 ABP 的 application-configuration —— 服务端从 JWT 的 impersonator
 * claims 填充 `currentUser`，前端不需要自己解析令牌。
 */
export function ImpersonationBanner() {
  const currentUser = useCurrentUser();
  const [isRestoring, setIsRestoring] = useState(false);

  if (!currentUser?.impersonatorUserId) return null;

  const impersonatorLabel = currentUser.impersonatorUserName ?? "管理员";

  async function handleBack() {
    setIsRestoring(true);
    try {
      await backToMyAccount();
    } catch (error) {
      console.error("[impersonation] back to my account failed:", error);
      toast.error(error instanceof Error ? error.message : String(error));
      setIsRestoring(false);
    }
  }

  return (
    <Alert className="rounded-none border-x-0 border-t-0 border-b bg-amber-50 px-4 py-2 dark:bg-amber-950/30">
      <UserRoundCog />
      <AlertDescription className="flex flex-wrap items-center justify-between gap-2">
        <span>{`当前正以「${currentUser.userName ?? "他人"}」的身份操作，返回 ${impersonatorLabel} 的账户可恢复。`}</span>
        <Button size="sm" onClick={() => void handleBack()} disabled={isRestoring}>
          {isRestoring ? "正在返回..." : "返回原账户"}
        </Button>
      </AlertDescription>
    </Alert>
  );
}
