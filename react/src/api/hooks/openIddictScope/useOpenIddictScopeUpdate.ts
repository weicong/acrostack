/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  OpenIddictScopeUpdateData,
  OpenIddictScopeUpdatePathId,
  OpenIddictScopeUpdateStatus200,
  OpenIddictScopeUpdateStatus400,
  OpenIddictScopeUpdateStatus401,
  OpenIddictScopeUpdateStatus403,
  OpenIddictScopeUpdateStatus404,
  OpenIddictScopeUpdateStatus500,
  OpenIddictScopeUpdateStatus501,
} from "../../models/openIddictScope/OpenIddictScopeUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictScopeUpdate } from "../../clients/openIddictScope/openIddictScopeUpdate.ts";

export const openIddictScopeUpdateMutationKey = () =>
  [{ url: "/api/app/open-iddict-scope/:id" }] as const;

export function openIddictScopeUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<OpenIddictScopeUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = openIddictScopeUpdateMutationKey();
  return mutationOptions<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    { id: OpenIddictScopeUpdatePathId; data?: OpenIddictScopeUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return openIddictScopeUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function useOpenIddictScopeUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictScopeUpdateStatus200,
      ResponseErrorConfig<
        | OpenIddictScopeUpdateStatus400
        | OpenIddictScopeUpdateStatus401
        | OpenIddictScopeUpdateStatus403
        | OpenIddictScopeUpdateStatus404
        | OpenIddictScopeUpdateStatus500
        | OpenIddictScopeUpdateStatus501
      >,
      { id: OpenIddictScopeUpdatePathId; data?: OpenIddictScopeUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<OpenIddictScopeUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictScopeUpdateMutationKey();

  const baseOptions = openIddictScopeUpdateMutationOptions(config) as UseMutationOptions<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    { id: OpenIddictScopeUpdatePathId; data?: OpenIddictScopeUpdateData },
    TContext
  >;

  return useMutation<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    { id: OpenIddictScopeUpdatePathId; data?: OpenIddictScopeUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    { id: OpenIddictScopeUpdatePathId; data?: OpenIddictScopeUpdateData },
    TContext
  >;
}
