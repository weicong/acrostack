/**
 * 课堂控制条：开始/下一题/截止/公布统计/公布答案/结束。
 * 时长输入为下一题专用状态，内部化在此组件。
 * 内嵌于 Hero 渐变区（浅色面板由父级 heroControlsPanel 提供）。
 */
import { useState } from "react";
import { Button, Input, Spinner } from "@fluentui/react-components";
import {
  ArrowClockwise20Regular,
  ArrowNext20Regular,
  ChartMultiple20Regular,
  CheckmarkCircle20Regular,
  DoorArrowLeft20Regular,
  PlayCircle20Regular,
  Stop20Regular,
} from "@fluentui/react-icons";
import type { SessionControl } from "../hooks/useSessionControl";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

interface ControlsCardProps {
  control: SessionControl;
}

export function ControlsCard({ control }: ControlsCardProps) {
  const styles = useTeacherDashboardStyles();
  const [durationText, setDurationText] = useState("60");
  const duration = Number.parseInt(durationText, 10);
  const { busyAction } = control;

  // 按语义分组：题目流程（开始/时长+下一题）｜截止 ｜ 公布类 ｜ 危险操作（结束课堂）
  return (
    <div className={styles.controls}>
      <div className={styles.controlsGroup}>
        <Button
          icon={<PlayCircle20Regular />}
          appearance="primary"
          disabled={!control.canStart || busyAction !== null}
          onClick={() => void control.runStart()}
        >
          {busyAction === "start" ? <Spinner size="tiny" /> : "开始课堂"}
        </Button>

        <Button
          icon={<ArrowClockwise20Regular />}
          appearance="primary"
          disabled={!control.canRestart || busyAction !== null}
          onClick={() => void control.runRestart()}
        >
          {busyAction === "restart" ? <Spinner size="tiny" /> : "重新开始"}
        </Button>

        <Input
          type="number"
          min={10}
          max={600}
          step={10}
          className={styles.durationInput}
          value={durationText}
          onChange={(_, d) => setDurationText(d.value)}
          contentBefore="时长"
          contentAfter="秒"
          disabled={!control.canNext}
        />
        <Button
          icon={<ArrowNext20Regular />}
          appearance="primary"
          disabled={
            !control.canNext || busyAction !== null || !Number.isFinite(duration) || duration < 1
          }
          onClick={() => void control.runNext(duration || undefined)}
          title={control.canNext ? "开放下一题" : "当前题开放中或已无剩余题目"}
        >
          {busyAction === "next" ? <Spinner size="tiny" /> : "下一题"}
        </Button>
      </div>

      <span className={styles.controlsDivider} />

      <div className={styles.controlsGroup}>
        <Button
          icon={<Stop20Regular />}
          appearance="secondary"
          disabled={!control.canClose || busyAction !== null}
          onClick={() => void control.runClose()}
        >
          {busyAction === "close" ? <Spinner size="tiny" /> : "截止当前题"}
        </Button>
      </div>

      <span className={styles.controlsDivider} />

      <div className={styles.controlsGroup}>
        <Button
          icon={<ChartMultiple20Regular />}
          appearance="secondary"
          disabled={!control.canPublishStatistics || busyAction !== null}
          onClick={() => void control.runPublishStatistics()}
        >
          {busyAction === "publishStats" ? <Spinner size="tiny" /> : "公布匿名统计"}
        </Button>

        <Button
          icon={<CheckmarkCircle20Regular />}
          appearance="secondary"
          disabled={!control.canPublishAnswer || busyAction !== null}
          onClick={() => void control.runPublishAnswer()}
        >
          {busyAction === "publishAnswer" ? <Spinner size="tiny" /> : "公布正确答案"}
        </Button>
      </div>

      <Button
        icon={<DoorArrowLeft20Regular />}
        appearance="secondary"
        className={styles.dangerButton}
        style={{ marginLeft: "auto" }}
        disabled={!control.canFinish || busyAction !== null}
        onClick={() => void control.runFinish()}
      >
        {busyAction === "finish" ? <Spinner size="tiny" /> : "结束课堂"}
      </Button>
    </div>
  );
}
