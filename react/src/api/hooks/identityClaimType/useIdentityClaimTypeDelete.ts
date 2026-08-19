/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  IdentityClaimTypeDeleteOptions,
  IdentityClaimTypeDeleteStatus200,
  IdentityClaimTypeDeleteStatus204,
  IdentityClaimTypeDeleteStatus400,
  IdentityClaimTypeDeleteStatus401,
  IdentityClaimTypeDeleteStatus403,
  IdentityClaimTypeDeleteStatus404,
  IdentityClaimTypeDeleteStatus500,
  IdentityClaimTypeDeleteStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityClaimTypeDelete } from "../../clients/identityClaimType/identityClaimTypeDelete";

export const identityClaimTypeDeleteMutationKey = () =>
  [{ url: "/api/app/identity-claim-type/:id" }] as const;

export function identityClaimTypeDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = identityClaimTypeDeleteMutationKey();
  return mutationOptions<
    IdentityClaimTypeDeleteStatus200 | IdentityClaimTypeDeleteStatus204,
    ResponseErrorConfig<
      | IdentityClaimTypeDeleteStatus400
      | IdentityClaimTypeDeleteStatus401
      | IdentityClaimTypeDeleteStatus403
      | IdentityClaimTypeDeleteStatus404
      | IdentityClaimTypeDeleteStatus500
      | IdentityClaimTypeDeleteStatus501
    >,
    IdentityClaimTypeDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await identityClaimTypeDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function useIdentityClaimTypeDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityClaimTypeDeleteStatus200 | IdentityClaimTypeDeleteStatus204,
      ResponseErrorConfig<
        | IdentityClaimTypeDeleteStatus400
        | IdentityClaimTypeDeleteStatus401
        | IdentityClaimTypeDeleteStatus403
        | IdentityClaimTypeDeleteStatus404
        | IdentityClaimTypeDeleteStatus500
        | IdentityClaimTypeDeleteStatus501
      >,
      IdentityClaimTypeDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityClaimTypeDeleteMutationKey();

  const baseOptions = identityClaimTypeDeleteMutationOptions(config) as UseMutationOptions<
    IdentityClaimTypeDeleteStatus200 | IdentityClaimTypeDeleteStatus204,
    ResponseErrorConfig<
      | IdentityClaimTypeDeleteStatus400
      | IdentityClaimTypeDeleteStatus401
      | IdentityClaimTypeDeleteStatus403
      | IdentityClaimTypeDeleteStatus404
      | IdentityClaimTypeDeleteStatus500
      | IdentityClaimTypeDeleteStatus501
    >,
    IdentityClaimTypeDeleteOptions,
    TContext
  >;

  return useMutation<
    IdentityClaimTypeDeleteStatus200 | IdentityClaimTypeDeleteStatus204,
    ResponseErrorConfig<
      | IdentityClaimTypeDeleteStatus400
      | IdentityClaimTypeDeleteStatus401
      | IdentityClaimTypeDeleteStatus403
      | IdentityClaimTypeDeleteStatus404
      | IdentityClaimTypeDeleteStatus500
      | IdentityClaimTypeDeleteStatus501
    >,
    IdentityClaimTypeDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityClaimTypeDeleteStatus200 | IdentityClaimTypeDeleteStatus204,
    ResponseErrorConfig<
      | IdentityClaimTypeDeleteStatus400
      | IdentityClaimTypeDeleteStatus401
      | IdentityClaimTypeDeleteStatus403
      | IdentityClaimTypeDeleteStatus404
      | IdentityClaimTypeDeleteStatus500
      | IdentityClaimTypeDeleteStatus501
    >,
    IdentityClaimTypeDeleteOptions,
    TContext
  >;
}
