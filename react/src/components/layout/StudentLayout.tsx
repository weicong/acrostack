import { Outlet } from "@tanstack/react-router";
import { makeStyles, tokens } from "@fluentui/react-components";

/**
 * 学员移动端布局（/student/*）。
 *
 * 无管理 chrome：窄栏居中容器（max-width 480px，手机优先），页面自带
 * 卡片与内边距；全屏背景与系统安全区由浏览器处理。
 */
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: tokens.colorNeutralBackground2,
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "480px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: tokens.colorNeutralBackground1,
    // 平板/桌面预览时给容器描边，明确手机视口范围
    "@media (min-width: 640px)": {
      borderLeft: `1px solid ${tokens.colorNeutralStroke2}`,
      borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    },
  },
});

export function StudentLayout() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}
