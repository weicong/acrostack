import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import {
  ThemeContext,
  THEME_STYLES,
  styleClassName,
  type ThemeMode,
  type ThemeStyle,
} from "#hooks/use-theme";

export type ThemeProviderProps = {
  children: ReactNode;
  /**
   * `localStorage` key the mode is persisted under. Give each host app its own
   * key — two apps on the same origin would otherwise fight over one value.
   */
  modeStorageKey?: string;
  /** `localStorage` key the palette ("风格") is persisted under. */
  styleStorageKey?: string;
  /** Class applied to `<html>` in dark mode. Must match the app's `@custom-variant dark`. */
  darkClassName?: string;
  /** Style selected on first visit, before anything is stored. */
  defaultStyle?: ThemeStyle;
};

function readStoredMode(storageKey: string): ThemeMode {
  if (typeof localStorage === "undefined") return "system";
  const stored = localStorage.getItem(storageKey);
  return stored === "dark" || stored === "light" || stored === "system" ? stored : "system";
}

function readStoredStyle(storageKey: string, fallback: ThemeStyle): ThemeStyle {
  if (typeof localStorage === "undefined") return fallback;
  const stored = localStorage.getItem(storageKey);
  return THEME_STYLES.find((style) => style === stored) ?? fallback;
}

function applyMode(mode: ThemeMode, darkClassName: string) {
  const root = window.document.documentElement;
  root.classList.remove("light", darkClassName);
  root.classList.add(
    mode === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? darkClassName
        : "light"
      : mode,
  );
}

/** Only one style class is ever present, so the CSS can stay flat. */
function applyStyle(style: ThemeStyle) {
  const root = window.document.documentElement;
  for (const candidate of THEME_STYLES) {
    root.classList.remove(styleClassName(candidate));
  }
  root.classList.add(styleClassName(style));
}

export function ThemeProvider({
  children,
  modeStorageKey = "ui-theme",
  styleStorageKey = `${modeStorageKey}-style`,
  darkClassName = "dark",
  defaultStyle = "default",
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => readStoredMode(modeStorageKey));
  const [style, setStyleState] = useState<ThemeStyle>(() =>
    readStoredStyle(styleStorageKey, defaultStyle),
  );

  useEffect(() => {
    applyMode(mode, darkClassName);

    // While on "system", keep following the OS preference as it changes.
    if (mode !== "system") return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyMode("system", darkClassName);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode, darkClassName]);

  useEffect(() => {
    applyStyle(style);
  }, [style]);

  const setMode = useCallback(
    (next: ThemeMode) => {
      localStorage.setItem(modeStorageKey, next);
      setModeState(next);
    },
    [modeStorageKey],
  );

  const setStyle = useCallback(
    (next: ThemeStyle) => {
      localStorage.setItem(styleStorageKey, next);
      setStyleState(next);
    },
    [styleStorageKey],
  );

  // Memoised so that toggling a theme does not re-render every consumer on each
  // parent render.
  const value = useMemo(
    () => ({ mode, setMode, style, setStyle }),
    [mode, setMode, style, setStyle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
