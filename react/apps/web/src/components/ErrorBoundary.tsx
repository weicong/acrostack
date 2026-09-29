import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@acrostack/ui/components/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@acrostack/ui/components/card";

/** 兜底界面：不依赖任何 Provider，主题由 `<html>` 上的类决定。 */
function ErrorFallback({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4 py-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">页面出现错误</CardTitle>
          <CardDescription>
            抱歉，页面渲染时发生意外错误。你可以先重试；若问题持续存在，请刷新页面或联系管理员。
          </CardDescription>
        </CardHeader>
        <div role="toolbar" aria-label="错误处理" className="flex flex-wrap gap-2">
          <Button onClick={onRetry}>重试</Button>
          <Button variant="outline" onClick={() => window.location.reload()}>
            刷新页面
          </Button>
        </div>
      </Card>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * 全局错误边界：捕获渲染期未处理错误，避免整页白屏。
 * 它位于应用最外层，因此兜底界面不依赖任何 Provider。
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 记录错误便于排查，不向用户暴露堆栈细节
    console.error("[ErrorBoundary] 页面渲染发生错误:", error, errorInfo.componentStack);
  }

  /** 重置错误状态并触发子树重新渲染（重试语义） */
  resetErrorBoundary = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onRetry={this.resetErrorBoundary} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
