/**
 * 功能页保存/重置动作 hook。
 * 使用 mutateAsync + try/catch：成功后失效功能查询缓存并提示；失败用 extractAbpErrorMessage 提示。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { featuresGetQueryKey } from "@/api/hooks/features/useFeaturesGet";
import { useFeaturesUpdate } from "@/api/hooks/features/useFeaturesUpdate";
import { useFeaturesDelete } from "@/api/hooks/features/useFeaturesDelete";
import { extractAbpErrorMessage } from "@/lib/http/error";

interface UseFeatureActionsOptions {
  /** 服务端当前值（用于计算变更项）。 */
  originalMap: Record<string, string>;
  /** 用户编辑后的值。 */
  valueMap: Record<string, string>;
  /** 重置成功后的回调（用于关闭确认对话框）。 */
  onResetSuccess?: () => void;
}

export function useFeatureActions({
  originalMap,
  valueMap,
  onResetSuccess,
}: UseFeatureActionsOptions) {
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const updateMutation = useFeaturesUpdate();
  const deleteMutation = useFeaturesDelete();

  /** 仅保存发生变更的特性；无变更时提示后直接返回。 */
  const saveFeatures = useCallback(async () => {
    const changedFeatures = Object.entries(valueMap)
      .filter(([name, value]) => originalMap[name] !== value)
      .map(([name, value]) => ({ name, value }));

    if (changedFeatures.length === 0) {
      dispatchToast("保存成功", { intent: "info" });
      return;
    }

    try {
      await updateMutation.mutateAsync({ body: { features: changedFeatures } });
      void queryClient.invalidateQueries({ queryKey: featuresGetQueryKey() });
      dispatchToast("保存成功", { intent: "success" });
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    }
  }, [originalMap, valueMap, updateMutation, queryClient, dispatchToast]);

  /** 重置为默认值（删除提供者级别的特性值）。 */
  const resetFeatures = useCallback(async () => {
    try {
      await deleteMutation.mutateAsync({});
      void queryClient.invalidateQueries({ queryKey: featuresGetQueryKey() });
      onResetSuccess?.();
      dispatchToast("已重置为默认值", { intent: "success" });
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    }
  }, [deleteMutation, queryClient, onResetSuccess, dispatchToast]);

  return {
    saveFeatures,
    resetFeatures,
    /** 保存请求进行中。 */
    isSaving: updateMutation.isPending,
    /** 重置请求进行中。 */
    isResetting: deleteMutation.isPending,
  };
}
