/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuItemAdminUpdateData,
  MenuItemAdminUpdatePathId,
  MenuItemAdminUpdateStatus200,
  MenuItemAdminUpdateStatus400,
  MenuItemAdminUpdateStatus401,
  MenuItemAdminUpdateStatus403,
  MenuItemAdminUpdateStatus404,
  MenuItemAdminUpdateStatus500,
  MenuItemAdminUpdateStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemAdminUpdate } from "../../clients/menuItemAdmin/menuItemAdminUpdate.ts";

export const menuItemAdminUpdateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items/:id" }] as const;

export function menuItemAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MenuItemAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = menuItemAdminUpdateMutationKey();
  return mutationOptions<
    MenuItemAdminUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminUpdateStatus400
      | MenuItemAdminUpdateStatus401
      | MenuItemAdminUpdateStatus403
      | MenuItemAdminUpdateStatus404
      | MenuItemAdminUpdateStatus500
      | MenuItemAdminUpdateStatus501
    >,
    { id: MenuItemAdminUpdatePathId; data?: MenuItemAdminUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return menuItemAdminUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function useMenuItemAdminUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuItemAdminUpdateStatus200,
      ResponseErrorConfig<
        | MenuItemAdminUpdateStatus400
        | MenuItemAdminUpdateStatus401
        | MenuItemAdminUpdateStatus403
        | MenuItemAdminUpdateStatus404
        | MenuItemAdminUpdateStatus500
        | MenuItemAdminUpdateStatus501
      >,
      { id: MenuItemAdminUpdatePathId; data?: MenuItemAdminUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MenuItemAdminUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemAdminUpdateMutationKey();

  const baseOptions = menuItemAdminUpdateMutationOptions(config) as UseMutationOptions<
    MenuItemAdminUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminUpdateStatus400
      | MenuItemAdminUpdateStatus401
      | MenuItemAdminUpdateStatus403
      | MenuItemAdminUpdateStatus404
      | MenuItemAdminUpdateStatus500
      | MenuItemAdminUpdateStatus501
    >,
    { id: MenuItemAdminUpdatePathId; data?: MenuItemAdminUpdateData },
    TContext
  >;

  return useMutation<
    MenuItemAdminUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminUpdateStatus400
      | MenuItemAdminUpdateStatus401
      | MenuItemAdminUpdateStatus403
      | MenuItemAdminUpdateStatus404
      | MenuItemAdminUpdateStatus500
      | MenuItemAdminUpdateStatus501
    >,
    { id: MenuItemAdminUpdatePathId; data?: MenuItemAdminUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuItemAdminUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminUpdateStatus400
      | MenuItemAdminUpdateStatus401
      | MenuItemAdminUpdateStatus403
      | MenuItemAdminUpdateStatus404
      | MenuItemAdminUpdateStatus500
      | MenuItemAdminUpdateStatus501
    >,
    { id: MenuItemAdminUpdatePathId; data?: MenuItemAdminUpdateData },
    TContext
  >;
}
