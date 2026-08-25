/**
 * 课堂控制台卡片：开始/下一题/截止/公布统计/公布答案/结束。
 * 时长输入为下一题专用状态，内部化在此组件。
 */
import { useState } from "react";
import { Button, Card, Input, Spinner, Text, Title3 } from "@fluentui/react-components";
import type { SessionControl } from "../hooks/useSessionControl";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

interface ControlsCardProps {
  control: SessionControl;
  classroomCode?: string | null;
  currentQuestionNumber: number;
  questionCount: number;
}

export function ControlsCard({
  control,
  classroomCode,
  currentQuestionNumber,
  questionCount,
}: ControlsCardProps) {
  const styles = useTeacherDashboardStyles();
  const [durationText, setDurationText] = useState("60");
  const duration = Number.parseInt(durationText, 10);
  const { busyAction } = control;

  return (
    <Card className={styles.card}>
      <Title3>课堂控制</Title3>
      <div className={styles.controls}>
        <Button
          appearance="primary"
          disabled={!control.canStart || busyAction !== null}
          onClick={() => void control.runStart()}
        >
          {busyAction === "start" ? <Spinner size="tiny" /> : "开始课堂"}
        </Button>

        <Input
          type="number"
          min={10}
          max={600}
          step={10}
          style={{ width: "110px" }}
          value={durationText}
          onChange={(_, d) => setDurationText(d.value)}
          contentBefore="时长"
          contentAfter="秒"
          disabled={!control.canNext}
        />
        <Button
          appearance="primary"
          disabled={
            !control.canNext || busyAction !== null || !Number.isFinite(duration) || duration < 1
          }
          onClick={() => void control.runNext(duration || undefined)}
          title={control.canNext ? "开放下一题" : "当前题开放中或已无剩余题目"}
        >
          {busyAction === "next" ? <Spinner size="tiny" /> : "下一题"}
        </Button>

        <Button
          appearance="primary"
          disabled={!control.canClose || busyAction !== null}
          onClick={() => void control.runClose()}
        >
          {busyAction === "close" ? <Spinner size="tiny" /> : "截止当前题"}
        </Button>

        <Button
          disabled={!control.canPublishStatistics || busyAction !== null}
          onClick={() => void control.runPublishStatistics()}
        >
          {busyAction === "publishStats" ? <Spinner size="tiny" /> : "公布匿名统计"}
        </Button>

        <Button
          disabled={!control.canPublishAnswer || busyAction !== null}
          onClick={() => void control.runPublishAnswer()}
        >
          {busyAction === "publishAnswer" ? <Spinner size="tiny" /> : "公布正确答案"}
        </Button>

        <Button
          appearance="primary"
          style={{ marginLeft: "auto" }}
          disabled={!control.canFinish || busyAction !== null}
          onClick={() => void control.runFinish()}
        >
          {busyAction === "finish" ? <Spinner size="tiny" /> : "结束课堂"}
        </Button>
      </div>
      <Text size={200}>
        进度：第 {currentQuestionNumber} / {questionCount} 题 · 学员加入地址
        {classroomCode ? `/student/join?code=${classroomCode}` : "—"}
      </Text>
    </Card>
  );
}
