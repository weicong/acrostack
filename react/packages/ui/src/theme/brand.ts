import { createDarkTheme, createLightTheme, type BrandVariants } from "@fluentui/react-components";

/**
 * 品牌色阶：Fluent 主题要求 16 阶（10 最暗 → 160 最亮）。
 *
 * 颜色只在这一个文件里定义；明暗主题、语义化颜色令牌（背景/描边/前景/
 * 焦点环等）全部由 createLightTheme / createDarkTheme 派生，组件消费
 * Fluent 令牌即可自动跟随品牌与主题变化。
 */
export const brandRamp: BrandVariants = {
  10: "#020305",
  20: "#111723",
  30: "#16263D",
  40: "#193253",
  50: "#1B3F6A",
  60: "#1B4C82",
  70: "#18599B",
  80: "#1267B4",
  90: "#0F6CBD",
  100: "#2F80ED",
  110: "#4A94FA",
  120: "#7FB3FF",
  130: "#AED2FF",
  140: "#D6E8FF",
  150: "#EDF5FF",
  160: "#FFFFFF",
};

export const appLightTheme = createLightTheme(brandRamp);
export const appDarkTheme = createDarkTheme(brandRamp);
