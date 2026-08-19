/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PermissionsDeleteResourceOptions,
  PermissionsDeleteResourceStatus200,
  PermissionsDeleteResourceStatus204,
  PermissionsDeleteResourceStatus400,
  PermissionsDeleteResourceStatus401,
  PermissionsDeleteResourceStatus403,
  PermissionsDeleteResourceStatus404,
  PermissionsDeleteResourceStatus500,
  PermissionsDeleteResourceStatus501,
} from "../../models/permissions/PermissionsDeleteResource";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { permissionsDeleteResource } from "../../clients/permissions/permissionsDeleteResource";

export const permissionsDeleteResourceMutationKey = () =>
  [{ url: "/api/permission-management/permissions/resource" }] as const;

export function permissionsDeleteResourceMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = permissionsDeleteResourceMutationKey();
  return mutationOptions<
    PermissionsDeleteResourceStatus200 | PermissionsDeleteResourceStatus204,
    ResponseErrorConfig<
      | PermissionsDeleteResourceStatus400
      | PermissionsDeleteResourceStatus401
      | PermissionsDeleteResourceStatus403
      | PermissionsDeleteResourceStatus404
      | PermissionsDeleteResourceStatus500
      | PermissionsDeleteResourceStatus501
    >,
    PermissionsDeleteResourceOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ query }) => {
      const { data } = await permissionsDeleteResource({ ...config, query, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/permission-management/permissions/resource}
 */
export function usePermissionsDeleteResource<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PermissionsDeleteResourceStatus200 | PermissionsDeleteResourceStatus204,
      ResponseErrorConfig<
        | PermissionsDeleteResourceStatus400
        | PermissionsDeleteResourceStatus401
        | PermissionsDeleteResourceStatus403
        | PermissionsDeleteResourceStatus404
        | PermissionsDeleteResourceStatus500
        | PermissionsDeleteResourceStatus501
      >,
      PermissionsDeleteResourceOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? permissionsDeleteResourceMutationKey();

  const baseOptions = permissionsDeleteResourceMutationOptions(config) as UseMutationOptions<
    PermissionsDeleteResourceStatus200 | PermissionsDeleteResourceStatus204,
    ResponseErrorConfig<
      | PermissionsDeleteResourceStatus400
      | PermissionsDeleteResourceStatus401
      | PermissionsDeleteResourceStatus403
      | PermissionsDeleteResourceStatus404
      | PermissionsDeleteResourceStatus500
      | PermissionsDeleteResourceStatus501
    >,
    PermissionsDeleteResourceOptions,
    TContext
  >;

  return useMutation<
    PermissionsDeleteResourceStatus200 | PermissionsDeleteResourceStatus204,
    ResponseErrorConfig<
      | PermissionsDeleteResourceStatus400
      | PermissionsDeleteResourceStatus401
      | PermissionsDeleteResourceStatus403
      | PermissionsDeleteResourceStatus404
      | PermissionsDeleteResourceStatus500
      | PermissionsDeleteResourceStatus501
    >,
    PermissionsDeleteResourceOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PermissionsDeleteResourceStatus200 | PermissionsDeleteResourceStatus204,
    ResponseErrorConfig<
      | PermissionsDeleteResourceStatus400
      | PermissionsDeleteResourceStatus401
      | PermissionsDeleteResourceStatus403
      | PermissionsDeleteResourceStatus404
      | PermissionsDeleteResourceStatus500
      | PermissionsDeleteResourceStatus501
    >,
    PermissionsDeleteResourceOptions,
    TContext
  >;
}
