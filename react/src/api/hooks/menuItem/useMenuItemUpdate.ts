/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuItemUpdateData,
  MenuItemUpdatePathId,
  MenuItemUpdateStatus200,
  MenuItemUpdateStatus400,
  MenuItemUpdateStatus401,
  MenuItemUpdateStatus403,
  MenuItemUpdateStatus404,
  MenuItemUpdateStatus500,
  MenuItemUpdateStatus501,
} from "../../models/menuItem/MenuItemUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemUpdate } from "../../clients/menuItem/menuItemUpdate.ts";

export const menuItemUpdateMutationKey = () => [{ url: "/api/app/menu-item/:id" }] as const;

export function menuItemUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MenuItemUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = menuItemUpdateMutationKey();
  return mutationOptions<
    MenuItemUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemUpdateStatus400
      | MenuItemUpdateStatus401
      | MenuItemUpdateStatus403
      | MenuItemUpdateStatus404
      | MenuItemUpdateStatus500
      | MenuItemUpdateStatus501
    >,
    { id: MenuItemUpdatePathId; data?: MenuItemUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return menuItemUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/menu-item/:id}
 */
export function useMenuItemUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuItemUpdateStatus200,
      ResponseErrorConfig<
        | MenuItemUpdateStatus400
        | MenuItemUpdateStatus401
        | MenuItemUpdateStatus403
        | MenuItemUpdateStatus404
        | MenuItemUpdateStatus500
        | MenuItemUpdateStatus501
      >,
      { id: MenuItemUpdatePathId; data?: MenuItemUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MenuItemUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemUpdateMutationKey();

  const baseOptions = menuItemUpdateMutationOptions(config) as UseMutationOptions<
    MenuItemUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemUpdateStatus400
      | MenuItemUpdateStatus401
      | MenuItemUpdateStatus403
      | MenuItemUpdateStatus404
      | MenuItemUpdateStatus500
      | MenuItemUpdateStatus501
    >,
    { id: MenuItemUpdatePathId; data?: MenuItemUpdateData },
    TContext
  >;

  return useMutation<
    MenuItemUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemUpdateStatus400
      | MenuItemUpdateStatus401
      | MenuItemUpdateStatus403
      | MenuItemUpdateStatus404
      | MenuItemUpdateStatus500
      | MenuItemUpdateStatus501
    >,
    { id: MenuItemUpdatePathId; data?: MenuItemUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuItemUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemUpdateStatus400
      | MenuItemUpdateStatus401
      | MenuItemUpdateStatus403
      | MenuItemUpdateStatus404
      | MenuItemUpdateStatus500
      | MenuItemUpdateStatus501
    >,
    { id: MenuItemUpdatePathId; data?: MenuItemUpdateData },
    TContext
  >;
}
