/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PermissionsDeleteResourceQueryResourceName,
  PermissionsDeleteResourceQueryResourceKey,
  PermissionsDeleteResourceQueryProviderName,
  PermissionsDeleteResourceQueryProviderKey,
  PermissionsDeleteResourceStatus200,
  PermissionsDeleteResourceStatus204,
  PermissionsDeleteResourceStatus400,
  PermissionsDeleteResourceStatus401,
  PermissionsDeleteResourceStatus403,
  PermissionsDeleteResourceStatus404,
  PermissionsDeleteResourceStatus500,
  PermissionsDeleteResourceStatus501,
} from "../../models/permissions/PermissionsDeleteResource.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { permissionsDeleteResource } from "../../clients/permissions/permissionsDeleteResource.ts";

export const permissionsDeleteResourceMutationKey = () =>
  [{ url: "/api/permission-management/permissions/resource" }] as const;

export function permissionsDeleteResourceMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    {
      params?: {
        resourceName?: PermissionsDeleteResourceQueryResourceName;
        resourceKey?: PermissionsDeleteResourceQueryResourceKey;
        providerName?: PermissionsDeleteResourceQueryProviderName;
        providerKey?: PermissionsDeleteResourceQueryProviderKey;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ params }) => {
      return permissionsDeleteResource(params, config);
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
      {
        params?: {
          resourceName?: PermissionsDeleteResourceQueryResourceName;
          resourceKey?: PermissionsDeleteResourceQueryResourceKey;
          providerName?: PermissionsDeleteResourceQueryProviderName;
          providerKey?: PermissionsDeleteResourceQueryProviderKey;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    {
      params?: {
        resourceName?: PermissionsDeleteResourceQueryResourceName;
        resourceKey?: PermissionsDeleteResourceQueryResourceKey;
        providerName?: PermissionsDeleteResourceQueryProviderName;
        providerKey?: PermissionsDeleteResourceQueryProviderKey;
      };
    },
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
    {
      params?: {
        resourceName?: PermissionsDeleteResourceQueryResourceName;
        resourceKey?: PermissionsDeleteResourceQueryResourceKey;
        providerName?: PermissionsDeleteResourceQueryProviderName;
        providerKey?: PermissionsDeleteResourceQueryProviderKey;
      };
    },
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
    {
      params?: {
        resourceName?: PermissionsDeleteResourceQueryResourceName;
        resourceKey?: PermissionsDeleteResourceQueryResourceKey;
        providerName?: PermissionsDeleteResourceQueryProviderName;
        providerKey?: PermissionsDeleteResourceQueryProviderKey;
      };
    },
    TContext
  >;
}
