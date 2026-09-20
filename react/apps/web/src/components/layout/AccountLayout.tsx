import { Link } from "@tanstack/react-router";
import { makeStyles, shorthands, Text, Title3, tokens } from "@fluentui/react-components";
import type { ReactNode } from "react";
import { getApplicationName } from "@/lib/runtimeConfig";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100dvh",
    ...shorthands.gap(tokens.spacingVerticalL),
    ...shorthands.padding(tokens.spacingVerticalXXL, tokens.spacingHorizontalL),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "440px",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    ...shorthands.gap(tokens.spacingVerticalXS),
  },
  link: {
    color: tokens.colorBrandForegroundLink,
  },
});

/**
 * 匿名账户区布局（登录/注册/找回密码等）：
 * 居中窄栏、品牌标题在上、返回入口在下；高度自持（100dvh），窄屏自动收边距。
 */
export function AccountLayout({ children }: { children: ReactNode }) {
  const styles = useStyles();
  const appName = getApplicationName();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Title3 as="h1">{appName}</Title3>
          <Text>请登录以继续</Text>
        </div>
        {children}
      </div>
      <Text as="p" size={200}>
        <Link to="/" className={styles.link}>
          返回应用首页
        </Link>
      </Text>
    </div>
  );
}
