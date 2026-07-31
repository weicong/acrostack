/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MenuDeletePathId,
  MenuDeleteStatus200,
  MenuDeleteStatus204,
  MenuDeleteStatus400,
  MenuDeleteStatus401,
  MenuDeleteStatus403,
  MenuDeleteStatus404,
  MenuDeleteStatus500,
  MenuDeleteStatus501,
} from "../../models/menu/MenuDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { menuDelete } from "../../clients/menu/menuDelete.ts";

export const menuDeleteMutationKey = () => [{ url: "/api/app/menu/:id" }] as const;

export function menuDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = menuDeleteMutationKey();
  return mutationOptions<
    MenuDeleteStatus200 | MenuDeleteStatus204,
    ResponseErrorConfig<
      | MenuDeleteStatus400
      | MenuDeleteStatus401
      | MenuDeleteStatus403
      | MenuDeleteStatus404
      | MenuDeleteStatus500
      | MenuDeleteStatus501
    >,
    { id: MenuDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return menuDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/menu/:id}
 */
export function useMenuDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MenuDeleteStatus200 | MenuDeleteStatus204,
      ResponseErrorConfig<
        | MenuDeleteStatus400
        | MenuDeleteStatus401
        | MenuDeleteStatus403
        | MenuDeleteStatus404
        | MenuDeleteStatus500
        | MenuDeleteStatus501
      >,
      { id: MenuDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuDeleteMutationKey();

  const baseOptions = menuDeleteMutationOptions(config) as UseMutationOptions<
    MenuDeleteStatus200 | MenuDeleteStatus204,
    ResponseErrorConfig<
      | MenuDeleteStatus400
      | MenuDeleteStatus401
      | MenuDeleteStatus403
      | MenuDeleteStatus404
      | MenuDeleteStatus500
      | MenuDeleteStatus501
    >,
    { id: MenuDeletePathId },
    TContext
  >;

  return useMutation<
    MenuDeleteStatus200 | MenuDeleteStatus204,
    ResponseErrorConfig<
      | MenuDeleteStatus400
      | MenuDeleteStatus401
      | MenuDeleteStatus403
      | MenuDeleteStatus404
      | MenuDeleteStatus500
      | MenuDeleteStatus501
    >,
    { id: MenuDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MenuDeleteStatus200 | MenuDeleteStatus204,
    ResponseErrorConfig<
      | MenuDeleteStatus400
      | MenuDeleteStatus401
      | MenuDeleteStatus403
      | MenuDeleteStatus404
      | MenuDeleteStatus500
      | MenuDeleteStatus501
    >,
    { id: MenuDeletePathId },
    TContext
  >;
}
