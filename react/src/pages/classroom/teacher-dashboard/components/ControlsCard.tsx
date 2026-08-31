/**
 * 课堂控制条：Fluent UI Toolbar（role="toolbar"，方向键在控件间导航）。
 * 窄屏放不下的操作自动折叠进"更多操作"溢出菜单：
 *   Overflow（测量容器）+ OverflowItem（按 id 注册各操作）+ useOverflowMenu（⋯ 触发按钮），
 *   ControlMenuItem 只把"已被折叠"的操作渲染进菜单，可见操作不重复出现。
 * 时长输入与"下一题"捆绑为同一 OverflowItem，保证两者同时可见或同时收起；
 * 结束课堂是危险操作，独立右对齐 Toolbar，永不折叠。
 * 浅色浮层壳由父级 heroControlsPanel 提供，本组件只负责控制项本身。
 */
import { useState, type ReactElement } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Spinner,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Tooltip,
  Overflow,
  OverflowDivider,
  OverflowItem,
  useIsOverflowItemVisible,
  useOverflowMenu,
  type ToolbarButtonProps,
} from "@fluentui/react-components";
import {
  ArrowClockwise20Regular,
  ArrowLeft20Regular,
  ArrowNext20Regular,
  CheckmarkCircle20Regular,
  DoorArrowLeft20Regular,
  MoreHorizontal20Regular,
  PlayCircle20Regular,
  Stop20Regular,
} from "@fluentui/react-icons";
import type { SessionControl } from "../hooks/useSessionControl";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

interface ControlsCardProps {
  control: SessionControl;
}

/** 控制项元素：id 由溢出管理器用于跟踪可见性，必须提供。 */
type ControlButtonElement = ReactElement<ToolbarButtonProps & { id: string }>;

/** 溢出菜单里的一个操作：仍在工具栏可见的操作不重复渲染。 */
function ControlMenuItem({ children }: { children: ControlButtonElement }) {
  const isOverflowing = !useIsOverflowItemVisible(children.props.id);
  if (!isOverflowing) {
    return null;
  }
  return (
    <MenuItem
      icon={children.props.icon}
      disabled={children.props.disabled}
      onClick={children.props.onClick as unknown as () => void}
    >
      {children.props.children}
    </MenuItem>
  );
}

/** "更多操作"触发按钮；无溢出时不渲染。 */
function ControlOverflowMenu({ items }: { items: ControlButtonElement[] }) {
  const { ref, isOverflowing } = useOverflowMenu<HTMLButtonElement>();
  if (!isOverflowing) {
    return null;
  }
  return (
    <Menu>
      <MenuTrigger>
        <ToolbarButton ref={ref} aria-label="更多操作" icon={<MoreHorizontal20Regular />} />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>{items}</MenuList>
      </MenuPopover>
    </Menu>
  );
}

/** busy 标签：文字隐形占位 + Spinner 居中覆盖，按钮宽度在 busy 切换时保持稳定。 */
function BusyLabel({ busy, label }: { busy: boolean; label: string }) {
  const styles = useTeacherDashboardStyles();
  if (!busy) {
    return <>{label}</>;
  }
  return (
    <span className={styles.busyLabel}>
      <span className={styles.busyLabelGhost} aria-hidden="true">
        {label}
      </span>
      <Spinner size="tiny" className={styles.busyLabelSpinner} />
    </span>
  );
}

