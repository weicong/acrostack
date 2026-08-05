/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityClaimTypeUpdateData,
  IdentityClaimTypeUpdatePathId,
  IdentityClaimTypeUpdateStatus200,
  IdentityClaimTypeUpdateStatus400,
  IdentityClaimTypeUpdateStatus401,
  IdentityClaimTypeUpdateStatus403,
  IdentityClaimTypeUpdateStatus404,
  IdentityClaimTypeUpdateStatus500,
  IdentityClaimTypeUpdateStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityClaimTypeUpdate } from "../../clients/identityClaimType/identityClaimTypeUpdate.ts";

export const identityClaimTypeUpdateMutationKey = () =>
  [{ url: "/api/app/identity-claim-type/:id" }] as const;

export function identityClaimTypeUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<IdentityClaimTypeUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { id: IdentityClaimTypeUpdatePathId; data?: IdentityClaimTypeUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return identityClaimTypeUpdate(id, data, config);
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
      { id: IdentityClaimTypeUpdatePathId; data?: IdentityClaimTypeUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<IdentityClaimTypeUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { id: IdentityClaimTypeUpdatePathId; data?: IdentityClaimTypeUpdateData },
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
    { id: IdentityClaimTypeUpdatePathId; data?: IdentityClaimTypeUpdateData },
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
    { id: IdentityClaimTypeUpdatePathId; data?: IdentityClaimTypeUpdateData },
    TContext
  >;
}
