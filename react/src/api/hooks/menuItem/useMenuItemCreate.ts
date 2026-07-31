/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuItemCreateData,
  MenuItemCreateStatus200,
  MenuItemCreateStatus400,
  MenuItemCreateStatus401,
  MenuItemCreateStatus403,
  MenuItemCreateStatus404,
  MenuItemCreateStatus500,
  MenuItemCreateStatus501,
} from "../../models/menuItem/MenuItemCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemCreate } from "../../clients/menuItem/menuItemCreate.ts";

export const menuItemCreateMutationKey = () => [{ url: "/api/app/menu-item" }] as const;

export function menuItemCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MenuItemCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = menuItemCreateMutationKey();
  return mutationOptions<
    MenuItemCreateStatus200,
    ResponseErrorConfig<
      | MenuItemCreateStatus400
      | MenuItemCreateStatus401
      | MenuItemCreateStatus403
      | MenuItemCreateStatus404
      | MenuItemCreateStatus500
      | MenuItemCreateStatus501
    >,
    { data?: MenuItemCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return menuItemCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/menu-item}
 */
export function useMenuItemCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuItemCreateStatus200,
      ResponseErrorConfig<
        | MenuItemCreateStatus400
        | MenuItemCreateStatus401
        | MenuItemCreateStatus403
        | MenuItemCreateStatus404
        | MenuItemCreateStatus500
        | MenuItemCreateStatus501
      >,
      { data?: MenuItemCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MenuItemCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemCreateMutationKey();

  const baseOptions = menuItemCreateMutationOptions(config) as UseMutationOptions<
    MenuItemCreateStatus200,
    ResponseErrorConfig<
      | MenuItemCreateStatus400
      | MenuItemCreateStatus401
      | MenuItemCreateStatus403
      | MenuItemCreateStatus404
      | MenuItemCreateStatus500
      | MenuItemCreateStatus501
    >,
    { data?: MenuItemCreateData },
    TContext
  >;

  return useMutation<
    MenuItemCreateStatus200,
    ResponseErrorConfig<
      | MenuItemCreateStatus400
      | MenuItemCreateStatus401
      | MenuItemCreateStatus403
      | MenuItemCreateStatus404
      | MenuItemCreateStatus500
      | MenuItemCreateStatus501
    >,
    { data?: MenuItemCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuItemCreateStatus200,
    ResponseErrorConfig<
      | MenuItemCreateStatus400
      | MenuItemCreateStatus401
      | MenuItemCreateStatus403
      | MenuItemCreateStatus404
      | MenuItemCreateStatus500
      | MenuItemCreateStatus501
    >,
    { data?: MenuItemCreateData },
    TContext
  >;
}
