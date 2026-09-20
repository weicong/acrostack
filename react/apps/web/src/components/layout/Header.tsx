import { ArrowExit20Regular } from "@fluentui/react-icons";
import { useAppShellMobile } from "@acrostack/app-shell";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  Text,
  Toolbar,
} from "@fluentui/react-components";
import { UserMenu } from "./UserMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuth } from "@/lib/auth/AuthContext";
import { useShellMenu } from "./shellMenu";

/**
 * 顶栏内容：左侧当前位置（面包屑），右侧外观切换与账户区。
 *
 * 布局与窄屏行为（汉堡开关、侧栏收进抽屉）由 `@acrostack/app-shell` 提供：
 * 这里只根据 `useAppShellMobile()` 决定窄屏下是否省略分组名，不含任何样式。
 */
export function Header() {
  const { isMobile } = useAppShellMobile();
  const { isAuthenticated, isLoading, login } = useAuth();
  const { activeGroupCaption, activeItem } = useShellMenu();

  return (
    <>
      <Breadcrumb aria-label="当前位置">
        {!isMobile && activeGroupCaption && (
          <>
            <BreadcrumbItem>
              <Text>{activeGroupCaption}</Text>
            </BreadcrumbItem>
            <BreadcrumbDivider />
          </>
        )}
        {activeItem && (
          <BreadcrumbItem>
            <Text weight="semibold">{activeItem.name}</Text>
          </BreadcrumbItem>
        )}
      </Breadcrumb>

      <Toolbar aria-label="外观与账户">
        <ThemeSwitcher />
        {!isLoading &&
          (isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button appearance="primary" icon={<ArrowExit20Regular />} onClick={() => void login()}>
              登录
            </Button>
          ))}
      </Toolbar>
    </>
  );
}
