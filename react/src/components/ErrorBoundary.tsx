import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * 全局错误边界：捕获子组件渲染期的未处理错误，展示友好的中文提示。
 * 位于应用最外层（FluentProvider 之外），因此使用原生元素 + 内联样式。
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
      return (
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            padding: "24px",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>页面出现错误</h1>
          <p style={{ margin: 0, color: "#616161" }}>
            抱歉，页面渲染时发生意外错误，请重试；若问题持续存在，请刷新页面或联系管理员。
          </p>
          <button
            type="button"
            onClick={this.resetErrorBoundary}
            style={{
              padding: "8px 24px",
              fontSize: "14px",
              color: "#fff",
              backgroundColor: "#0f6cbd",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            重试
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
