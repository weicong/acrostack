import {
  ArrowExit20Regular,
  Navigation20Regular,
  WeatherMoon20Regular,
  WeatherSunny20Regular,
  Desktop20Regular,
} from "@fluentui/react-icons";
import { Link } from "@tanstack/react-router";
import { Button, tokens, makeStyles, Text } from "@fluentui/react-components";
import { useTheme, type Theme } from "@/lib/theme/ThemeProvider";
import { getApplicationName } from "@/lib/runtimeConfig";
import { UserMenu } from "./UserMenu";
import { useAuth } from "@/lib/auth/AuthContext";

interface HeaderProps {
  onMenuClick?: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const THEME_CYCLE: Theme[] = ["light", "dark", "system"];

function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  function cycleTheme() {
    const currentIndex = THEME_CYCLE.indexOf(theme);
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % THEME_CYCLE.length;
    setTheme(THEME_CYCLE[nextIndex]);
  }

  const label = theme === "light" ? "浅色" : theme === "dark" ? "深色" : "跟随系统";

  const Icon =
    theme === "system"
      ? Desktop20Regular
      : resolvedTheme === "light"
        ? WeatherSunny20Regular
        : WeatherMoon20Regular;

  return (
    <Button
      appearance="subtle"
      size="small"
      onClick={cycleTheme}
      aria-label={label}
      title={label}
      icon={<Icon />}
    ></Button>
  );
}

const useStyles = makeStyles({
  header: {
    display: "flex",
    height: "3.5rem",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    // Word-style blue title bar background
    background: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    padding: `0 ${tokens.spacingHorizontalL}`,
    // Ensure all buttons/icons in the header use the inverted foreground color
    "& button": {
      color: tokens.colorNeutralForegroundOnBrand,
    },
  },
  mobileMenuBtn: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "inline-flex",
    },
  },
  collapseBtn: {
    display: "inline-flex",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  titleArea: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  // 品牌名回链：点击返回门户入口（/）
  brandLink: {
    textDecoration: "none",
    color: "inherit",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },
});

export function Header({ onMenuClick, collapsed, onToggleCollapse }: HeaderProps) {
  const { isAuthenticated, isLoading, login } = useAuth();
  const appName = getApplicationName();
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <Button
        appearance="subtle"
        size="small"
        className={styles.mobileMenuBtn}
        onClick={onMenuClick}
        aria-label={"菜单"}
        icon={<Navigation20Regular />}
      />
      <Button
        appearance="subtle"
        size="small"
        className={styles.collapseBtn}
        onClick={onToggleCollapse}
        aria-label={collapsed ? "展开侧边栏" : "折叠侧边栏"}
        icon={<Navigation20Regular />}
      />
      <div className={styles.titleArea}>
        <Link to="/" className={styles.brandLink} aria-label={appName}>
          <Text weight="semibold">{appName}</Text>
        </Link>
      </div>
      <div className={styles.actions}>
        <ThemeToggle />
        {!isLoading &&
          (isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button size="small" onClick={() => void login()} icon={<ArrowExit20Regular />}>
              {"登录"}
            </Button>
          ))}
      </div>
    </header>
  );
}
