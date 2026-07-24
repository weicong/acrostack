/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityRoleClaimCreateData,
  IdentityRoleClaimCreateStatus200,
  IdentityRoleClaimCreateStatus400,
  IdentityRoleClaimCreateStatus401,
  IdentityRoleClaimCreateStatus403,
  IdentityRoleClaimCreateStatus404,
  IdentityRoleClaimCreateStatus500,
  IdentityRoleClaimCreateStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityRoleClaimCreate } from "../../clients/identityRoleClaim/identityRoleClaimCreate.ts";

export const identityRoleClaimCreateMutationKey = () =>
  [{ url: "/api/app/identity-role-claim" }] as const;

export function identityRoleClaimCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<IdentityRoleClaimCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = identityRoleClaimCreateMutationKey();
  return mutationOptions<
    IdentityRoleClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimCreateStatus400
      | IdentityRoleClaimCreateStatus401
      | IdentityRoleClaimCreateStatus403
      | IdentityRoleClaimCreateStatus404
      | IdentityRoleClaimCreateStatus500
      | IdentityRoleClaimCreateStatus501
    >,
    { data?: IdentityRoleClaimCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return identityRoleClaimCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/identity-role-claim}
 */
export function useIdentityRoleClaimCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityRoleClaimCreateStatus200,
      ResponseErrorConfig<
        | IdentityRoleClaimCreateStatus400
        | IdentityRoleClaimCreateStatus401
        | IdentityRoleClaimCreateStatus403
        | IdentityRoleClaimCreateStatus404
        | IdentityRoleClaimCreateStatus500
        | IdentityRoleClaimCreateStatus501
      >,
      { data?: IdentityRoleClaimCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<IdentityRoleClaimCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityRoleClaimCreateMutationKey();

  const baseOptions = identityRoleClaimCreateMutationOptions(config) as UseMutationOptions<
    IdentityRoleClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimCreateStatus400
      | IdentityRoleClaimCreateStatus401
      | IdentityRoleClaimCreateStatus403
      | IdentityRoleClaimCreateStatus404
      | IdentityRoleClaimCreateStatus500
      | IdentityRoleClaimCreateStatus501
    >,
    { data?: IdentityRoleClaimCreateData },
    TContext
  >;

  return useMutation<
    IdentityRoleClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimCreateStatus400
      | IdentityRoleClaimCreateStatus401
      | IdentityRoleClaimCreateStatus403
      | IdentityRoleClaimCreateStatus404
      | IdentityRoleClaimCreateStatus500
      | IdentityRoleClaimCreateStatus501
    >,
    { data?: IdentityRoleClaimCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityRoleClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimCreateStatus400
      | IdentityRoleClaimCreateStatus401
      | IdentityRoleClaimCreateStatus403
      | IdentityRoleClaimCreateStatus404
      | IdentityRoleClaimCreateStatus500
      | IdentityRoleClaimCreateStatus501
    >,
    { data?: IdentityRoleClaimCreateData },
    TContext
  >;
}
