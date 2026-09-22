import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button, Card, CardHeader, FluentProvider, Text, Title3 } from "@fluentui/react-components";
import { Center, HStack, VStack } from "@acrostack/ui/layout";
import { getPreferredTheme } from "@acrostack/ui/theme";

/** 兜底界面：函数组件，自带 FluentProvider 以便使用 Fluent 组件。 */
function ErrorFallback({ onRetry }: { onRetry: () => void }) {
  return (
    <FluentProvider theme={getPreferredTheme()}>
      <Center minHeight="100dvh" paddingBlock={6} paddingInline={4}>
        <VStack width="100%" maxWidth={480}>
          <Card>
            <CardHeader
              header={
                <Title3 as="h1" block>
                  页面出现错误
                </Title3>
              }
              description={
                <Text>
                  抱歉，页面渲染时发生意外错误。你可以先重试；若问题持续存在，请刷新页面或联系管理员。
                </Text>
              }
            />
            <HStack role="toolbar" aria-label="错误处理" gap={2} wrap="wrap">
              <Button appearance="primary" onClick={onRetry}>
                重试
              </Button>
              <Button onClick={() => window.location.reload()}>刷新页面</Button>
            </HStack>
          </Card>
        </VStack>
      </Center>
    </FluentProvider>
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
 *
 * 它位于应用最外层（App 的 FluentProvider 之外），因此兜底界面自带一个
 * FluentProvider——错误页依然按用户已选/系统偏好的明暗外观展示，
 * 并复用布局原语完成整屏居中。
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
