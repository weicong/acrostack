/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityClaimTypeCreateData,
  IdentityClaimTypeCreateStatus200,
  IdentityClaimTypeCreateStatus400,
  IdentityClaimTypeCreateStatus401,
  IdentityClaimTypeCreateStatus403,
  IdentityClaimTypeCreateStatus404,
  IdentityClaimTypeCreateStatus500,
  IdentityClaimTypeCreateStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityClaimTypeCreate } from "../../clients/identityClaimType/identityClaimTypeCreate.ts";

export const identityClaimTypeCreateMutationKey = () =>
  [{ url: "/api/app/identity-claim-type" }] as const;

export function identityClaimTypeCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<IdentityClaimTypeCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: IdentityClaimTypeCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return identityClaimTypeCreate(data, config);
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
      { data?: IdentityClaimTypeCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<IdentityClaimTypeCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: IdentityClaimTypeCreateData },
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
    { data?: IdentityClaimTypeCreateData },
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
    { data?: IdentityClaimTypeCreateData },
    TContext
  >;
}
