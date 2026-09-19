import { Fragment, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  makeStyles,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavSectionHeader,
  Text,
  shorthands,
  tokens,
  type NavDrawerProps,
} from "@fluentui/react-components";
import { getApplicationName } from "@/lib/runtimeConfig";
import { useShellMenu } from "./shellMenu";

type SidebarProps =
  | { variant: "inline" }
  | { variant: "overlay"; open: boolean; onOpenChange: (open: boolean) => void };

const useStyles = makeStyles({
  brand: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    paddingTop: tokens.spacingVerticalXS,
    paddingBottom: tokens.spacingVerticalXS,
  },
  brandMark: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "32px",
    height: "32px",
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  brandSubtitle: {
    color: tokens.colorNeutralForeground3,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXS),
  },
});

/**
 * 侧边导航：宽屏常驻（inline），窄屏为浮层抽屉（overlay）。
 *
 * 导航项来自 route-config 的菜单模型（按权限过滤），选中态由当前路由驱动：
 *   - 内部路由渲染为按钮，点击后经 NavDrawer 的 onNavItemSelect 走 SPA 导航；
 *   - 外链渲染为链接并交给浏览器打开（新标签页）。
 * 颜色与间距全部取自 Fluent 令牌，因此自动跟随品牌与明暗主题。
 */
export function Sidebar(props: SidebarProps) {
  const styles = useStyles();
  const navigate = useNavigate();
  const { groups, activeItem } = useShellMenu();
  const appName = getApplicationName();

  // 外链项由浏览器直接打开，不参与 SPA 导航
  const externalPaths = useMemo(
    () =>
      new Set(
        groups.flatMap((group) =>
          group.items.filter((item) => item.externalHref).map((item) => item.path),
        ),
      ),
    [groups],
  );

  const handleNavItemSelect: NavDrawerProps["onNavItemSelect"] = (_event, data) => {
    if (props.variant === "overlay") props.onOpenChange(false);

    const value = typeof data.value === "string" ? data.value : "";
    if (value.startsWith("/") && !externalPaths.has(value)) {
      void navigate({ to: value });
    }
  };

  const content = (
    <>
      <NavDrawerHeader>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            {appName.charAt(0).toUpperCase()}
          </span>
          <span className={styles.brandText}>
            <Text weight="semibold">{appName}</Text>
            <Text size={200} className={styles.brandSubtitle}>
              管理后台
            </Text>
          </span>
        </div>
      </NavDrawerHeader>

      <NavDrawerBody className={styles.body}>
        {groups.map((group) => (
          <Fragment key={group.caption}>
            <NavSectionHeader>{group.caption}</NavSectionHeader>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isExternal = Boolean(item.externalHref);

              return (
                <NavItem
                  key={item.path}
                  value={item.path}
                  href={isExternal ? item.externalHref : undefined}
                  target={isExternal ? (item.externalTarget ?? "_blank") : undefined}
                  rel={isExternal ? item.externalRel : undefined}
                  icon={Icon ? <Icon /> : undefined}
                >
                  {item.name}
                </NavItem>
              );
            })}
          </Fragment>
        ))}
      </NavDrawerBody>
    </>
  );

  if (props.variant === "overlay") {
    return (
      <NavDrawer
        type="overlay"
        open={props.open}
        onOpenChange={(_event, data) => props.onOpenChange(data.open)}
        size="small"
        aria-label="主导航"
        selectedValue={activeItem?.path}
        onNavItemSelect={handleNavItemSelect}
      >
        {content}
      </NavDrawer>
    );
  }

  return (
    <NavDrawer
      type="inline"
      open
      aria-label="主导航"
      selectedValue={activeItem?.path}
      onNavItemSelect={handleNavItemSelect}
    >
      {content}
    </NavDrawer>
  );
}
