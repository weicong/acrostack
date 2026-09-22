import { ArrowExit20Regular } from "@fluentui/react-icons";
import { useAppShellMobile } from "@acrostack/ui/app-shell";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  Text,
} from "@fluentui/react-components";
import { HStack } from "@acrostack/ui/layout";
import { getApplicationName, useAuth } from "@acrostack/core";
import { useCurrentPageTitle } from "@/lib/usePageTitle";
import { BrandMark } from "./BrandMark";
import { UserMenu } from "./UserMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useShellMenu } from "@/lib/routing/shell-menu";

/**
 * 顶栏内容：左侧品牌 + 定位，右侧外观切换与账户区。
 *
 * 两个簇由 AppShell 的顶栏行两端对齐（`space-between`），这里只声明各自的排列；
 * 品牌标识常驻顶栏（所有尺寸），侧栏不再重复展示；
 * 宽屏在品牌后附面包屑，窄屏由内容区标题定位（顶栏空间有限）。
 */
export function Header() {
  const { isMobile } = useAppShellMobile();
  const { isAuthenticated, isLoading, login } = useAuth();
  const { activeGroupCaption, activeItem } = useShellMenu();
  const pageTitle = useCurrentPageTitle();
  const appName = getApplicationName();
  // 菜单内的路由显示菜单名（与侧栏一致）；
  // 非菜单页（个人信息、设置、403 等）没有菜单项，回退到页面自报的标题
  const crumbName = activeItem?.name ?? pageTitle;

  return (
    <>
      <HStack gap={4} align="center" minWidth={0}>
        <HStack gap={2} align="center">
          <BrandMark name={appName} />
          <Text weight="semibold">{appName}</Text>
        </HStack>

        {!isMobile && crumbName && (
          <Breadcrumb aria-label="当前位置">
            {activeGroupCaption && (
              <>
                <BreadcrumbItem>{activeGroupCaption}</BreadcrumbItem>
                <BreadcrumbDivider />
              </>
            )}
            <BreadcrumbItem aria-current="page">{crumbName}</BreadcrumbItem>
          </Breadcrumb>
        )}
      </HStack>

      <HStack role="toolbar" aria-label="外观与账户" gap={2} align="center">
        <ThemeSwitcher />
        {!isLoading &&
          (isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button appearance="primary" icon={<ArrowExit20Regular />} onClick={() => void login()}>
              登录
            </Button>
          ))}
      </HStack>
    </>
  );
}
