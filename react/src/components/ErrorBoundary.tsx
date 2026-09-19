import { Component, type ErrorInfo, type ReactNode } from "react";
import {
  Button,
  Card,
  CardHeader,
  FluentProvider,
  Text,
  Title3,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { getPreferredTheme } from "@/lib/theme/ThemeProvider";

const useStyles = makeStyles({
  provider: {
    height: "100%",
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalL),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  card: {
    width: "100%",
    maxWidth: "480px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

/** 兜底界面：函数组件，可使用 Griffel 样式钩子与 Fluent 组件。 */
function ErrorFallback({ onRetry }: { onRetry: () => void }) {
  const styles = useStyles();

  return (
    <FluentProvider theme={getPreferredTheme()} className={styles.provider}>
      <div className={styles.root}>
        <Card className={styles.card}>
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
          <div className={styles.actions}>
            <Button appearance="primary" onClick={onRetry}>
              重试
            </Button>
            <Button onClick={() => window.location.reload()}>刷新页面</Button>
          </div>
        </Card>
      </div>
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
 * FluentProvider —— 这样错误页依然使用 Fluent 组件与令牌，
 * 并按用户已选/系统偏好的明暗外观展示。
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
