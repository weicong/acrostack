/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuItemAdminCreateData,
  MenuItemAdminCreateStatus200,
  MenuItemAdminCreateStatus400,
  MenuItemAdminCreateStatus401,
  MenuItemAdminCreateStatus403,
  MenuItemAdminCreateStatus404,
  MenuItemAdminCreateStatus500,
  MenuItemAdminCreateStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemAdminCreate } from "../../clients/menuItemAdmin/menuItemAdminCreate.ts";

export const menuItemAdminCreateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items" }] as const;

export function menuItemAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MenuItemAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = menuItemAdminCreateMutationKey();
  return mutationOptions<
    MenuItemAdminCreateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminCreateStatus400
      | MenuItemAdminCreateStatus401
      | MenuItemAdminCreateStatus403
      | MenuItemAdminCreateStatus404
      | MenuItemAdminCreateStatus500
      | MenuItemAdminCreateStatus501
    >,
    { data?: MenuItemAdminCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return menuItemAdminCreate(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export function useMenuItemAdminCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuItemAdminCreateStatus200,
      ResponseErrorConfig<
        | MenuItemAdminCreateStatus400
        | MenuItemAdminCreateStatus401
        | MenuItemAdminCreateStatus403
        | MenuItemAdminCreateStatus404
        | MenuItemAdminCreateStatus500
        | MenuItemAdminCreateStatus501
      >,
      { data?: MenuItemAdminCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MenuItemAdminCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemAdminCreateMutationKey();

  const baseOptions = menuItemAdminCreateMutationOptions(config) as UseMutationOptions<
    MenuItemAdminCreateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminCreateStatus400
      | MenuItemAdminCreateStatus401
      | MenuItemAdminCreateStatus403
      | MenuItemAdminCreateStatus404
      | MenuItemAdminCreateStatus500
      | MenuItemAdminCreateStatus501
    >,
    { data?: MenuItemAdminCreateData },
    TContext
  >;

  return useMutation<
    MenuItemAdminCreateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminCreateStatus400
      | MenuItemAdminCreateStatus401
      | MenuItemAdminCreateStatus403
      | MenuItemAdminCreateStatus404
      | MenuItemAdminCreateStatus500
      | MenuItemAdminCreateStatus501
    >,
    { data?: MenuItemAdminCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuItemAdminCreateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminCreateStatus400
      | MenuItemAdminCreateStatus401
      | MenuItemAdminCreateStatus403
      | MenuItemAdminCreateStatus404
      | MenuItemAdminCreateStatus500
      | MenuItemAdminCreateStatus501
    >,
    { data?: MenuItemAdminCreateData },
    TContext
  >;
}
