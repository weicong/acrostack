/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  OpenIddictApplicationUpdateData,
  OpenIddictApplicationUpdatePathId,
  OpenIddictApplicationUpdateStatus200,
  OpenIddictApplicationUpdateStatus400,
  OpenIddictApplicationUpdateStatus401,
  OpenIddictApplicationUpdateStatus403,
  OpenIddictApplicationUpdateStatus404,
  OpenIddictApplicationUpdateStatus500,
  OpenIddictApplicationUpdateStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictApplicationUpdate } from "../../clients/openIddictApplication/openIddictApplicationUpdate.ts";

export const openIddictApplicationUpdateMutationKey = () =>
  [{ url: "/api/app/open-iddict-application/:id" }] as const;

export function openIddictApplicationUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<OpenIddictApplicationUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = openIddictApplicationUpdateMutationKey();
  return mutationOptions<
    OpenIddictApplicationUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationUpdateStatus400
      | OpenIddictApplicationUpdateStatus401
      | OpenIddictApplicationUpdateStatus403
      | OpenIddictApplicationUpdateStatus404
      | OpenIddictApplicationUpdateStatus500
      | OpenIddictApplicationUpdateStatus501
    >,
    { id: OpenIddictApplicationUpdatePathId; data?: OpenIddictApplicationUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return openIddictApplicationUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function useOpenIddictApplicationUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictApplicationUpdateStatus200,
      ResponseErrorConfig<
        | OpenIddictApplicationUpdateStatus400
        | OpenIddictApplicationUpdateStatus401
        | OpenIddictApplicationUpdateStatus403
        | OpenIddictApplicationUpdateStatus404
        | OpenIddictApplicationUpdateStatus500
        | OpenIddictApplicationUpdateStatus501
      >,
      { id: OpenIddictApplicationUpdatePathId; data?: OpenIddictApplicationUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<OpenIddictApplicationUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictApplicationUpdateMutationKey();

  const baseOptions = openIddictApplicationUpdateMutationOptions(config) as UseMutationOptions<
    OpenIddictApplicationUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationUpdateStatus400
      | OpenIddictApplicationUpdateStatus401
      | OpenIddictApplicationUpdateStatus403
      | OpenIddictApplicationUpdateStatus404
      | OpenIddictApplicationUpdateStatus500
      | OpenIddictApplicationUpdateStatus501
    >,
    { id: OpenIddictApplicationUpdatePathId; data?: OpenIddictApplicationUpdateData },
    TContext
  >;

  return useMutation<
    OpenIddictApplicationUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationUpdateStatus400
      | OpenIddictApplicationUpdateStatus401
      | OpenIddictApplicationUpdateStatus403
      | OpenIddictApplicationUpdateStatus404
      | OpenIddictApplicationUpdateStatus500
      | OpenIddictApplicationUpdateStatus501
    >,
    { id: OpenIddictApplicationUpdatePathId; data?: OpenIddictApplicationUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictApplicationUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationUpdateStatus400
      | OpenIddictApplicationUpdateStatus401
      | OpenIddictApplicationUpdateStatus403
      | OpenIddictApplicationUpdateStatus404
      | OpenIddictApplicationUpdateStatus500
      | OpenIddictApplicationUpdateStatus501
    >,
    { id: OpenIddictApplicationUpdatePathId; data?: OpenIddictApplicationUpdateData },
    TContext
  >;
}
