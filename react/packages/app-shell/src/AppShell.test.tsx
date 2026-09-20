import { describe, expect, it } from "vite-plus/test";
import { APP_SHELL_BREAKPOINTS, resolveMobileNavBreakpoint } from "./AppShell";

describe("resolveMobileNavBreakpoint", () => {
  it("把命名断点解析为对应的最小宽度", () => {
    expect(resolveMobileNavBreakpoint("sm")).toBe(480);
    expect(resolveMobileNavBreakpoint("md")).toBe(768);
    expect(resolveMobileNavBreakpoint("lg")).toBe(1024);
    expect(resolveMobileNavBreakpoint("xl")).toBe(1280);
    expect(resolveMobileNavBreakpoint("2xl")).toBe(1536);
  });

  it("未指定断点时默认为 md（与 Astryx 的默认值一致）", () => {
    expect(resolveMobileNavBreakpoint()).toBe(APP_SHELL_BREAKPOINTS.md);
  });

  it("none 关闭自动移动布局", () => {
    expect(resolveMobileNavBreakpoint("none")).toBeNull();
  });
});
