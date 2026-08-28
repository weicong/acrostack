/**
 * 评论管理动作聚合 hook：删除评论、切换审核状态，
 * 内聚列表失效刷新与统一错误提示（extractAbpErrorMessage）。
 * 各动作返回是否成功，供调用方决定关闭确认框。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { commentAdminGetListQueryKey } from "@/api/hooks/commentAdmin/useCommentAdminGetList";
import { useCommentAdminDelete } from "@/api/hooks/commentAdmin/useCommentAdminDelete";
import { useCommentAdminUpdateApprovalStatus } from "@/api/hooks/commentAdmin/useCommentAdminUpdateApprovalStatus";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { VoloCmsKitAdminCommentsCommentWithAuthorDto as CommentItem } from "@/api/models/volo/cmsKit/admin/comments/CommentWithAuthorDto";

export function useCommentActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const deleteMutation = useCommentAdminDelete();
  const approvalMutation = useCommentAdminUpdateApprovalStatus();

  /** 失效评论列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: commentAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const fail = useCallback(
    (err: unknown) => {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    },
    [dispatchToast],
  );

  /** 删除评论；成功后失效列表并提示。 */
  const deleteComment = useCallback(
    async (id: string | null): Promise<boolean> => {
      if (!id) return false;
      try {
        await deleteMutation.mutateAsync({ path: { id } });
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateList();
      dispatchToast("删除成功", { intent: "success" });
      return true;
    },
    [deleteMutation, invalidateList, dispatchToast, fail],
  );

  /** 切换评论审核状态；成功后失效列表并提示。 */
  const toggleApproval = useCallback(
    async (comment: CommentItem): Promise<boolean> => {
      if (!comment.id) return false;
      const newApproved = !comment.isApproved;
      try {
        await approvalMutation.mutateAsync({
          path: { id: comment.id },
          body: { isApproved: newApproved },
        });
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateList();
      dispatchToast(newApproved ? "评论已通过" : "评论已取消通过", { intent: "success" });
      return true;
    },
    [approvalMutation, invalidateList, dispatchToast, fail],
  );

  return {
    deleteComment,
    deletePending: deleteMutation.isPending,
    toggleApproval,
  };
}
