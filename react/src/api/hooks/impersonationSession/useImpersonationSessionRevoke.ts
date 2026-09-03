/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ImpersonationSessionRevokeOptions,
  ImpersonationSessionRevokeStatus200,
  ImpersonationSessionRevokeStatus204,
  ImpersonationSessionRevokeStatus400,
  ImpersonationSessionRevokeStatus401,
  ImpersonationSessionRevokeStatus403,
  ImpersonationSessionRevokeStatus404,
  ImpersonationSessionRevokeStatus500,
  ImpersonationSessionRevokeStatus501,
} from "../../models/impersonationSession/ImpersonationSessionRevoke";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { impersonationSessionRevoke } from "../../clients/impersonationSession/impersonationSessionRevoke";

export const impersonationSessionRevokeMutationKey = () =>
  [{ url: "/api/app/impersonation-session/:id/revoke" }] as const;

export function impersonationSessionRevokeMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = impersonationSessionRevokeMutationKey();
  return mutationOptions<
    ImpersonationSessionRevokeStatus200 | ImpersonationSessionRevokeStatus204,
    ResponseErrorConfig<
      | ImpersonationSessionRevokeStatus400
      | ImpersonationSessionRevokeStatus401
      | ImpersonationSessionRevokeStatus403
      | ImpersonationSessionRevokeStatus404
      | ImpersonationSessionRevokeStatus500
      | ImpersonationSessionRevokeStatus501
    >,
    ImpersonationSessionRevokeOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await impersonationSessionRevoke({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/impersonation-session/:id/revoke}
 */
export function useImpersonationSessionRevoke<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ImpersonationSessionRevokeStatus200 | ImpersonationSessionRevokeStatus204,
      ResponseErrorConfig<
        | ImpersonationSessionRevokeStatus400
        | ImpersonationSessionRevokeStatus401
        | ImpersonationSessionRevokeStatus403
        | ImpersonationSessionRevokeStatus404
        | ImpersonationSessionRevokeStatus500
        | ImpersonationSessionRevokeStatus501
      >,
      ImpersonationSessionRevokeOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? impersonationSessionRevokeMutationKey();

  const baseOptions = impersonationSessionRevokeMutationOptions(config) as UseMutationOptions<
    ImpersonationSessionRevokeStatus200 | ImpersonationSessionRevokeStatus204,
    ResponseErrorConfig<
      | ImpersonationSessionRevokeStatus400
      | ImpersonationSessionRevokeStatus401
      | ImpersonationSessionRevokeStatus403
      | ImpersonationSessionRevokeStatus404
      | ImpersonationSessionRevokeStatus500
      | ImpersonationSessionRevokeStatus501
    >,
    ImpersonationSessionRevokeOptions,
    TContext
  >;

  return useMutation<
    ImpersonationSessionRevokeStatus200 | ImpersonationSessionRevokeStatus204,
    ResponseErrorConfig<
      | ImpersonationSessionRevokeStatus400
      | ImpersonationSessionRevokeStatus401
      | ImpersonationSessionRevokeStatus403
      | ImpersonationSessionRevokeStatus404
      | ImpersonationSessionRevokeStatus500
      | ImpersonationSessionRevokeStatus501
    >,
    ImpersonationSessionRevokeOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ImpersonationSessionRevokeStatus200 | ImpersonationSessionRevokeStatus204,
    ResponseErrorConfig<
      | ImpersonationSessionRevokeStatus400
      | ImpersonationSessionRevokeStatus401
      | ImpersonationSessionRevokeStatus403
      | ImpersonationSessionRevokeStatus404
      | ImpersonationSessionRevokeStatus500
      | ImpersonationSessionRevokeStatus501
    >,
    ImpersonationSessionRevokeOptions,
    TContext
  >;
}
