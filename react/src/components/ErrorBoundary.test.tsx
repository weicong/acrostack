import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";

/** 受控炸弹组件：shouldThrow 为 true 时抛错 */
function ConditionalBomb({ shouldThrow }: { shouldThrow: boolean }): React.ReactNode {
  if (shouldThrow) {
    throw new Error("测试用渲染错误");
  }
  return <div>正常内容</div>;
}

describe("ErrorBoundary", () => {
  // 屏蔽 React 抛错与 componentDidCatch 打印的 console.error，保持测试输出干净
  const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  afterEach(() => {
    consoleErrorSpy.mockClear();
  });

  it("子组件正常渲染时不拦截内容", () => {
    render(
      <ErrorBoundary>
        <ConditionalBomb shouldThrow={false} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("正常内容")).toBeTruthy();
    expect(screen.queryByText("页面出现错误")).toBeNull();
  });

  it("捕获子组件抛出的错误并显示 fallback 文案", () => {
    render(
      <ErrorBoundary>
        <ConditionalBomb shouldThrow={true} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("页面出现错误")).toBeTruthy();
    expect(screen.queryByText("正常内容")).toBeNull();
  });

  it("点击重试按钮后重置错误状态并恢复子组件渲染", () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ConditionalBomb shouldThrow={true} />
      </ErrorBoundary>,
    );
    expect(screen.getByText("页面出现错误")).toBeTruthy();

    // 抛错条件消除后传入新 children，再点击"重试"：
    // ErrorBoundary 重置 state，子树重新渲染恢复正常
    rerender(
      <ErrorBoundary>
        <ConditionalBomb shouldThrow={false} />
      </ErrorBoundary>,
    );
    fireEvent.click(screen.getByRole("button", { name: "重试" }));

    expect(screen.getByText("正常内容")).toBeTruthy();
    expect(screen.queryByText("页面出现错误")).toBeNull();
  });
});
