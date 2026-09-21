import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import { getApplicationName } from "@acrostack/core";

const useStyles = makeStyles({
  mark: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    fontWeight: tokens.fontWeightSemibold,
  },
  /* 侧栏品牌区（32px）：与导航项图标同一视觉重量 */
  medium: {
    width: "32px",
    height: "32px",
    fontSize: tokens.fontSizeBase400,
  },
  /* 顶栏窄屏（24px）：与顶栏里的 24px 头像对齐 */
  small: {
    width: "24px",
    height: "24px",
    fontSize: tokens.fontSizeBase300,
  },
});

interface BrandMarkProps {
  /** 方块尺寸：顶栏用 `small`，侧栏用 `medium`。 */
  size?: "small" | "medium";
  /** 产品名（取首字母作为标识）；省略时读取运行时应用名。 */
  name?: string;
  className?: string;
}

/**
 * 品牌标识（首字母方块）：侧栏品牌区与窄屏顶栏共用同一枚标识，
 * 颜色来自主题的品牌令牌，因此随明暗色与品牌色自动变化。
 */
export function BrandMark({ size = "medium", name, className }: BrandMarkProps) {
  const styles = useStyles();
  const appName = name ?? getApplicationName();

  return (
    <span
      className={mergeClasses(
        styles.mark,
        size === "small" ? styles.small : styles.medium,
        className,
      )}
      aria-hidden="true"
    >
      {appName.charAt(0).toUpperCase()}
    </span>
  );
}
