/**
 * 博客文章页动作聚合 hook：删除/发布/转为草稿，
 * 内聚列表失效刷新与统一错误提示（extractAbpErrorMessage）。
 * 删除返回是否成功，供调用方决定关闭确认框。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { blogPostAdminGetListQueryKey } from "@/api/hooks/blogPostAdmin/useBlogPostAdminGetList";
import { useBlogPostAdminDelete } from "@/api/hooks/blogPostAdmin/useBlogPostAdminDelete";
import { useBlogPostAdminPublish } from "@/api/hooks/blogPostAdmin/useBlogPostAdminPublish";
import { useBlogPostAdminDraft } from "@/api/hooks/blogPostAdmin/useBlogPostAdminDraft";
import { extractAbpErrorMessage } from "@/lib/http/error";

export function useBlogPostActions() {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const deleteMutation = useBlogPostAdminDelete();
  const publishMutation = useBlogPostAdminPublish();
  const draftMutation = useBlogPostAdminDraft();

  /** 失效文章列表查询。 */
  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: blogPostAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const fail = useCallback(
    (err: unknown) => {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    },
    [dispatchToast],
  );

  /** 删除文章；成功后失效列表并提示。 */
  const remove = useCallback(
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

  /** 发布文章；成功后失效列表并提示。 */
  const publish = useCallback(
    async (id: string): Promise<void> => {
      try {
        await publishMutation.mutateAsync({ path: { id } });
      } catch (err) {
        fail(err);
        return;
      }
      invalidateList();
      dispatchToast("博客文章已发布", { intent: "success" });
    },
    [publishMutation, invalidateList, dispatchToast, fail],
  );

  /** 转为草稿；成功后失效列表并提示。 */
  const draft = useCallback(
    async (id: string): Promise<void> => {
      try {
        await draftMutation.mutateAsync({ path: { id } });
      } catch (err) {
        fail(err);
        return;
      }
      invalidateList();
      dispatchToast("博客文章已转为草稿", { intent: "success" });
    },
    [draftMutation, invalidateList, dispatchToast, fail],
  );

  return {
    remove,
    removePending: deleteMutation.isPending,
    publish,
    draft,
    invalidateList,
  };
}
