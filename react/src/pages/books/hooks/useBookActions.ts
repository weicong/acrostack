/**
 * 图书删除动作聚合：删除成功后失效列表缓存。
 * 与原实现一致：失败静默（不弹 toast），由调用方决定是否关闭确认框。
 */
import { useQueryClient } from "@tanstack/react-query";
import { bookGetListQueryKey } from "@/api/hooks/book/useBookGetList";
import { useBookDelete } from "@/api/hooks/book/useBookDelete";

export function useBookActions() {
  const queryClient = useQueryClient();
  const deleteMutation = useBookDelete();

  /** 删除图书；返回是否成功。 */
  async function remove(id: string): Promise<boolean> {
    try {
      await deleteMutation.mutateAsync({ path: { id } });
      void queryClient.invalidateQueries({ queryKey: bookGetListQueryKey() });
      return true;
    } catch {
      return false;
    }
  }

  return { remove, deletePending: deleteMutation.isPending };
}
