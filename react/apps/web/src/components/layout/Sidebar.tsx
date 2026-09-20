import { Fragment, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavSectionHeader,
  Text,
  makeStyles,
  shorthands,
  tokens,
  type NavDrawerProps,
} from "@fluentui/react-components";
import { getApplicationName } from "@/lib/runtimeConfig";
import { useShellMenu } from "./shellMenu";

const useStyles = makeStyles({
  brand: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalXS, 0),
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
  body: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXS),
  },
});

/** 导航选中逻辑：内部路由交给 SPA，外链留给浏览器。 */
function useNavItemSelect(): NavDrawerProps["onNavItemSelect"] {
  const navigate = useNavigate();
  const { groups } = useShellMenu();

  const externalPaths = useMemo(
    () =>
      new Set(
        groups.flatMap((group) =>
          group.items.filter((item) => item.externalHref).map((item) => item.path),
        ),
      ),
    [groups],
  );

  return (_event, data) => {
    const value = typeof data.value === "string" ? data.value : "";
    if (value.startsWith("/") && !externalPaths.has(value)) {
      void navigate({ to: value });
    }
  };
}

/**
 * 导航内容（品牌区 + 分组条目）。
 *
 * 与容器解耦：宽屏由 `Sidebar` 放进常驻侧栏，窄屏由 `@acrostack/app-shell`
 * 自动生成的移动抽屉原样复用同一份内容。
 */
export function SidebarNav() {
  const styles = useStyles();
  const { groups } = useShellMenu();
  const appName = getApplicationName();

  return (
    <>
      <NavDrawerHeader>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            {appName.charAt(0).toUpperCase()}
          </span>
          <span className={styles.brandText}>
            <Text weight="semibold">{appName}</Text>
            <Text size={200}>管理后台</Text>
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
}

/** 宽屏常驻侧栏（窄屏由 AppShell 的移动抽屉承载同一份 `SidebarNav`）。 */
export function Sidebar() {
  const { activeItem } = useShellMenu();
  const handleNavItemSelect = useNavItemSelect();

  return (
    <NavDrawer
      type="inline"
      open
      aria-label="主导航"
      selectedValue={activeItem?.path}
      onNavItemSelect={handleNavItemSelect}
    >
      <SidebarNav />
    </NavDrawer>
  );
}
