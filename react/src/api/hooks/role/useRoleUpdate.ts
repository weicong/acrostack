/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  RoleUpdateOptions,
  RoleUpdateStatus200,
  RoleUpdateStatus400,
  RoleUpdateStatus401,
  RoleUpdateStatus403,
  RoleUpdateStatus404,
  RoleUpdateStatus500,
  RoleUpdateStatus501,
} from "../../models/role/RoleUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { roleUpdate } from "../../clients/role/roleUpdate";

export const roleUpdateMutationKey = () => [{ url: "/api/identity/roles/:id" }] as const;

export function roleUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = roleUpdateMutationKey();
  return mutationOptions<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    RoleUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await roleUpdate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/identity/roles/:id}
 */
export function useRoleUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      RoleUpdateStatus200,
      ResponseErrorConfig<
        | RoleUpdateStatus400
        | RoleUpdateStatus401
        | RoleUpdateStatus403
        | RoleUpdateStatus404
        | RoleUpdateStatus500
        | RoleUpdateStatus501
      >,
      RoleUpdateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? roleUpdateMutationKey();

  const baseOptions = roleUpdateMutationOptions(config) as UseMutationOptions<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    RoleUpdateOptions,
    TContext
  >;

  return useMutation<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    RoleUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    RoleUpdateOptions,
    TContext
  >;
}
