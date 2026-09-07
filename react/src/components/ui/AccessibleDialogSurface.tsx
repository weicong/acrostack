import { DialogSurface, type DialogSurfaceProps } from "@fluentui/react-components";

/**
 * Fluent UI 的 Tabster Modalizer 存在时序缺陷：Dialog 打开后，Modalizer 对
 * body 逐层施加 aria-hidden="true" 的隐藏遍历可能发生在焦点已进入弹窗之后
 * （Tabster 仅在焦点变化时才同步移除命中元素的 aria-hidden），导致弹窗表面
 * 被误标 aria-hidden="true"，屏幕阅读器与自动化测试无法访问弹窗内容。
 *
 * 修复方式：使用 Tabster 的官方逃生舱 `data-tabster-never-hide` 属性——
 * Modalizer 永远不会对带此属性的元素设置 aria-hidden（见
 * @fluentui/react-tabster 的 useDangerousNeverHidden_unstable；该 hook 未由
 * react-components 再导出，且 react-tabster 非本项目直接依赖，故在此直接
 * 声明该属性值）。
 *
 * 注意：嵌套 Dialog 场景下外层弹窗也不会被标记隐藏；本项目没有嵌套弹窗用法。
 */
function AccessibleDialogSurface(props: DialogSurfaceProps) {
  return <DialogSurface {...props} data-tabster-never-hide="" />;
}

export { AccessibleDialogSurface };
