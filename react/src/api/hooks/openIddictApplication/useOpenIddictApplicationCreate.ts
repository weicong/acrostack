/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictApplicationCreateOptions,
  OpenIddictApplicationCreateStatus200,
  OpenIddictApplicationCreateStatus400,
  OpenIddictApplicationCreateStatus401,
  OpenIddictApplicationCreateStatus403,
  OpenIddictApplicationCreateStatus404,
  OpenIddictApplicationCreateStatus500,
  OpenIddictApplicationCreateStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictApplicationCreate } from "../../clients/openIddictApplication/openIddictApplicationCreate";

export const openIddictApplicationCreateMutationKey = () =>
  [{ url: "/api/app/open-iddict-application" }] as const;

export function openIddictApplicationCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    OpenIddictApplicationCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await openIddictApplicationCreate({ ...config, body, throwOnError: true });
      return data;
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
      OpenIddictApplicationCreateOptions,
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
    OpenIddictApplicationCreateOptions,
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
    OpenIddictApplicationCreateOptions,
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
    OpenIddictApplicationCreateOptions,
    TContext
  >;
}