export function ControlsCard({ control }: ControlsCardProps) {
  const styles = useTeacherDashboardStyles();
  const navigate = useNavigate();
  const [durationText, setDurationText] = useState("60");
  // 结束课堂是不可逆操作：先弹确认再执行
  const [confirmFinish, setConfirmFinish] = useState(false);
  const duration = Number.parseInt(durationText, 10);
  const nextDuration = Number.isFinite(duration) && duration >= 1 ? duration : undefined;
  const { busyAction } = control;
  const busy = busyAction !== null;
  // 开始/重新开始合并为一个按钮：状态机保证两者互斥
  //（Preparing 仅可开始，Finished 仅可重新开始，中间状态按钮禁用）
  const restartMode = control.canRestart && !control.canStart;
  const startLabel = restartMode ? "重新开始" : "开始课堂";
  const startIcon = restartMode ? <ArrowClockwise20Regular /> : <PlayCircle20Regular />;
  const startDisabled = restartMode ? !control.canRestart || busy : !control.canStart || busy;
  const startAction = () => void (restartMode ? control.runRestart() : control.runStart());

  // 溢出菜单文案：静态文本（不携带 busy Spinner），下一题带当前时长；
  // ControlMenuItem 只渲染"已被折叠"的操作，仍可见的操作在菜单里返回 null
  const menuItems: ControlButtonElement[] = [
    <ControlMenuItem key="start">
      <ToolbarButton id="start" icon={startIcon} disabled={startDisabled} onClick={startAction}>
        {startLabel}
      </ToolbarButton>
    </ControlMenuItem>,
    <ControlMenuItem key="next">
      <ToolbarButton
        id="next"
        icon={<ArrowNext20Regular />}
        disabled={!control.canNext || busy || nextDuration === undefined}
        onClick={() => void control.runNext(nextDuration)}
      >
        {`下一题（${nextDuration ?? 60} 秒）`}
      </ToolbarButton>
    </ControlMenuItem>,
    <ControlMenuItem key="close">
      <ToolbarButton
        id="close"
        icon={<Stop20Regular />}
        disabled={!control.canClose || busy}
        onClick={() => void control.runClose()}
      >
        截止当前题
      </ToolbarButton>
    </ControlMenuItem>,
    <ControlMenuItem key="publishAnswer">
      <ToolbarButton
        id="publishAnswer"
        icon={<CheckmarkCircle20Regular />}
        disabled={!control.canPublishAnswer || busy}
        onClick={() => void control.runPublishAnswer()}
      >
        公布正确答案
      </ToolbarButton>
    </ControlMenuItem>,
  ];

  return (
    <div className={styles.controls}>
      <Toolbar aria-label="课堂流程控制" className={styles.controlsToolbar}>
        {/* 返回列表：固定项（不参与溢出折叠），导航出口与流程控制同排省一行 */}
        <Tooltip content="返回课堂列表" relationship="label">
          <ToolbarButton
            icon={<ArrowLeft20Regular />}
            onClick={() => void navigate({ to: "/classroom/sessions" })}
          />
        </Tooltip>
        <ToolbarDivider />
        <Overflow>
          <div className={styles.controlsInner}>
            <OverflowItem id="start" groupId="flow">
              <ToolbarButton
                id="start"
                appearance="primary"
                icon={startIcon}
                disabled={startDisabled}
                onClick={startAction}
              >
                <BusyLabel
                  busy={busyAction === "start" || busyAction === "restart"}
                  label={startLabel}
                />
              </ToolbarButton>
            </OverflowItem>
            <OverflowDivider groupId="next">
              <ToolbarDivider />
            </OverflowDivider>
            <OverflowItem id="next" groupId="next">
              <div className={styles.nextGroup}>
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
                  disabled={!control.canNext || busy}
                  aria-label="下一题作答时长（秒）"
                />
                <Tooltip
                  content={control.canNext ? "开放下一题" : "当前题开放中或已无剩余题目"}
                  relationship="label"
                >
                  <ToolbarButton
                    id="next"
                    icon={<ArrowNext20Regular />}
                    disabled={!control.canNext || busy || nextDuration === undefined}
                    onClick={() => void control.runNext(nextDuration)}
                  >
                    <BusyLabel busy={busyAction === "next"} label="下一题" />
                  </ToolbarButton>
                </Tooltip>
              </div>
            </OverflowItem>
            <OverflowDivider groupId="close">
              <ToolbarDivider />
            </OverflowDivider>
            <OverflowItem id="close" groupId="close">
              <ToolbarButton
                id="close"
                icon={<Stop20Regular />}
                disabled={!control.canClose || busy}
                onClick={() => void control.runClose()}
              >
                {busyAction === "close" ? <Spinner size="tiny" /> : "截止当前题"}
              </ToolbarButton>
            </OverflowItem>
            <OverflowDivider groupId="publish">
              <ToolbarDivider />
            </OverflowDivider>
            <OverflowItem id="publishAnswer" groupId="publish">
              <ToolbarButton
                id="publishAnswer"
                icon={<CheckmarkCircle20Regular />}
                disabled={!control.canPublishAnswer || busy}
                onClick={() => void control.runPublishAnswer()}
              >
                <BusyLabel busy={busyAction === "publishAnswer"} label="公布正确答案" />
              </ToolbarButton>
            </OverflowItem>
            <ControlOverflowMenu items={menuItems} />
          </div>
        </Overflow>
      </Toolbar>

      <Toolbar aria-label="结束课堂" className={styles.finishToolbar}>
        <ToolbarButton
          id="finish"
          icon={<DoorArrowLeft20Regular />}
          className={styles.dangerButton}
          disabled={!control.canFinish || busy}
          onClick={() => setConfirmFinish(true)}
        >
          <BusyLabel busy={busyAction === "finish"} label="结束课堂" />
        </ToolbarButton>
      </Toolbar>

      <ConfirmDialog
        open={confirmFinish}
        onOpenChange={setConfirmFinish}
        title="结束课堂？"
        description="结束后学员将无法继续答题，课堂进入已结束状态且不可恢复。"
        confirmLabel="结束课堂"
        cancelLabel="取消"
        variant="destructive"
        isPending={busyAction === "finish"}
        onConfirm={() => {
          setConfirmFinish(false);
          void control.runFinish();
        }}
      />
    </div>
  );
}
