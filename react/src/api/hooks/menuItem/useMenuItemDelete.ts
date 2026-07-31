/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuItemDeletePathId,
  MenuItemDeleteStatus200,
  MenuItemDeleteStatus204,
  MenuItemDeleteStatus400,
  MenuItemDeleteStatus401,
  MenuItemDeleteStatus403,
  MenuItemDeleteStatus404,
  MenuItemDeleteStatus500,
  MenuItemDeleteStatus501,
} from "../../models/menuItem/MenuItemDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemDelete } from "../../clients/menuItem/menuItemDelete.ts";

export const menuItemDeleteMutationKey = () => [{ url: "/api/app/menu-item/:id" }] as const;

export function menuItemDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = menuItemDeleteMutationKey();
  return mutationOptions<
    MenuItemDeleteStatus200 | MenuItemDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemDeleteStatus400
      | MenuItemDeleteStatus401
      | MenuItemDeleteStatus403
      | MenuItemDeleteStatus404
      | MenuItemDeleteStatus500
      | MenuItemDeleteStatus501
    >,
    { id: MenuItemDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return menuItemDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/menu-item/:id}
 */
export function useMenuItemDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuItemDeleteStatus200 | MenuItemDeleteStatus204,
      ResponseErrorConfig<
        | MenuItemDeleteStatus400
        | MenuItemDeleteStatus401
        | MenuItemDeleteStatus403
        | MenuItemDeleteStatus404
        | MenuItemDeleteStatus500
        | MenuItemDeleteStatus501
      >,
      { id: MenuItemDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemDeleteMutationKey();

  const baseOptions = menuItemDeleteMutationOptions(config) as UseMutationOptions<
    MenuItemDeleteStatus200 | MenuItemDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemDeleteStatus400
      | MenuItemDeleteStatus401
      | MenuItemDeleteStatus403
      | MenuItemDeleteStatus404
      | MenuItemDeleteStatus500
      | MenuItemDeleteStatus501
    >,
    { id: MenuItemDeletePathId },
    TContext
  >;

  return useMutation<
    MenuItemDeleteStatus200 | MenuItemDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemDeleteStatus400
      | MenuItemDeleteStatus401
      | MenuItemDeleteStatus403
      | MenuItemDeleteStatus404
      | MenuItemDeleteStatus500
      | MenuItemDeleteStatus501
    >,
    { id: MenuItemDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuItemDeleteStatus200 | MenuItemDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemDeleteStatus400
      | MenuItemDeleteStatus401
      | MenuItemDeleteStatus403
      | MenuItemDeleteStatus404
      | MenuItemDeleteStatus500
      | MenuItemDeleteStatus501
    >,
    { id: MenuItemDeletePathId },
    TContext
  >;
}
