/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuCreateData,
  MenuCreateStatus200,
  MenuCreateStatus400,
  MenuCreateStatus401,
  MenuCreateStatus403,
  MenuCreateStatus404,
  MenuCreateStatus500,
  MenuCreateStatus501,
} from "../../models/menu/MenuCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuCreate } from "../../clients/menu/menuCreate.ts";

export const menuCreateMutationKey = () => [{ url: "/api/app/menu" }] as const;

export function menuCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MenuCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = menuCreateMutationKey();
  return mutationOptions<
    MenuCreateStatus200,
    ResponseErrorConfig<
      | MenuCreateStatus400
      | MenuCreateStatus401
      | MenuCreateStatus403
      | MenuCreateStatus404
      | MenuCreateStatus500
      | MenuCreateStatus501
    >,
    { data?: MenuCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return menuCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/menu}
 */
export function useMenuCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuCreateStatus200,
      ResponseErrorConfig<
        | MenuCreateStatus400
        | MenuCreateStatus401
        | MenuCreateStatus403
        | MenuCreateStatus404
        | MenuCreateStatus500
        | MenuCreateStatus501
      >,
      { data?: MenuCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MenuCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuCreateMutationKey();

  const baseOptions = menuCreateMutationOptions(config) as UseMutationOptions<
    MenuCreateStatus200,
    ResponseErrorConfig<
      | MenuCreateStatus400
      | MenuCreateStatus401
      | MenuCreateStatus403
      | MenuCreateStatus404
      | MenuCreateStatus500
      | MenuCreateStatus501
    >,
    { data?: MenuCreateData },
    TContext
  >;

  return useMutation<
    MenuCreateStatus200,
    ResponseErrorConfig<
      | MenuCreateStatus400
      | MenuCreateStatus401
      | MenuCreateStatus403
      | MenuCreateStatus404
      | MenuCreateStatus500
      | MenuCreateStatus501
    >,
    { data?: MenuCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuCreateStatus200,
    ResponseErrorConfig<
      | MenuCreateStatus400
      | MenuCreateStatus401
      | MenuCreateStatus403
      | MenuCreateStatus404
      | MenuCreateStatus500
      | MenuCreateStatus501
    >,
    { data?: MenuCreateData },
    TContext
  >;
}
