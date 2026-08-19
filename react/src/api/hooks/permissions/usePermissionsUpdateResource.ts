/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PermissionsUpdateResourceOptions,
  PermissionsUpdateResourceStatus200,
  PermissionsUpdateResourceStatus204,
  PermissionsUpdateResourceStatus400,
  PermissionsUpdateResourceStatus401,
  PermissionsUpdateResourceStatus403,
  PermissionsUpdateResourceStatus404,
  PermissionsUpdateResourceStatus500,
  PermissionsUpdateResourceStatus501,
} from "../../models/permissions/PermissionsUpdateResource";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { permissionsUpdateResource } from "../../clients/permissions/permissionsUpdateResource";

export const permissionsUpdateResourceMutationKey = () =>
  [{ url: "/api/permission-management/permissions/resource" }] as const;

export function permissionsUpdateResourceMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
  } = {},
) {
  const mutationKey = permissionsUpdateResourceMutationKey();
  return mutationOptions<
    PermissionsUpdateResourceStatus200 | PermissionsUpdateResourceStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateResourceStatus400
      | PermissionsUpdateResourceStatus401
      | PermissionsUpdateResourceStatus403
      | PermissionsUpdateResourceStatus404
      | PermissionsUpdateResourceStatus500
      | PermissionsUpdateResourceStatus501
    >,
    PermissionsUpdateResourceOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ query, body }) => {
      const { data } = await permissionsUpdateResource({
        ...config,
        query,
        body,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/permission-management/permissions/resource}
 */
export function usePermissionsUpdateResource<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PermissionsUpdateResourceStatus200 | PermissionsUpdateResourceStatus204,
      ResponseErrorConfig<
        | PermissionsUpdateResourceStatus400
        | PermissionsUpdateResourceStatus401
        | PermissionsUpdateResourceStatus403
        | PermissionsUpdateResourceStatus404
        | PermissionsUpdateResourceStatus500
        | PermissionsUpdateResourceStatus501
      >,
      PermissionsUpdateResourceOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? permissionsUpdateResourceMutationKey();

  const baseOptions = permissionsUpdateResourceMutationOptions(config) as UseMutationOptions<
    PermissionsUpdateResourceStatus200 | PermissionsUpdateResourceStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateResourceStatus400
      | PermissionsUpdateResourceStatus401
      | PermissionsUpdateResourceStatus403
      | PermissionsUpdateResourceStatus404
      | PermissionsUpdateResourceStatus500
      | PermissionsUpdateResourceStatus501
    >,
    PermissionsUpdateResourceOptions,
    TContext
  >;

  return useMutation<
    PermissionsUpdateResourceStatus200 | PermissionsUpdateResourceStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateResourceStatus400
      | PermissionsUpdateResourceStatus401
      | PermissionsUpdateResourceStatus403
      | PermissionsUpdateResourceStatus404
      | PermissionsUpdateResourceStatus500
      | PermissionsUpdateResourceStatus501
    >,
    PermissionsUpdateResourceOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PermissionsUpdateResourceStatus200 | PermissionsUpdateResourceStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateResourceStatus400
      | PermissionsUpdateResourceStatus401
      | PermissionsUpdateResourceStatus403
      | PermissionsUpdateResourceStatus404
      | PermissionsUpdateResourceStatus500
      | PermissionsUpdateResourceStatus501
    >,
    PermissionsUpdateResourceOptions,
    TContext
  >;
}
