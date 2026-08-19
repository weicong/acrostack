/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  IdentityClaimTypeUpdateOptions,
  IdentityClaimTypeUpdateStatus200,
  IdentityClaimTypeUpdateStatus400,
  IdentityClaimTypeUpdateStatus401,
  IdentityClaimTypeUpdateStatus403,
  IdentityClaimTypeUpdateStatus404,
  IdentityClaimTypeUpdateStatus500,
  IdentityClaimTypeUpdateStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityClaimTypeUpdate } from "../../clients/identityClaimType/identityClaimTypeUpdate";

export const identityClaimTypeUpdateMutationKey = () =>
  [{ url: "/api/app/identity-claim-type/:id" }] as const;

export function identityClaimTypeUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = identityClaimTypeUpdateMutationKey();
  return mutationOptions<
    IdentityClaimTypeUpdateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeUpdateStatus400
      | IdentityClaimTypeUpdateStatus401
      | IdentityClaimTypeUpdateStatus403
      | IdentityClaimTypeUpdateStatus404
      | IdentityClaimTypeUpdateStatus500
      | IdentityClaimTypeUpdateStatus501
    >,
    IdentityClaimTypeUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await identityClaimTypeUpdate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function useIdentityClaimTypeUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityClaimTypeUpdateStatus200,
      ResponseErrorConfig<
        | IdentityClaimTypeUpdateStatus400
        | IdentityClaimTypeUpdateStatus401
        | IdentityClaimTypeUpdateStatus403
        | IdentityClaimTypeUpdateStatus404
        | IdentityClaimTypeUpdateStatus500
        | IdentityClaimTypeUpdateStatus501
      >,
      IdentityClaimTypeUpdateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? identityClaimTypeUpdateMutationKey();

  const baseOptions = identityClaimTypeUpdateMutationOptions(config) as UseMutationOptions<
    IdentityClaimTypeUpdateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeUpdateStatus400
      | IdentityClaimTypeUpdateStatus401
      | IdentityClaimTypeUpdateStatus403
      | IdentityClaimTypeUpdateStatus404
      | IdentityClaimTypeUpdateStatus500
      | IdentityClaimTypeUpdateStatus501
    >,
    IdentityClaimTypeUpdateOptions,
    TContext
  >;

  return useMutation<
    IdentityClaimTypeUpdateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeUpdateStatus400
      | IdentityClaimTypeUpdateStatus401
      | IdentityClaimTypeUpdateStatus403
      | IdentityClaimTypeUpdateStatus404
      | IdentityClaimTypeUpdateStatus500
      | IdentityClaimTypeUpdateStatus501
    >,
    IdentityClaimTypeUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityClaimTypeUpdateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeUpdateStatus400
      | IdentityClaimTypeUpdateStatus401
      | IdentityClaimTypeUpdateStatus403
      | IdentityClaimTypeUpdateStatus404
      | IdentityClaimTypeUpdateStatus500
      | IdentityClaimTypeUpdateStatus501
    >,
    IdentityClaimTypeUpdateOptions,
    TContext
  >;
}
