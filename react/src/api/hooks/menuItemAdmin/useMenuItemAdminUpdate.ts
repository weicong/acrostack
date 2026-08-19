/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MenuItemAdminUpdateOptions,
  MenuItemAdminUpdateStatus200,
  MenuItemAdminUpdateStatus400,
  MenuItemAdminUpdateStatus401,
  MenuItemAdminUpdateStatus403,
  MenuItemAdminUpdateStatus404,
  MenuItemAdminUpdateStatus500,
  MenuItemAdminUpdateStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuItemAdminUpdate } from "../../clients/menuItemAdmin/menuItemAdminUpdate";

export const menuItemAdminUpdateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/menu-items/:id" }] as const;

export function menuItemAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    MenuItemAdminUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await menuItemAdminUpdate({ ...config, path, body, throwOnError: true });
      return data;
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
      MenuItemAdminUpdateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
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
    MenuItemAdminUpdateOptions,
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
    MenuItemAdminUpdateOptions,
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
    MenuItemAdminUpdateOptions,
    TContext
  >;
}
