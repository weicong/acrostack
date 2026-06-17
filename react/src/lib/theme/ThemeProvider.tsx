import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  type Theme as FluentTheme,
} from "@fluentui/react-components";

export type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "theme";

function getSystemPreference(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(theme: Theme): "light" | "dark" {
  return theme === "system" ? getSystemPreference() : theme;
}

const TEMPLATE_THEME_STYLE = "";

function clampStoredTheme(stored: Theme | null, themeStyle: string): Theme {
  const next: Theme = stored ?? "system";
  if (themeStyle === "light" && next === "dark") {
    return "system";
  }
  if (themeStyle === "dark" && next === "light") {
    return "system";
  }
  return next;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() =>
    clampStoredTheme(localStorage.getItem(STORAGE_KEY) as Theme | null, TEMPLATE_THEME_STYLE),
  );

  const resolvedTheme = resolveTheme(theme);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setThemeState((prev) => prev);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  function setTheme(next: Theme) {
    localStorage.setItem(STORAGE_KEY, next);
    setThemeState(next);
  }

  const fluentTheme: FluentTheme = resolvedTheme === "dark" ? webDarkTheme : webLightTheme;

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      <FluentProvider theme={fluentTheme}>{children}</FluentProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
