/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityUserClaimDeletePathId,
  IdentityUserClaimDeleteStatus200,
  IdentityUserClaimDeleteStatus204,
  IdentityUserClaimDeleteStatus400,
  IdentityUserClaimDeleteStatus401,
  IdentityUserClaimDeleteStatus403,
  IdentityUserClaimDeleteStatus404,
  IdentityUserClaimDeleteStatus500,
  IdentityUserClaimDeleteStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityUserClaimDelete } from "../../clients/identityUserClaim/identityUserClaimDelete.ts";

export const identityUserClaimDeleteMutationKey = () =>
  [{ url: "/api/app/identity-user-claim/:id" }] as const;

export function identityUserClaimDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = identityUserClaimDeleteMutationKey();
  return mutationOptions<
    IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityUserClaimDeleteStatus400
      | IdentityUserClaimDeleteStatus401
      | IdentityUserClaimDeleteStatus403
      | IdentityUserClaimDeleteStatus404
      | IdentityUserClaimDeleteStatus500
      | IdentityUserClaimDeleteStatus501
    >,
    { id: IdentityUserClaimDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return identityUserClaimDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export function useIdentityUserClaimDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204,
      ResponseErrorConfig<
        | IdentityUserClaimDeleteStatus400
        | IdentityUserClaimDeleteStatus401
        | IdentityUserClaimDeleteStatus403
        | IdentityUserClaimDeleteStatus404
        | IdentityUserClaimDeleteStatus500
        | IdentityUserClaimDeleteStatus501
      >,
      { id: IdentityUserClaimDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityUserClaimDeleteMutationKey();

  const baseOptions = identityUserClaimDeleteMutationOptions(config) as UseMutationOptions<
    IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityUserClaimDeleteStatus400
      | IdentityUserClaimDeleteStatus401
      | IdentityUserClaimDeleteStatus403
      | IdentityUserClaimDeleteStatus404
      | IdentityUserClaimDeleteStatus500
      | IdentityUserClaimDeleteStatus501
    >,
    { id: IdentityUserClaimDeletePathId },
    TContext
  >;

  return useMutation<
    IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityUserClaimDeleteStatus400
      | IdentityUserClaimDeleteStatus401
      | IdentityUserClaimDeleteStatus403
      | IdentityUserClaimDeleteStatus404
      | IdentityUserClaimDeleteStatus500
      | IdentityUserClaimDeleteStatus501
    >,
    { id: IdentityUserClaimDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityUserClaimDeleteStatus400
      | IdentityUserClaimDeleteStatus401
      | IdentityUserClaimDeleteStatus403
      | IdentityUserClaimDeleteStatus404
      | IdentityUserClaimDeleteStatus500
      | IdentityUserClaimDeleteStatus501
    >,
    { id: IdentityUserClaimDeletePathId },
    TContext
  >;
}
