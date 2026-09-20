import { type ReactNode } from "react";
import { Text, Title2, Toolbar, makeStyles, shorthands, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
  head: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingVerticalS, tokens.spacingHorizontalL),
  },
  headText: {
    minWidth: 0,
    flexGrow: 1,
  },
  title: {
    display: "block",
  },
  description: {
    display: "block",
    marginTop: tokens.spacingVerticalXS,
    maxWidth: "72ch",
    color: tokens.colorNeutralForeground3,
  },
  actions: {
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  body: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
});

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
 * 操作区由 Fluent `Toolbar` 承载（自带 `role="toolbar"`、方向键导航，
 * 根元素在 small/medium 下无额外内边距），页面之间只通过令牌化间距对齐；
 * 页头一行用 `space-between` 把操作推到右侧，不使用 `margin-left: auto` 之类的技巧。
 * 所有页面共用同一套间距与排版，保证视觉层次与风格一致。
 */
export function PageLayout({
  title,
  description,
  actions,
  actionsLabel = "页面操作",
  children,
}: PageLayoutProps) {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <div className={styles.headText}>
          <Title2 as="h1" className={styles.title}>
            {title}
          </Title2>
          {description && (
            <Text as="p" className={styles.description}>
              {description}
            </Text>
          )}
        </div>
        {actions && (
          <Toolbar className={styles.actions} aria-label={actionsLabel}>
            {actions}
          </Toolbar>
        )}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
