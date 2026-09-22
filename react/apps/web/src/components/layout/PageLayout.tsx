import { type ReactNode } from "react";
import { Text, Title2 } from "@fluentui/react-components";
import { HStack, VStack } from "@acrostack/ui/layout";
import { usePageTitle } from "@/lib/usePageTitle";

interface PageLayoutProps {
  title: string;
  /** 标题下的说明文字（可选），用于说明本页能做什么。 */
  description?: string;
  /** 标题右侧的操作（可选）。 */
  actions?: ReactNode;
  /** 操作区的读屏名称（可选），默认为「页面操作」。 */
  actionsLabel?: string;
  children?: ReactNode;
}

/**
 * 页面骨架：标题 + 说明 + 操作区 + 内容区。
 *
 * 页头一行两端对齐、内容区纵向堆叠，间距全部来自间距刻度；
 * 标题与说明直接用 Fluent 排版组件（`h1`/`p` 本身就是块级）。
 */
export function PageLayout({
  title,
  description,
  actions,
  actionsLabel = "页面操作",
  children,
}: PageLayoutProps) {
  // 页面名同时用于浏览器标签页与顶栏面包屑（非菜单页也能显示正确位置）
  usePageTitle(title);

  return (
    <VStack gap={4}>
      <HStack justify="between" align="start" gap={4} wrap="wrap">
        <VStack gap={1}>
          <Title2 as="h1" block>
            {title}
          </Title2>
          {description && (
            <Text as="p" block>
              {description}
            </Text>
          )}
        </VStack>

        {actions && (
          <HStack role="toolbar" aria-label={actionsLabel} gap={2} wrap="wrap">
            {actions}
          </HStack>
        )}
      </HStack>

      <VStack gap={4}>{children}</VStack>
    </VStack>
  );
}
