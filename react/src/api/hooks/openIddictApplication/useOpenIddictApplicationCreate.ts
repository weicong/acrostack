/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  OpenIddictApplicationCreateData,
  OpenIddictApplicationCreateStatus200,
  OpenIddictApplicationCreateStatus400,
  OpenIddictApplicationCreateStatus401,
  OpenIddictApplicationCreateStatus403,
  OpenIddictApplicationCreateStatus404,
  OpenIddictApplicationCreateStatus500,
  OpenIddictApplicationCreateStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictApplicationCreate } from "../../clients/openIddictApplication/openIddictApplicationCreate.ts";

export const openIddictApplicationCreateMutationKey = () =>
  [{ url: "/api/app/open-iddict-application" }] as const;

export function openIddictApplicationCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<OpenIddictApplicationCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = openIddictApplicationCreateMutationKey();
  return mutationOptions<
    OpenIddictApplicationCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationCreateStatus400
      | OpenIddictApplicationCreateStatus401
      | OpenIddictApplicationCreateStatus403
      | OpenIddictApplicationCreateStatus404
      | OpenIddictApplicationCreateStatus500
      | OpenIddictApplicationCreateStatus501
    >,
    { data?: OpenIddictApplicationCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return openIddictApplicationCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/open-iddict-application}
 */
export function useOpenIddictApplicationCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictApplicationCreateStatus200,
      ResponseErrorConfig<
        | OpenIddictApplicationCreateStatus400
        | OpenIddictApplicationCreateStatus401
        | OpenIddictApplicationCreateStatus403
        | OpenIddictApplicationCreateStatus404
        | OpenIddictApplicationCreateStatus500
        | OpenIddictApplicationCreateStatus501
      >,
      { data?: OpenIddictApplicationCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<OpenIddictApplicationCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? openIddictApplicationCreateMutationKey();

  const baseOptions = openIddictApplicationCreateMutationOptions(config) as UseMutationOptions<
    OpenIddictApplicationCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationCreateStatus400
      | OpenIddictApplicationCreateStatus401
      | OpenIddictApplicationCreateStatus403
      | OpenIddictApplicationCreateStatus404
      | OpenIddictApplicationCreateStatus500
      | OpenIddictApplicationCreateStatus501
    >,
    { data?: OpenIddictApplicationCreateData },
    TContext
  >;

  return useMutation<
    OpenIddictApplicationCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationCreateStatus400
      | OpenIddictApplicationCreateStatus401
      | OpenIddictApplicationCreateStatus403
      | OpenIddictApplicationCreateStatus404
      | OpenIddictApplicationCreateStatus500
      | OpenIddictApplicationCreateStatus501
    >,
    { data?: OpenIddictApplicationCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictApplicationCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationCreateStatus400
      | OpenIddictApplicationCreateStatus401
      | OpenIddictApplicationCreateStatus403
      | OpenIddictApplicationCreateStatus404
      | OpenIddictApplicationCreateStatus500
      | OpenIddictApplicationCreateStatus501
    >,
    { data?: OpenIddictApplicationCreateData },
    TContext
  >;
}
