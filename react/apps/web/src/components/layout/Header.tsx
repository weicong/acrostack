import { ArrowExit20Regular } from "@fluentui/react-icons";
import { useAppShellMobile } from "@acrostack/ui/app-shell";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  Divider,
  Text,
  Toolbar,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { getApplicationName, useAuth } from "@acrostack/core";
import { useCurrentPageTitle } from "@/lib/usePageTitle";
import { BrandMark } from "./BrandMark";
import { UserMenu } from "./UserMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useShellMenu } from "./shellMenu";

const useStyles = makeStyles({
  /* 顶栏左侧：品牌 +（宽屏）面包屑，作为一组贴左 */
  left: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalL),
    minWidth: 0,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  /* Divider 根元素自带 flexGrow:1，会抢占剩余空间，这里收敛为内容宽度 */
  brandDivider: {
    flexGrow: 0,
    flexShrink: 0,
  },
  /* Toolbar 在此只当布局行用：清掉它自带的 4px/8px 内边距，
     让账户区右边缘与内容区留白（16px）严格对齐；间距统一由令牌给出 */
  toolbar: {
    ...shorthands.padding(0),
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

/**
 * 顶栏内容：左侧品牌 + 定位，右侧外观切换与账户区。
 *
 * 品牌标识常驻顶栏（所有尺寸），侧栏不再重复展示；
 * 宽屏在品牌后附面包屑，窄屏由内容区标题定位（顶栏空间有限）。
 * 面包屑使用 Fluent 默认样式（默认字号配色，当前页标 `aria-current="page"`）。
 * 顶栏高度、内外边距与两端对齐由 `@acrostack/ui/app-shell` 提供。
 */
export function Header() {
  const styles = useStyles();
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
      <div className={styles.left}>
        <div className={styles.brand}>
          <BrandMark size="small" name={appName} />
          <Text weight="semibold">{appName}</Text>
        </div>
        {!isMobile && crumbName && (
          <>
            <Divider vertical className={styles.brandDivider} />
            <Breadcrumb aria-label="当前位置">
              {activeGroupCaption && (
                <>
                  <BreadcrumbItem>{activeGroupCaption}</BreadcrumbItem>
                  <BreadcrumbDivider />
                </>
              )}
              <BreadcrumbItem aria-current="page">{crumbName}</BreadcrumbItem>
            </Breadcrumb>
          </>
        )}
      </div>

      <Toolbar className={styles.toolbar} aria-label="外观与账户">
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
