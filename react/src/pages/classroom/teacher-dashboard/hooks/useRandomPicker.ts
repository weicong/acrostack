/**
 * 随机点名 hook：封装随机点名 mutation 与"本轮已点名单"管理。
 *
 * 不重复点名策略：教师端维护本轮已点学员 Id 列表，随请求作为排除名单传给服务端
 * （服务端无状态）；在线学员全部点完后自动清空开启新一轮，也可手动重置。
 *
 * 结果同步有两条路径（幂等）：
 * - mutation 返回值：教师本人点击按钮；
 * - SignalR ParticipantPicked 事件：applyEvent（多端教师/断线恢复场景）。
 */
import { useCallback, useState } from "react";
import { useToastController } from "@fluentui/react-components";
import { useClassSessionPickRandomParticipant } from "@/api/hooks/classSession/useClassSessionPickRandomParticipant";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { ClassroomDtosPickedParticipantDto } from "@/api/models/classroom/dtos/PickedParticipantDto";
import type { ClassroomDtosParticipantStateDto } from "@/api/models/classroom/dtos/ParticipantStateDto";
import type { ParticipantPickedEvent } from "../../shared/types/classroom-events";

export type RandomPicker = ReturnType<typeof useRandomPicker>;

export function useRandomPicker(options: {
  sessionId: string;
  participants: ClassroomDtosParticipantStateDto[];
}) {
  const { sessionId, participants } = options;
  const { dispatchToast } = useToastController();

  const [picked, setPicked] = useState<ClassroomDtosPickedParticipantDto | null>(null);
  const [pickedIds, setPickedIds] = useState<string[]>([]);
  const [picking, setPicking] = useState(false);

  const mutation = useClassSessionPickRandomParticipant();

  /** 在线学员（与课堂面板在线口径一致）。 */
  const onlineParticipants = participants.filter((p) => p.onlineStatus === 1);
  const pickedOnlineCount = onlineParticipants.filter((p) =>
    pickedIds.includes(p.participantId ?? ""),
  ).length;
  const allOnlinePicked =
    onlineParticipants.length > 0 && pickedOnlineCount >= onlineParticipants.length;

  const applyPicked = useCallback((result: ClassroomDtosPickedParticipantDto) => {
    const id = result.participantId;
    if (!id) return;
    setPicked(result);
    setPickedIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
  }, []);

  /** SignalR ParticipantPicked 事件处理（与 mutation 结果幂等合并）。 */
  const applyEvent = useCallback(
    (evt: ParticipantPickedEvent) => {
      applyPicked({
        participantId: evt.participantId,
        nickname: evt.nickname,
        groupIndex: evt.groupIndex,
        studentNumber: null,
      });
    },
    [applyPicked],
  );

  const pick = useCallback(async () => {
    if (picking) return;
    setPicking(true);
    try {
      // 在线学员已点完一轮：清空排除名单开启新一轮
      const excludeIds = allOnlinePicked ? [] : pickedIds;
      if (allOnlinePicked) {
        dispatchToast("本轮在线学员已全部点到，自动开启新一轮点名", { intent: "info" });
      }
      const result = await mutation.mutateAsync({
        path: { id: sessionId },
        body: { onlineOnly: true, excludeParticipantIds: excludeIds },
      });
      applyPicked(result);
      dispatchToast(
        `点到：${result.nickname ?? "匿名"}（组${result.groupIndex ?? 1}），请回答问题`,
        {
          intent: "success",
        },
      );
    } catch (err) {
      dispatchToast(`点名失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
    } finally {
      setPicking(false);
    }
  }, [picking, allOnlinePicked, pickedIds, mutation, sessionId, applyPicked, dispatchToast]);

  const reset = useCallback(() => {
    setPickedIds([]);
    setPicked(null);
    dispatchToast("已重置本轮点名名单", { intent: "info" });
  }, [dispatchToast]);

  return {
    /** 最近被点到的学员（null 表示本轮尚未点名）。 */
    picked,
    /** 本轮已点学员 Id。 */
    pickedIds,
    /** 点名请求进行中。 */
    picking,
    /** 在线学员数（可点候选池）。 */
    onlineCount: onlineParticipants.length,
    /** 在线学员中已点人数。 */
    pickedOnlineCount,
    pick,
    reset,
    applyEvent,
  };
}
