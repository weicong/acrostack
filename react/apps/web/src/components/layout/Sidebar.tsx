import { Fragment, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  NavDrawer,
  NavDrawerBody,
  NavItem,
  NavSectionHeader,
  makeStyles,
  shorthands,
  tokens,
  type NavDrawerProps,
} from "@fluentui/react-components";
import { useShellMenu } from "./shellMenu";

const useStyles = makeStyles({
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
 * 导航内容（分组条目）。品牌标识常驻顶栏（见 `Header`），侧栏不再重复展示。
 *
 * 与容器解耦：宽屏由 `Sidebar` 放进常驻侧栏，窄屏由 `@acrostack/app-shell`
 * 自动生成的移动抽屉原样复用同一份内容。
 */
export function SidebarNav() {
  const styles = useStyles();
  const { groups } = useShellMenu();

  return (
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
