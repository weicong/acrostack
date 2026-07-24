/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityRoleClaimUpdateData,
  IdentityRoleClaimUpdatePathId,
  IdentityRoleClaimUpdateStatus200,
  IdentityRoleClaimUpdateStatus400,
  IdentityRoleClaimUpdateStatus401,
  IdentityRoleClaimUpdateStatus403,
  IdentityRoleClaimUpdateStatus404,
  IdentityRoleClaimUpdateStatus500,
  IdentityRoleClaimUpdateStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityRoleClaimUpdate } from "../../clients/identityRoleClaim/identityRoleClaimUpdate.ts";

export const identityRoleClaimUpdateMutationKey = () =>
  [{ url: "/api/app/identity-role-claim/:id" }] as const;

export function identityRoleClaimUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<IdentityRoleClaimUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = identityRoleClaimUpdateMutationKey();
  return mutationOptions<
    IdentityRoleClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimUpdateStatus400
      | IdentityRoleClaimUpdateStatus401
      | IdentityRoleClaimUpdateStatus403
      | IdentityRoleClaimUpdateStatus404
      | IdentityRoleClaimUpdateStatus500
      | IdentityRoleClaimUpdateStatus501
    >,
    { id: IdentityRoleClaimUpdatePathId; data?: IdentityRoleClaimUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return identityRoleClaimUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export function useIdentityRoleClaimUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityRoleClaimUpdateStatus200,
      ResponseErrorConfig<
        | IdentityRoleClaimUpdateStatus400
        | IdentityRoleClaimUpdateStatus401
        | IdentityRoleClaimUpdateStatus403
        | IdentityRoleClaimUpdateStatus404
        | IdentityRoleClaimUpdateStatus500
        | IdentityRoleClaimUpdateStatus501
      >,
      { id: IdentityRoleClaimUpdatePathId; data?: IdentityRoleClaimUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<IdentityRoleClaimUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityRoleClaimUpdateMutationKey();

  const baseOptions = identityRoleClaimUpdateMutationOptions(config) as UseMutationOptions<
    IdentityRoleClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimUpdateStatus400
      | IdentityRoleClaimUpdateStatus401
      | IdentityRoleClaimUpdateStatus403
      | IdentityRoleClaimUpdateStatus404
      | IdentityRoleClaimUpdateStatus500
      | IdentityRoleClaimUpdateStatus501
    >,
    { id: IdentityRoleClaimUpdatePathId; data?: IdentityRoleClaimUpdateData },
    TContext
  >;

  return useMutation<
    IdentityRoleClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimUpdateStatus400
      | IdentityRoleClaimUpdateStatus401
      | IdentityRoleClaimUpdateStatus403
      | IdentityRoleClaimUpdateStatus404
      | IdentityRoleClaimUpdateStatus500
      | IdentityRoleClaimUpdateStatus501
    >,
    { id: IdentityRoleClaimUpdatePathId; data?: IdentityRoleClaimUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityRoleClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimUpdateStatus400
      | IdentityRoleClaimUpdateStatus401
      | IdentityRoleClaimUpdateStatus403
      | IdentityRoleClaimUpdateStatus404
      | IdentityRoleClaimUpdateStatus500
      | IdentityRoleClaimUpdateStatus501
    >,
    { id: IdentityRoleClaimUpdatePathId; data?: IdentityRoleClaimUpdateData },
    TContext
  >;
}
