import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  createLightTheme,
  createDarkTheme,
  type BrandVariants,
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

/**
 * 课堂品牌色（indigo 系）：教育科技感，与默认 Fluent 蓝区分。
 * 色阶遵循 Fluent UI v9 BrandVariants（10–160，由深到浅）。
 */
const classroomBrand: BrandVariants = {
  10: "#07030f",
  20: "#100823",
  30: "#1a0e3a",
  40: "#241452",
  50: "#2e1b6b",
  60: "#382184",
  70: "#43289d",
  80: "#4d31b6",
  90: "#573acf",
  100: "#643ee8",
  110: "#7a52ec",
  120: "#9066f0",
  130: "#a67af4",
  140: "#bc8ef8",
  150: "#d2a2fb",
  160: "#e8b6ff",
};

const brandLightTheme: FluentTheme = { ...webLightTheme, ...createLightTheme(classroomBrand) };
const brandDarkTheme: FluentTheme = { ...webDarkTheme, ...createDarkTheme(classroomBrand) };

function getSystemPreference(): "light" | "dark" {
  // SSR / 测试环境守卫：无 window 时默认浅色
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** 校正持久化的主题值：默认浅色；非法值（含 null）回退为 "light"，显式存储的 "system" 仍跟随系统 */
function clampStoredTheme(stored: Theme | null): Theme {
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() =>
    clampStoredTheme(
      typeof window === "undefined" ? null : (localStorage.getItem(STORAGE_KEY) as Theme | null),
    ),
  );
  // 跟随系统的实际主题；theme === "system" 时随 prefers-color-scheme 变化更新
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(getSystemPreference);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setSystemTheme(mediaQuery.matches ? "dark" : "light");
    // 订阅时先同步一次，避免非 system 期间系统配色已变化导致 systemTheme 过期
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const resolvedTheme: "light" | "dark" = theme === "system" ? systemTheme : theme;

  function setTheme(next: Theme) {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
    setThemeState(next);
  }

  const fluentTheme: FluentTheme = resolvedTheme === "dark" ? brandDarkTheme : brandLightTheme;

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
