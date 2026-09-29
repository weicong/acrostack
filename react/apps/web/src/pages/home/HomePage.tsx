import type { KeyboardEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { BookOpen, Code, Info, LogOut } from "lucide-react";
import { Alert, AlertAction, AlertDescription } from "@workspace/ui/components/alert";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { PageHeader, useTheme } from "@workspace/layout";
import { getApiUrl, getApplicationName, useAuth, useCurrentUser } from "@workspace/core";
import { useShellNav } from "@/shell/layout";

/** 卡片墙列配置：按最小宽度自动排布，窄屏自然折行。 */
const TILE_GRID = "grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]";

/** 可点击卡片：Enter / Space 与鼠标点击行为一致，保持键盘可达。 */
function activateOnKey(event: KeyboardEvent<HTMLDivElement>, action: () => void) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
}

/**
 * 工作台首页：把「能做什么」直接摆在用户面前。
 *
 *  - 常用功能：直接复用侧栏菜单模型（已按权限过滤），点击即进入；
 *  - 运行信息：应用名、当前用户、外观与后端地址，便于排查环境问题；
 *  - 帮助与文档：需要查资料时不必离开应用去找入口。
 */
export function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated, navigateToLogin } = useAuth();
  const currentUser = useCurrentUser();
  const groups = useShellNav();
  const { theme } = useTheme();
  const appName = getApplicationName();

  // 快捷入口：扁平化所有分组的所有条目（含子项），不按分组分块展示
  const shortcuts = groups.flatMap((group) =>
    group.items.flatMap((item) => [
      { to: item.to, label: item.label, icon: item.icon, group: group.label },
      ...(item.children ?? []).map((child) => ({
        to: child.to,
        label: child.label,
        icon: undefined,
        group: group.label,
      })),
    ]),
  );

  const displayName = currentUser?.name ?? currentUser?.userName ?? null;
  const themeLabel = theme === "dark" ? "深色" : theme === "light" ? "浅色" : "跟随系统";

  return (
    <>
      <PageHeader
        title={displayName ? `欢迎回来，${displayName}` : "欢迎"}
        description="这里汇总了你可以访问的功能入口与当前运行信息，选择卡片即可进入对应页面。"
      />

      {!isAuthenticated && (
        <Alert>
          <Info />
          <AlertDescription>你尚未登录，登录后即可使用管理功能。</AlertDescription>
          <AlertAction>
            <Button onClick={navigateToLogin}>
              <LogOut />
              登录
            </Button>
          </AlertAction>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>常用功能</CardTitle>
          <CardDescription>按你拥有的权限展示，点击卡片直接进入</CardDescription>
        </CardHeader>
        <CardContent>
          {shortcuts.length === 0 ? (
            <p>当前没有可访问的功能，请联系管理员分配权限。</p>
          ) : (
            <div className={TILE_GRID}>
              {shortcuts.map((item) => {
                const Icon = item.icon;
                const open = () => void navigate({ to: item.to });
                return (
                  <Card
                    key={item.to}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.label}（${item.group}）`}
                    onClick={open}
                    onKeyDown={(event) => activateOnKey(event, open)}
                    className="cursor-pointer hover:bg-muted/50 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    <CardHeader
                      className={Icon ? "grid-cols-[auto_1fr] items-center gap-x-3" : undefined}
                    >
                      {Icon ? <Icon className="row-span-2 size-5 text-muted-foreground" /> : null}
                      <CardTitle>{item.label}</CardTitle>
                      <CardDescription>{item.group}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>运行信息</CardTitle>
          <CardDescription>当前会话与应用配置</CardDescription>
        </CardHeader>
        {/* 两列对齐的键值表；用 grid 承载（`dl` 的默认 `dd` 缩进会破坏对齐） */}
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <span>应用名称</span>
            <span>{appName}</span>
            <span>当前用户</span>
            <span>{displayName ?? "未登录"}</span>
            <span>外观</span>
            <span>{themeLabel}</span>
            <span>后端地址</span>
            <span>{getApiUrl()}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>帮助与文档</CardTitle>
          <CardDescription>需要查资料时可直接打开</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={TILE_GRID}>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer" />
              }
            >
              <Code />
              shadcn/ui 组件文档
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://abp.io/docs/latest/framework/ui/react/index"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <BookOpen />
              ABP React UI 文档
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
