/**
 * 列表页共享样式：toolbar / filters / actionButtons / actionsCell 四件套。
 * 各模块列表页（books/roles/tenants/...）结构高度一致，统一抽象避免复制粘贴。
 * 有额外字段的页面（如 users 的 userNameCell、claimTypes 的 description）
 * 自行 makeStyles 补充，与本 hook 在组件中组合使用。
 */
import { makeStyles, tokens } from "@fluentui/react-components";

export const useListPageStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalM,
  },
  filters: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
  },
  actionButtons: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});
