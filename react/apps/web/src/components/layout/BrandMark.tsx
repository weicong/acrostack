import { getApplicationName } from "@acrostack/core";

interface BrandMarkProps {
  /** 产品名（取首字母作为标识）；省略时读取运行时应用名。 */
  name?: string;
  className?: string;
}

/**
 * 品牌标识（首字母方块）：侧栏品牌区与窄屏顶栏共用同一枚标识。
 * 当前只渲染首字母，不含任何样式。
 */
export function BrandMark({ name, className }: BrandMarkProps) {
  const appName = name ?? getApplicationName();

  return (
    <span className={className} aria-hidden="true">
      {appName.charAt(0).toUpperCase()}
    </span>
  );
}
