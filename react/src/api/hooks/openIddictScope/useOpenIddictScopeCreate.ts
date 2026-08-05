/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  OpenIddictScopeCreateData,
  OpenIddictScopeCreateStatus200,
  OpenIddictScopeCreateStatus400,
  OpenIddictScopeCreateStatus401,
  OpenIddictScopeCreateStatus403,
  OpenIddictScopeCreateStatus404,
  OpenIddictScopeCreateStatus500,
  OpenIddictScopeCreateStatus501,
} from "../../models/openIddictScope/OpenIddictScopeCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictScopeCreate } from "../../clients/openIddictScope/openIddictScopeCreate.ts";

export const openIddictScopeCreateMutationKey = () =>
  [{ url: "/api/app/open-iddict-scope" }] as const;

export function openIddictScopeCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<OpenIddictScopeCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = openIddictScopeCreateMutationKey();
  return mutationOptions<
    OpenIddictScopeCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeCreateStatus400
      | OpenIddictScopeCreateStatus401
      | OpenIddictScopeCreateStatus403
      | OpenIddictScopeCreateStatus404
      | OpenIddictScopeCreateStatus500
      | OpenIddictScopeCreateStatus501
    >,
    { data?: OpenIddictScopeCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return openIddictScopeCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/open-iddict-scope}
 */
export function useOpenIddictScopeCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictScopeCreateStatus200,
      ResponseErrorConfig<
        | OpenIddictScopeCreateStatus400
        | OpenIddictScopeCreateStatus401
        | OpenIddictScopeCreateStatus403
        | OpenIddictScopeCreateStatus404
        | OpenIddictScopeCreateStatus500
        | OpenIddictScopeCreateStatus501
      >,
      { data?: OpenIddictScopeCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<OpenIddictScopeCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictScopeCreateMutationKey();

  const baseOptions = openIddictScopeCreateMutationOptions(config) as UseMutationOptions<
    OpenIddictScopeCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeCreateStatus400
      | OpenIddictScopeCreateStatus401
      | OpenIddictScopeCreateStatus403
      | OpenIddictScopeCreateStatus404
      | OpenIddictScopeCreateStatus500
      | OpenIddictScopeCreateStatus501
    >,
    { data?: OpenIddictScopeCreateData },
    TContext
  >;

  return useMutation<
    OpenIddictScopeCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeCreateStatus400
      | OpenIddictScopeCreateStatus401
      | OpenIddictScopeCreateStatus403
      | OpenIddictScopeCreateStatus404
      | OpenIddictScopeCreateStatus500
      | OpenIddictScopeCreateStatus501
    >,
    { data?: OpenIddictScopeCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictScopeCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeCreateStatus400
      | OpenIddictScopeCreateStatus401
      | OpenIddictScopeCreateStatus403
      | OpenIddictScopeCreateStatus404
      | OpenIddictScopeCreateStatus500
      | OpenIddictScopeCreateStatus501
    >,
    { data?: OpenIddictScopeCreateData },
    TContext
  >;
}
