import { createContext, useContext } from "react";

/**
 * Light/dark/system — the *mode*.
 *
 * `ThemeMode`, not `Theme`: "theme" is the whole thing (mode + palette), and
 * `ThemeStyle` below is the other half. Naming this one `ThemeMode` keeps
 * `mode` and `style` from reading as siblings of the same kind.
 */
export type ThemeMode = "dark" | "light" | "system";

/**
 * The palette ("风格") layered on top of the mode. Each style ships its own
 * light **and** dark token set, so mode and style are fully orthogonal:
 * `default` is shadcn's neutral base, `fluent` is Microsoft's Fluent 2 palette.
 * Adding a style means adding a `theme-<style>` class to the CSS plus an entry
 * here.
 */
export type ThemeStyle = "default" | "fluent";

export const THEME_STYLES: readonly ThemeStyle[] = ["default", "fluent"];

/** `<html>` class for a given style. Must match the CSS (`.theme-fluent`, …). */
export function styleClassName(style: ThemeStyle): string {
  return `theme-${style}`;
}

export type ThemeProviderState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  style: ThemeStyle;
  setStyle: (style: ThemeStyle) => void;
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
