import { describe, expect, it } from "vite-plus/test";
import { getErrorMessage } from "./field-error";

describe("getErrorMessage", () => {
  it("未触碰的字段不显示错误（TanStack Form 约定）", () => {
    expect(
      getErrorMessage({ errors: [{ message: "此字段为必填项" }], isTouched: false }),
    ).toBeUndefined();
  });

  it("拼接多条错误消息", () => {
    expect(
      getErrorMessage({ errors: [{ message: "此字段为必填项" }, "格式无效"], isTouched: true }),
    ).toBe("此字段为必填项, 格式无效");
  });

  it("过滤空错误后无有效消息时返回 undefined", () => {
    expect(getErrorMessage({ errors: [{ message: "" }, null], isTouched: true })).toBeUndefined();
  });
});
