import { describe, expect, it } from "vite-plus/test";
import { resolveUpdater } from "./useDataTable";

describe("resolveUpdater", () => {
  it("直接值原样返回", () => {
    expect(resolveUpdater(5, 1)).toBe(5);
    expect(resolveUpdater("next", "current")).toBe("next");
  });

  it("函数更新器以当前值求值", () => {
    expect(resolveUpdater((prev: number) => prev + 1, 1)).toBe(2);
    expect(resolveUpdater((prev: string) => `${prev}!`, "a")).toBe("a!");
  });
});
