import { createContext, useContext } from "react";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

/**
 * Shared with `ThemeProvider` (which lives in `components/theme-provider.tsx`).
 * Exported so the stateful component and the read-only hook can live in
 * separate files, matching the package's `components/` vs `hooks/` split.
 */
export const ThemeContext = createContext<ThemeProviderState | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
