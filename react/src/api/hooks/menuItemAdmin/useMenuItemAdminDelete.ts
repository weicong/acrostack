/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MenuItemAdminDeleteOptions,
  MenuItemAdminDeleteStatus200,
  MenuItemAdminDeleteStatus204,
  MenuItemAdminDeleteStatus400,
  MenuItemAdminDeleteStatus401,
  MenuItemAdminDeleteStatus403,
  MenuItemAdminDeleteStatus404,
  MenuItemAdminDeleteStatus500,
  MenuItemAdminDeleteStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemAdminDelete } from "../../clients/menuItemAdmin/menuItemAdminDelete";

export const menuItemAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items/:id" }] as const;

export function menuItemAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    MenuItemAdminDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await menuItemAdminDelete({ ...config, path, throwOnError: true });
      return data;
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
      MenuItemAdminDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    MenuItemAdminDeleteOptions,
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
    MenuItemAdminDeleteOptions,
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
    MenuItemAdminDeleteOptions,
    TContext
  >;
}
