/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityClaimTypeDeletePathId,
  IdentityClaimTypeDeleteStatus200,
  IdentityClaimTypeDeleteStatus204,
  IdentityClaimTypeDeleteStatus400,
  IdentityClaimTypeDeleteStatus401,
  IdentityClaimTypeDeleteStatus403,
  IdentityClaimTypeDeleteStatus404,
  IdentityClaimTypeDeleteStatus500,
  IdentityClaimTypeDeleteStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityClaimTypeDelete } from "../../clients/identityClaimType/identityClaimTypeDelete.ts";

export const identityClaimTypeDeleteMutationKey = () =>
  [{ url: "/api/app/identity-claim-type/:id" }] as const;

export function identityClaimTypeDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: IdentityClaimTypeDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return identityClaimTypeDelete(id, config);
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
      { id: IdentityClaimTypeDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: IdentityClaimTypeDeletePathId },
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
    { id: IdentityClaimTypeDeletePathId },
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
    { id: IdentityClaimTypeDeletePathId },
    TContext
  >;
}
