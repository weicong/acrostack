/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PermissionsUpdateResourceData,
  PermissionsUpdateResourceQueryResourceName,
  PermissionsUpdateResourceQueryResourceKey,
  PermissionsUpdateResourceStatus200,
  PermissionsUpdateResourceStatus204,
  PermissionsUpdateResourceStatus400,
  PermissionsUpdateResourceStatus401,
  PermissionsUpdateResourceStatus403,
  PermissionsUpdateResourceStatus404,
  PermissionsUpdateResourceStatus500,
  PermissionsUpdateResourceStatus501,
} from "../../models/permissions/PermissionsUpdateResource.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { permissionsUpdateResource } from "../../clients/permissions/permissionsUpdateResource.ts";

export const permissionsUpdateResourceMutationKey = () =>
  [{ url: "/api/permission-management/permissions/resource" }] as const;

export function permissionsUpdateResourceMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<PermissionsUpdateResourceData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    {
      data?: PermissionsUpdateResourceData;
      params?: {
        resourceName?: PermissionsUpdateResourceQueryResourceName;
        resourceKey?: PermissionsUpdateResourceQueryResourceKey;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data, params }) => {
      return permissionsUpdateResource(data, params, config);
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
      {
        data?: PermissionsUpdateResourceData;
        params?: {
          resourceName?: PermissionsUpdateResourceQueryResourceName;
          resourceKey?: PermissionsUpdateResourceQueryResourceKey;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PermissionsUpdateResourceData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    {
      data?: PermissionsUpdateResourceData;
      params?: {
        resourceName?: PermissionsUpdateResourceQueryResourceName;
        resourceKey?: PermissionsUpdateResourceQueryResourceKey;
      };
    },
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
    {
      data?: PermissionsUpdateResourceData;
      params?: {
        resourceName?: PermissionsUpdateResourceQueryResourceName;
        resourceKey?: PermissionsUpdateResourceQueryResourceKey;
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
    PermissionsUpdateResourceStatus200 | PermissionsUpdateResourceStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateResourceStatus400
      | PermissionsUpdateResourceStatus401
      | PermissionsUpdateResourceStatus403
      | PermissionsUpdateResourceStatus404
      | PermissionsUpdateResourceStatus500
      | PermissionsUpdateResourceStatus501
    >,
    {
      data?: PermissionsUpdateResourceData;
      params?: {
        resourceName?: PermissionsUpdateResourceQueryResourceName;
        resourceKey?: PermissionsUpdateResourceQueryResourceKey;
      };
    },
    TContext
  >;
}
