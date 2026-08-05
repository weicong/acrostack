/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuItemAdminMoveMenuItemData,
  MenuItemAdminMoveMenuItemPathId,
  MenuItemAdminMoveMenuItemStatus200,
  MenuItemAdminMoveMenuItemStatus204,
  MenuItemAdminMoveMenuItemStatus400,
  MenuItemAdminMoveMenuItemStatus401,
  MenuItemAdminMoveMenuItemStatus403,
  MenuItemAdminMoveMenuItemStatus404,
  MenuItemAdminMoveMenuItemStatus500,
  MenuItemAdminMoveMenuItemStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminMoveMenuItem.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemAdminMoveMenuItem } from "../../clients/menuItemAdmin/menuItemAdminMoveMenuItem.ts";

export const menuItemAdminMoveMenuItemMutationKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items/:id/move" }] as const;

export function menuItemAdminMoveMenuItemMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MenuItemAdminMoveMenuItemData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = menuItemAdminMoveMenuItemMutationKey();
  return mutationOptions<
    MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204,
    ResponseErrorConfig<
      | MenuItemAdminMoveMenuItemStatus400
      | MenuItemAdminMoveMenuItemStatus401
      | MenuItemAdminMoveMenuItemStatus403
      | MenuItemAdminMoveMenuItemStatus404
      | MenuItemAdminMoveMenuItemStatus500
      | MenuItemAdminMoveMenuItemStatus501
    >,
    { id: MenuItemAdminMoveMenuItemPathId; data?: MenuItemAdminMoveMenuItemData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return menuItemAdminMoveMenuItem(id, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id/move}
 */
export function useMenuItemAdminMoveMenuItem<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204,
      ResponseErrorConfig<
        | MenuItemAdminMoveMenuItemStatus400
        | MenuItemAdminMoveMenuItemStatus401
        | MenuItemAdminMoveMenuItemStatus403
        | MenuItemAdminMoveMenuItemStatus404
        | MenuItemAdminMoveMenuItemStatus500
        | MenuItemAdminMoveMenuItemStatus501
      >,
      { id: MenuItemAdminMoveMenuItemPathId; data?: MenuItemAdminMoveMenuItemData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MenuItemAdminMoveMenuItemData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemAdminMoveMenuItemMutationKey();

  const baseOptions = menuItemAdminMoveMenuItemMutationOptions(config) as UseMutationOptions<
    MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204,
    ResponseErrorConfig<
      | MenuItemAdminMoveMenuItemStatus400
      | MenuItemAdminMoveMenuItemStatus401
      | MenuItemAdminMoveMenuItemStatus403
      | MenuItemAdminMoveMenuItemStatus404
      | MenuItemAdminMoveMenuItemStatus500
      | MenuItemAdminMoveMenuItemStatus501
    >,
    { id: MenuItemAdminMoveMenuItemPathId; data?: MenuItemAdminMoveMenuItemData },
    TContext
  >;

  return useMutation<
    MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204,
    ResponseErrorConfig<
      | MenuItemAdminMoveMenuItemStatus400
      | MenuItemAdminMoveMenuItemStatus401
      | MenuItemAdminMoveMenuItemStatus403
      | MenuItemAdminMoveMenuItemStatus404
      | MenuItemAdminMoveMenuItemStatus500
      | MenuItemAdminMoveMenuItemStatus501
    >,
    { id: MenuItemAdminMoveMenuItemPathId; data?: MenuItemAdminMoveMenuItemData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204,
    ResponseErrorConfig<
      | MenuItemAdminMoveMenuItemStatus400
      | MenuItemAdminMoveMenuItemStatus401
      | MenuItemAdminMoveMenuItemStatus403
      | MenuItemAdminMoveMenuItemStatus404
      | MenuItemAdminMoveMenuItemStatus500
      | MenuItemAdminMoveMenuItemStatus501
    >,
    { id: MenuItemAdminMoveMenuItemPathId; data?: MenuItemAdminMoveMenuItemData },
    TContext
  >;
}
