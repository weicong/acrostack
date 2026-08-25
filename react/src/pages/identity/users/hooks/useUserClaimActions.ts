import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { identityUserClaimGetListQueryKey } from "@/api/hooks/identityUserClaim/useIdentityUserClaimGetList";
import { useIdentityUserClaimCreate } from "@/api/hooks/identityUserClaim/useIdentityUserClaimCreate";
import { useIdentityUserClaimUpdate } from "@/api/hooks/identityUserClaim/useIdentityUserClaimUpdate";
import { useIdentityUserClaimDelete } from "@/api/hooks/identityUserClaim/useIdentityUserClaimDelete";
import { extractAbpErrorMessage } from "@/lib/api/error";
import type { ClaimFormValues } from "../claim-schemas";

/**
 * 用户声明增删改动作聚合：
 * 内聚 create/update/delete mutation、按 userId 的缓存失效与 toast 提示
 * （错误统一 extractAbpErrorMessage）。数据查询仍由对话框主文件负责。
 */
export function useUserClaimActions(userId: string | undefined) {
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();

  const createMutation = useIdentityUserClaimCreate();
  const updateMutation = useIdentityUserClaimUpdate();
  const deleteMutation = useIdentityUserClaimDelete();

  const invalidate = () => {
    if (userId) {
      void queryClient.invalidateQueries({
        queryKey: identityUserClaimGetListQueryKey({ query: { userId } }),
      });
    }
  };

  /** 新增一条用户声明；返回是否成功。 */
  async function add(values: ClaimFormValues): Promise<boolean> {
    if (!userId) return false;
    try {
      await createMutation.mutateAsync({
        body: {
          userId,
          claimType: values.claimType,
          claimValue: values.claimValue,
        },
      });
      invalidate();
      dispatchToast("保存成功", { intent: "success" });
      return true;
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      return false;
    }
  }

  /** 更新指定用户声明；返回是否成功。 */
  async function save(id: string, values: ClaimFormValues): Promise<boolean> {
    try {
      await updateMutation.mutateAsync({
        path: { id },
        body: {
          claimType: values.claimType,
          claimValue: values.claimValue,
        },
      });
      invalidate();
      dispatchToast("保存成功", { intent: "success" });
      return true;
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      return false;
    }
  }

  /** 删除指定用户声明；返回是否成功。 */
  async function remove(id: string): Promise<boolean> {
    try {
      await deleteMutation.mutateAsync({ path: { id } });
      invalidate();
      dispatchToast("删除成功", { intent: "success" });
      return true;
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      return false;
    }
  }

  return {
    add,
    save,
    remove,
    isAddPending: createMutation.isPending,
    isSavePending: updateMutation.isPending,
    deletePendingId: deleteMutation.isPending ? (deleteMutation.variables?.path?.id ?? null) : null,
  };
}
