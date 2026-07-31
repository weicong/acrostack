/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuUpdateData,
  MenuUpdatePathId,
  MenuUpdateStatus200,
  MenuUpdateStatus400,
  MenuUpdateStatus401,
  MenuUpdateStatus403,
  MenuUpdateStatus404,
  MenuUpdateStatus500,
  MenuUpdateStatus501,
} from "../../models/menu/MenuUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuUpdate } from "../../clients/menu/menuUpdate.ts";

export const menuUpdateMutationKey = () => [{ url: "/api/app/menu/:id" }] as const;

export function menuUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MenuUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = menuUpdateMutationKey();
  return mutationOptions<
    MenuUpdateStatus200,
    ResponseErrorConfig<
      | MenuUpdateStatus400
      | MenuUpdateStatus401
      | MenuUpdateStatus403
      | MenuUpdateStatus404
      | MenuUpdateStatus500
      | MenuUpdateStatus501
    >,
    { id: MenuUpdatePathId; data?: MenuUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return menuUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/menu/:id}
 */
export function useMenuUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuUpdateStatus200,
      ResponseErrorConfig<
        | MenuUpdateStatus400
        | MenuUpdateStatus401
        | MenuUpdateStatus403
        | MenuUpdateStatus404
        | MenuUpdateStatus500
        | MenuUpdateStatus501
      >,
      { id: MenuUpdatePathId; data?: MenuUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MenuUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuUpdateMutationKey();

  const baseOptions = menuUpdateMutationOptions(config) as UseMutationOptions<
    MenuUpdateStatus200,
    ResponseErrorConfig<
      | MenuUpdateStatus400
      | MenuUpdateStatus401
      | MenuUpdateStatus403
      | MenuUpdateStatus404
      | MenuUpdateStatus500
      | MenuUpdateStatus501
    >,
    { id: MenuUpdatePathId; data?: MenuUpdateData },
    TContext
  >;

  return useMutation<
    MenuUpdateStatus200,
    ResponseErrorConfig<
      | MenuUpdateStatus400
      | MenuUpdateStatus401
      | MenuUpdateStatus403
      | MenuUpdateStatus404
      | MenuUpdateStatus500
      | MenuUpdateStatus501
    >,
    { id: MenuUpdatePathId; data?: MenuUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuUpdateStatus200,
    ResponseErrorConfig<
      | MenuUpdateStatus400
      | MenuUpdateStatus401
      | MenuUpdateStatus403
      | MenuUpdateStatus404
      | MenuUpdateStatus500
      | MenuUpdateStatus501
    >,
    { id: MenuUpdatePathId; data?: MenuUpdateData },
    TContext
  >;
}
