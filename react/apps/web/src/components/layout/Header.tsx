import { ArrowExit20Regular, Navigation20Regular } from "@fluentui/react-icons";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  makeStyles,
  Text,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { UserMenu } from "./UserMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuth } from "@/lib/auth/AuthContext";
import { useShellMenu } from "./shellMenu";
import { DESKTOP_MEDIA_QUERY, useMediaQuery } from "@/lib/useMediaQuery";

const useStyles = makeStyles({
  bar: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    width: "100%",
    minWidth: 0,
  },
  navButton: {
    flexShrink: 0,
    "@media (min-width: 1024px)": {
      display: "none",
    },
  },
  crumbs: {
    minWidth: 0,
    ...shorthands.overflow("hidden"),
  },
  crumbMuted: {
    color: tokens.colorNeutralForeground3,
  },
  actions: {
    marginLeft: "auto",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
});

interface HeaderProps {
  /** 窄屏下打开导航抽屉。 */
  onOpenNav: () => void;
}

/**
 * 顶栏：左侧为「导航开关（窄屏）+ 当前位置」，右侧为外观切换与账户区。
 * 面包屑显示所属分组与当前页面，窄屏下只保留当前页面，避免挤压。
 */
export function Header({ onOpenNav }: HeaderProps) {
  const styles = useStyles();
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const { isAuthenticated, isLoading, login } = useAuth();
  const { activeGroupCaption, activeItem } = useShellMenu();

  return (
    <div className={styles.bar}>
      <Button
        className={styles.navButton}
        appearance="subtle"
        icon={<Navigation20Regular />}
        aria-label="打开导航"
        onClick={onOpenNav}
      />

      <Breadcrumb aria-label="当前位置" className={styles.crumbs}>
        {isDesktop && activeGroupCaption && (
          <>
            <BreadcrumbItem>
              <Text className={styles.crumbMuted}>{activeGroupCaption}</Text>
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

      <div className={styles.actions}>
        <ThemeSwitcher />
        {!isLoading &&
          (isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button appearance="primary" icon={<ArrowExit20Regular />} onClick={() => void login()}>
              登录
            </Button>
          ))}
      </div>
    </div>
  );
}
