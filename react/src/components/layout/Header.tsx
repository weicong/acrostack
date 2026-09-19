import {
  ArrowExit20Regular,
  WeatherMoon20Regular,
  WeatherSunny20Regular,
  Desktop20Regular,
} from "@fluentui/react-icons";
import { Link } from "@tanstack/react-router";
import { Button, Text } from "@fluentui/react-components";
import { useTheme, type Theme } from "@/lib/theme/ThemeProvider";
import { getApplicationName } from "@/lib/runtimeConfig";
import { UserMenu } from "./UserMenu";
import { useAuth } from "@/lib/auth/AuthContext";

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

export function Header() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const appName = getApplicationName();

  return (
    <header>
      <Link to="/" aria-label={appName}>
        <Text weight="semibold">{appName}</Text>
      </Link>
      <ThemeToggle />
      {!isLoading &&
        (isAuthenticated ? (
          <UserMenu />
        ) : (
          <Button size="small" onClick={() => void login()} icon={<ArrowExit20Regular />}>
            {"登录"}
          </Button>
        ))}
    </header>
  );
}
