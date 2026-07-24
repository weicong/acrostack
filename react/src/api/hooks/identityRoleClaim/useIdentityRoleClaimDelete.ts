/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityRoleClaimDeletePathId,
  IdentityRoleClaimDeleteStatus200,
  IdentityRoleClaimDeleteStatus204,
  IdentityRoleClaimDeleteStatus400,
  IdentityRoleClaimDeleteStatus401,
  IdentityRoleClaimDeleteStatus403,
  IdentityRoleClaimDeleteStatus404,
  IdentityRoleClaimDeleteStatus500,
  IdentityRoleClaimDeleteStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityRoleClaimDelete } from "../../clients/identityRoleClaim/identityRoleClaimDelete.ts";

export const identityRoleClaimDeleteMutationKey = () =>
  [{ url: "/api/app/identity-role-claim/:id" }] as const;

export function identityRoleClaimDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = identityRoleClaimDeleteMutationKey();
  return mutationOptions<
    IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityRoleClaimDeleteStatus400
      | IdentityRoleClaimDeleteStatus401
      | IdentityRoleClaimDeleteStatus403
      | IdentityRoleClaimDeleteStatus404
      | IdentityRoleClaimDeleteStatus500
      | IdentityRoleClaimDeleteStatus501
    >,
    { id: IdentityRoleClaimDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return identityRoleClaimDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export function useIdentityRoleClaimDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204,
      ResponseErrorConfig<
        | IdentityRoleClaimDeleteStatus400
        | IdentityRoleClaimDeleteStatus401
        | IdentityRoleClaimDeleteStatus403
        | IdentityRoleClaimDeleteStatus404
        | IdentityRoleClaimDeleteStatus500
        | IdentityRoleClaimDeleteStatus501
      >,
      { id: IdentityRoleClaimDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityRoleClaimDeleteMutationKey();

  const baseOptions = identityRoleClaimDeleteMutationOptions(config) as UseMutationOptions<
    IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityRoleClaimDeleteStatus400
      | IdentityRoleClaimDeleteStatus401
      | IdentityRoleClaimDeleteStatus403
      | IdentityRoleClaimDeleteStatus404
      | IdentityRoleClaimDeleteStatus500
      | IdentityRoleClaimDeleteStatus501
    >,
    { id: IdentityRoleClaimDeletePathId },
    TContext
  >;

  return useMutation<
    IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityRoleClaimDeleteStatus400
      | IdentityRoleClaimDeleteStatus401
      | IdentityRoleClaimDeleteStatus403
      | IdentityRoleClaimDeleteStatus404
      | IdentityRoleClaimDeleteStatus500
      | IdentityRoleClaimDeleteStatus501
    >,
    { id: IdentityRoleClaimDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityRoleClaimDeleteStatus400
      | IdentityRoleClaimDeleteStatus401
      | IdentityRoleClaimDeleteStatus403
      | IdentityRoleClaimDeleteStatus404
      | IdentityRoleClaimDeleteStatus500
      | IdentityRoleClaimDeleteStatus501
    >,
    { id: IdentityRoleClaimDeletePathId },
    TContext
  >;
}
