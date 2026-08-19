/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  RoleCreateOptions,
  RoleCreateStatus200,
  RoleCreateStatus400,
  RoleCreateStatus401,
  RoleCreateStatus403,
  RoleCreateStatus404,
  RoleCreateStatus500,
  RoleCreateStatus501,
} from "../../models/role/RoleCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { roleCreate } from "../../clients/role/roleCreate";

export const roleCreateMutationKey = () => [{ url: "/api/identity/roles" }] as const;

export function roleCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = roleCreateMutationKey();
  return mutationOptions<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    RoleCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await roleCreate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/identity/roles}
 */
export function useRoleCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      RoleCreateStatus200,
      ResponseErrorConfig<
        | RoleCreateStatus400
        | RoleCreateStatus401
        | RoleCreateStatus403
        | RoleCreateStatus404
        | RoleCreateStatus500
        | RoleCreateStatus501
      >,
      RoleCreateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? roleCreateMutationKey();

  const baseOptions = roleCreateMutationOptions(config) as UseMutationOptions<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    RoleCreateOptions,
    TContext
  >;

  return useMutation<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    RoleCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    RoleCreateOptions,
    TContext
  >;
}
