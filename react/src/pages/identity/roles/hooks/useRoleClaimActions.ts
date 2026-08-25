import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { identityRoleClaimGetListQueryKey } from "@/api/hooks/identityRoleClaim/useIdentityRoleClaimGetList";
import { useIdentityRoleClaimCreate } from "@/api/hooks/identityRoleClaim/useIdentityRoleClaimCreate";
import { useIdentityRoleClaimUpdate } from "@/api/hooks/identityRoleClaim/useIdentityRoleClaimUpdate";
import { useIdentityRoleClaimDelete } from "@/api/hooks/identityRoleClaim/useIdentityRoleClaimDelete";
import { extractAbpErrorMessage } from "@/lib/api/error";
import type { ClaimFormValues } from "../../shared/schemas/claim";

/**
 * 角色声明增删改动作聚合：
 * 内聚 create/update/delete mutation、按 roleId 的缓存失效与 toast 提示
 * （错误统一 extractAbpErrorMessage）。数据查询仍由对话框主文件负责。
 */
export function useRoleClaimActions(roleId: string | undefined) {
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();

  const createMutation = useIdentityRoleClaimCreate();
  const updateMutation = useIdentityRoleClaimUpdate();
  const deleteMutation = useIdentityRoleClaimDelete();

  const invalidate = () => {
    if (roleId) {
      void queryClient.invalidateQueries({
        queryKey: identityRoleClaimGetListQueryKey({ query: { roleId } }),
      });
    }
  };

  /** 新增一条角色声明；返回是否成功。 */
  async function add(values: ClaimFormValues): Promise<boolean> {
    if (!roleId) return false;
    try {
      await createMutation.mutateAsync({
        body: {
          roleId,
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

  /** 更新指定角色声明；返回是否成功。 */
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

  /** 删除指定角色声明；返回是否成功。 */
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
