/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuItemAdminDeletePathId,
  MenuItemAdminDeleteStatus200,
  MenuItemAdminDeleteStatus204,
  MenuItemAdminDeleteStatus400,
  MenuItemAdminDeleteStatus401,
  MenuItemAdminDeleteStatus403,
  MenuItemAdminDeleteStatus404,
  MenuItemAdminDeleteStatus500,
  MenuItemAdminDeleteStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemAdminDelete } from "../../clients/menuItemAdmin/menuItemAdminDelete.ts";

export const menuItemAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items/:id" }] as const;

export function menuItemAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = menuItemAdminDeleteMutationKey();
  return mutationOptions<
    MenuItemAdminDeleteStatus200 | MenuItemAdminDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemAdminDeleteStatus400
      | MenuItemAdminDeleteStatus401
      | MenuItemAdminDeleteStatus403
      | MenuItemAdminDeleteStatus404
      | MenuItemAdminDeleteStatus500
      | MenuItemAdminDeleteStatus501
    >,
    { id: MenuItemAdminDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return menuItemAdminDelete(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function useMenuItemAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuItemAdminDeleteStatus200 | MenuItemAdminDeleteStatus204,
      ResponseErrorConfig<
        | MenuItemAdminDeleteStatus400
        | MenuItemAdminDeleteStatus401
        | MenuItemAdminDeleteStatus403
        | MenuItemAdminDeleteStatus404
        | MenuItemAdminDeleteStatus500
        | MenuItemAdminDeleteStatus501
      >,
      { id: MenuItemAdminDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemAdminDeleteMutationKey();

  const baseOptions = menuItemAdminDeleteMutationOptions(config) as UseMutationOptions<
    MenuItemAdminDeleteStatus200 | MenuItemAdminDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemAdminDeleteStatus400
      | MenuItemAdminDeleteStatus401
      | MenuItemAdminDeleteStatus403
      | MenuItemAdminDeleteStatus404
      | MenuItemAdminDeleteStatus500
      | MenuItemAdminDeleteStatus501
    >,
    { id: MenuItemAdminDeletePathId },
    TContext
  >;

  return useMutation<
    MenuItemAdminDeleteStatus200 | MenuItemAdminDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemAdminDeleteStatus400
      | MenuItemAdminDeleteStatus401
      | MenuItemAdminDeleteStatus403
      | MenuItemAdminDeleteStatus404
      | MenuItemAdminDeleteStatus500
      | MenuItemAdminDeleteStatus501
    >,
    { id: MenuItemAdminDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuItemAdminDeleteStatus200 | MenuItemAdminDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemAdminDeleteStatus400
      | MenuItemAdminDeleteStatus401
      | MenuItemAdminDeleteStatus403
      | MenuItemAdminDeleteStatus404
      | MenuItemAdminDeleteStatus500
      | MenuItemAdminDeleteStatus501
    >,
    { id: MenuItemAdminDeletePathId },
    TContext
  >;
}
