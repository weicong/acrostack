import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { FluentProvider, makeStyles, type Theme } from "@fluentui/react-components";
import { appDarkTheme, appLightTheme } from "./brand";

/** 外观模式：可显式指定浅色/深色，或跟随系统偏好。 */
export type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "acrostack.theme-mode";
const DARK_QUERY = "(prefers-color-scheme: dark)";

interface ThemeModeContextValue {
  mode: ThemeMode;
  /** 扣除 system 之后的实际生效外观。 */
  resolvedMode: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

function readStoredMode(): ThemeMode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  } catch {
    // 隐私模式等禁用存储的场景下退回默认值
    return "system";
  }
}

const useStyles = makeStyles({
  provider: {
    height: "100%",
  },
});

/**
 * 解析当前应使用的主题（供 FluentProvider 之外的兜底界面使用）：
 * 优先用户已保存的显式选择，否则跟随系统偏好。
 */
export function getPreferredTheme(): Theme {
  const mode = readStoredMode();
  const prefersDark = typeof window !== "undefined" && window.matchMedia(DARK_QUERY).matches;
  const resolvedMode = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
  return resolvedMode === "dark" ? appDarkTheme : appLightTheme;
}

/**
 * 应用主题：把品牌主题交给 FluentProvider，并提供外观切换能力。
 * 用户的显式选择持久化在 localStorage；默认跟随系统偏好并实时响应其变化。
 */
export function AppThemeProvider({ children }: { children: ReactNode }) {
  const styles = useStyles();
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode);
  const [prefersDark, setPrefersDark] = useState(
    () => typeof window !== "undefined" && window.matchMedia(DARK_QUERY).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const onChange = (event: MediaQueryListEvent) => setPrefersDark(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 存储不可用时仅当前会话生效
    }
  }, []);

  const resolvedMode: "light" | "dark" =
    mode === "system" ? (prefersDark ? "dark" : "light") : mode;
  const theme: Theme = resolvedMode === "dark" ? appDarkTheme : appLightTheme;
  const value = useMemo<ThemeModeContextValue>(
    () => ({ mode, resolvedMode, setMode }),
    [mode, resolvedMode, setMode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <FluentProvider theme={theme} className={styles.provider}>
        {children}
      </FluentProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode(): ThemeModeContextValue {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode 必须在 AppThemeProvider 内部使用");
  }
  return context;
}
