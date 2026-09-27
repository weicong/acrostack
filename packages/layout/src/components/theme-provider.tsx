import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { ThemeContext, type Theme } from "#hooks/use-theme";

export type ThemeProviderProps = {
  children: ReactNode;
  /**
   * `localStorage` key the choice is persisted under. Give each host app its own
   * key — two apps on the same origin would otherwise fight over one value.
   */
  storageKey?: string;
  /** Class applied to `<html>` in dark mode. Must match the app's `@custom-variant dark`. */
  darkClassName?: string;
};

function readStoredTheme(storageKey: string): Theme {
  if (typeof localStorage === "undefined") return "system";
  const stored = localStorage.getItem(storageKey);
  return stored === "dark" || stored === "light" || stored === "system" ? stored : "system";
}

function applyTheme(theme: Theme, darkClassName: string) {
  const root = window.document.documentElement;
  root.classList.remove("light", darkClassName);
  root.classList.add(
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? darkClassName
        : "light"
      : theme,
  );
}

export function ThemeProvider({
  children,
  storageKey = "ui-theme",
  darkClassName = "dark",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme(storageKey));

  useEffect(() => {
    applyTheme(theme, darkClassName);

    // While on "system", keep following the OS preference as it changes.
    if (theme !== "system") return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system", darkClassName);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [theme, darkClassName]);

  const setTheme = useCallback(
    (next: Theme) => {
      localStorage.setItem(storageKey, next);
      setThemeState(next);
    },
    [storageKey],
  );

  // Memoised so that toggling a theme does not re-render every consumer on each
  // parent render.
  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
