/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityUserClaimUpdateData,
  IdentityUserClaimUpdatePathId,
  IdentityUserClaimUpdateStatus200,
  IdentityUserClaimUpdateStatus400,
  IdentityUserClaimUpdateStatus401,
  IdentityUserClaimUpdateStatus403,
  IdentityUserClaimUpdateStatus404,
  IdentityUserClaimUpdateStatus500,
  IdentityUserClaimUpdateStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityUserClaimUpdate } from "../../clients/identityUserClaim/identityUserClaimUpdate.ts";

export const identityUserClaimUpdateMutationKey = () =>
  [{ url: "/api/app/identity-user-claim/:id" }] as const;

export function identityUserClaimUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<IdentityUserClaimUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = identityUserClaimUpdateMutationKey();
  return mutationOptions<
    IdentityUserClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimUpdateStatus400
      | IdentityUserClaimUpdateStatus401
      | IdentityUserClaimUpdateStatus403
      | IdentityUserClaimUpdateStatus404
      | IdentityUserClaimUpdateStatus500
      | IdentityUserClaimUpdateStatus501
    >,
    { id: IdentityUserClaimUpdatePathId; data?: IdentityUserClaimUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return identityUserClaimUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export function useIdentityUserClaimUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityUserClaimUpdateStatus200,
      ResponseErrorConfig<
        | IdentityUserClaimUpdateStatus400
        | IdentityUserClaimUpdateStatus401
        | IdentityUserClaimUpdateStatus403
        | IdentityUserClaimUpdateStatus404
        | IdentityUserClaimUpdateStatus500
        | IdentityUserClaimUpdateStatus501
      >,
      { id: IdentityUserClaimUpdatePathId; data?: IdentityUserClaimUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<IdentityUserClaimUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityUserClaimUpdateMutationKey();

  const baseOptions = identityUserClaimUpdateMutationOptions(config) as UseMutationOptions<
    IdentityUserClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimUpdateStatus400
      | IdentityUserClaimUpdateStatus401
      | IdentityUserClaimUpdateStatus403
      | IdentityUserClaimUpdateStatus404
      | IdentityUserClaimUpdateStatus500
      | IdentityUserClaimUpdateStatus501
    >,
    { id: IdentityUserClaimUpdatePathId; data?: IdentityUserClaimUpdateData },
    TContext
  >;

  return useMutation<
    IdentityUserClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimUpdateStatus400
      | IdentityUserClaimUpdateStatus401
      | IdentityUserClaimUpdateStatus403
      | IdentityUserClaimUpdateStatus404
      | IdentityUserClaimUpdateStatus500
      | IdentityUserClaimUpdateStatus501
    >,
    { id: IdentityUserClaimUpdatePathId; data?: IdentityUserClaimUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityUserClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimUpdateStatus400
      | IdentityUserClaimUpdateStatus401
      | IdentityUserClaimUpdateStatus403
      | IdentityUserClaimUpdateStatus404
      | IdentityUserClaimUpdateStatus500
      | IdentityUserClaimUpdateStatus501
    >,
    { id: IdentityUserClaimUpdatePathId; data?: IdentityUserClaimUpdateData },
    TContext
  >;
}
