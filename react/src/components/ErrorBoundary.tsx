import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * 全局错误边界：捕获子组件渲染期的未处理错误，展示友好的中文提示。
 * 位于应用最外层（FluentProvider 之外），因此使用原生元素且不添加任何自定义样式。
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
        <div>
          <h1>页面出现错误</h1>
          <p>抱歉，页面渲染时发生意外错误，请重试；若问题持续存在，请刷新页面或联系管理员。</p>
          <button type="button" onClick={this.resetErrorBoundary}>
            重试
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
