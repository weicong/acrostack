import { ArrowExit20Regular } from "@fluentui/react-icons";
import { useAppShellMobile } from "@acrostack/app-shell";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  Text,
  Toolbar,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { getApplicationName } from "@/lib/runtimeConfig";
import { useCurrentPageTitle } from "@/lib/usePageTitle";
import { BrandMark } from "./BrandMark";
import { UserMenu } from "./UserMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuth } from "@/lib/auth/AuthContext";
import { useShellMenu } from "./shellMenu";

const useStyles = makeStyles({
  /* 窄屏：侧栏收进抽屉后品牌进入顶栏，任何尺寸下都能看到产品标识 */
  brand: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    minWidth: 0,
  },
  /* 层级：分组名是次要信息（小一号、弱化前景色），当前页才是主信息 */
  groupCaption: {
    color: tokens.colorNeutralForeground3,
  },
  /* Toolbar 在此只当布局行用：清掉它自带的 4px/8px 内边距，
     让账户区右边缘与内容区留白（16px）严格对齐；间距统一由令牌给出 */
  toolbar: {
    ...shorthands.padding(0),
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

/**
 * 顶栏内容：左侧定位，右侧外观切换与账户区。
 *
 * 顶栏高度、内外边距与左右两端对齐由 `@acrostack/app-shell` 提供；
 * 本组件只负责顶栏内部的排版层级与窄屏形态：
 *   - 宽屏：面包屑（分组 / 当前页），分组弱化、当前页加粗放大；
 *   - 窄屏：品牌标识 + 产品名（页面标题已在内容区，顶栏不再重复）。
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
      {isMobile ? (
        <div className={styles.brand}>
          <BrandMark size="small" name={appName} />
          <Text weight="semibold">{appName}</Text>
        </div>
      ) : (
        <Breadcrumb aria-label="当前位置">
          {activeGroupCaption && crumbName && (
            <>
              <BreadcrumbItem>
                <Text size={200} className={styles.groupCaption}>
                  {activeGroupCaption}
                </Text>
              </BreadcrumbItem>
              <BreadcrumbDivider />
            </>
          )}
          {crumbName && (
            <BreadcrumbItem>
              <Text weight="semibold" size={400}>
                {crumbName}
              </Text>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      )}

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
