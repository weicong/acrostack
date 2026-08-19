/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  IdentityClaimTypeCreateOptions,
  IdentityClaimTypeCreateStatus200,
  IdentityClaimTypeCreateStatus400,
  IdentityClaimTypeCreateStatus401,
  IdentityClaimTypeCreateStatus403,
  IdentityClaimTypeCreateStatus404,
  IdentityClaimTypeCreateStatus500,
  IdentityClaimTypeCreateStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityClaimTypeCreate } from "../../clients/identityClaimType/identityClaimTypeCreate";

export const identityClaimTypeCreateMutationKey = () =>
  [{ url: "/api/app/identity-claim-type" }] as const;

export function identityClaimTypeCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = identityClaimTypeCreateMutationKey();
  return mutationOptions<
    IdentityClaimTypeCreateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeCreateStatus400
      | IdentityClaimTypeCreateStatus401
      | IdentityClaimTypeCreateStatus403
      | IdentityClaimTypeCreateStatus404
      | IdentityClaimTypeCreateStatus500
      | IdentityClaimTypeCreateStatus501
    >,
    IdentityClaimTypeCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await identityClaimTypeCreate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/identity-claim-type}
 */
export function useIdentityClaimTypeCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityClaimTypeCreateStatus200,
      ResponseErrorConfig<
        | IdentityClaimTypeCreateStatus400
        | IdentityClaimTypeCreateStatus401
        | IdentityClaimTypeCreateStatus403
        | IdentityClaimTypeCreateStatus404
        | IdentityClaimTypeCreateStatus500
        | IdentityClaimTypeCreateStatus501
      >,
      IdentityClaimTypeCreateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? identityClaimTypeCreateMutationKey();

  const baseOptions = identityClaimTypeCreateMutationOptions(config) as UseMutationOptions<
    IdentityClaimTypeCreateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeCreateStatus400
      | IdentityClaimTypeCreateStatus401
      | IdentityClaimTypeCreateStatus403
      | IdentityClaimTypeCreateStatus404
      | IdentityClaimTypeCreateStatus500
      | IdentityClaimTypeCreateStatus501
    >,
    IdentityClaimTypeCreateOptions,
    TContext
  >;

  return useMutation<
    IdentityClaimTypeCreateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeCreateStatus400
      | IdentityClaimTypeCreateStatus401
      | IdentityClaimTypeCreateStatus403
      | IdentityClaimTypeCreateStatus404
      | IdentityClaimTypeCreateStatus500
      | IdentityClaimTypeCreateStatus501
    >,
    IdentityClaimTypeCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityClaimTypeCreateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeCreateStatus400
      | IdentityClaimTypeCreateStatus401
      | IdentityClaimTypeCreateStatus403
      | IdentityClaimTypeCreateStatus404
      | IdentityClaimTypeCreateStatus500
      | IdentityClaimTypeCreateStatus501
    >,
    IdentityClaimTypeCreateOptions,
    TContext
  >;
}
