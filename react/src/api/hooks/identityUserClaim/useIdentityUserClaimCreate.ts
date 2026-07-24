/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  IdentityUserClaimCreateData,
  IdentityUserClaimCreateStatus200,
  IdentityUserClaimCreateStatus400,
  IdentityUserClaimCreateStatus401,
  IdentityUserClaimCreateStatus403,
  IdentityUserClaimCreateStatus404,
  IdentityUserClaimCreateStatus500,
  IdentityUserClaimCreateStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { identityUserClaimCreate } from "../../clients/identityUserClaim/identityUserClaimCreate.ts";

export const identityUserClaimCreateMutationKey = () =>
  [{ url: "/api/app/identity-user-claim" }] as const;

export function identityUserClaimCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<IdentityUserClaimCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = identityUserClaimCreateMutationKey();
  return mutationOptions<
    IdentityUserClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimCreateStatus400
      | IdentityUserClaimCreateStatus401
      | IdentityUserClaimCreateStatus403
      | IdentityUserClaimCreateStatus404
      | IdentityUserClaimCreateStatus500
      | IdentityUserClaimCreateStatus501
    >,
    { data?: IdentityUserClaimCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return identityUserClaimCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/identity-user-claim}
 */
export function useIdentityUserClaimCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      IdentityUserClaimCreateStatus200,
      ResponseErrorConfig<
        | IdentityUserClaimCreateStatus400
        | IdentityUserClaimCreateStatus401
        | IdentityUserClaimCreateStatus403
        | IdentityUserClaimCreateStatus404
        | IdentityUserClaimCreateStatus500
        | IdentityUserClaimCreateStatus501
      >,
      { data?: IdentityUserClaimCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<IdentityUserClaimCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? identityUserClaimCreateMutationKey();

  const baseOptions = identityUserClaimCreateMutationOptions(config) as UseMutationOptions<
    IdentityUserClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimCreateStatus400
      | IdentityUserClaimCreateStatus401
      | IdentityUserClaimCreateStatus403
      | IdentityUserClaimCreateStatus404
      | IdentityUserClaimCreateStatus500
      | IdentityUserClaimCreateStatus501
    >,
    { data?: IdentityUserClaimCreateData },
    TContext
  >;

  return useMutation<
    IdentityUserClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimCreateStatus400
      | IdentityUserClaimCreateStatus401
      | IdentityUserClaimCreateStatus403
      | IdentityUserClaimCreateStatus404
      | IdentityUserClaimCreateStatus500
      | IdentityUserClaimCreateStatus501
    >,
    { data?: IdentityUserClaimCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    IdentityUserClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimCreateStatus400
      | IdentityUserClaimCreateStatus401
      | IdentityUserClaimCreateStatus403
      | IdentityUserClaimCreateStatus404
      | IdentityUserClaimCreateStatus500
      | IdentityUserClaimCreateStatus501
    >,
    { data?: IdentityUserClaimCreateData },
    TContext
  >;
}
