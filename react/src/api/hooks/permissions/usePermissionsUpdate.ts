/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PermissionsUpdateData,
  PermissionsUpdateQueryProviderName,
  PermissionsUpdateQueryProviderKey,
  PermissionsUpdateStatus200,
  PermissionsUpdateStatus204,
  PermissionsUpdateStatus400,
  PermissionsUpdateStatus401,
  PermissionsUpdateStatus403,
  PermissionsUpdateStatus404,
  PermissionsUpdateStatus500,
  PermissionsUpdateStatus501,
} from "../../models/permissions/PermissionsUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { permissionsUpdate } from "../../clients/permissions/permissionsUpdate.ts";

export const permissionsUpdateMutationKey = () =>
  [{ url: "/api/permission-management/permissions" }] as const;

export function permissionsUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<PermissionsUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = permissionsUpdateMutationKey();
  return mutationOptions<
    PermissionsUpdateStatus200 | PermissionsUpdateStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateStatus400
      | PermissionsUpdateStatus401
      | PermissionsUpdateStatus403
      | PermissionsUpdateStatus404
      | PermissionsUpdateStatus500
      | PermissionsUpdateStatus501
    >,
    {
      data?: PermissionsUpdateData;
      params?: {
        providerName?: PermissionsUpdateQueryProviderName;
        providerKey?: PermissionsUpdateQueryProviderKey;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data, params }) => {
      return permissionsUpdate(data, params, config);
    },
  });
}

/**
 * {@link /api/permission-management/permissions}
 */
export function usePermissionsUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PermissionsUpdateStatus200 | PermissionsUpdateStatus204,
      ResponseErrorConfig<
        | PermissionsUpdateStatus400
        | PermissionsUpdateStatus401
        | PermissionsUpdateStatus403
        | PermissionsUpdateStatus404
        | PermissionsUpdateStatus500
        | PermissionsUpdateStatus501
      >,
      {
        data?: PermissionsUpdateData;
        params?: {
          providerName?: PermissionsUpdateQueryProviderName;
          providerKey?: PermissionsUpdateQueryProviderKey;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PermissionsUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? permissionsUpdateMutationKey();

  const baseOptions = permissionsUpdateMutationOptions(config) as UseMutationOptions<
    PermissionsUpdateStatus200 | PermissionsUpdateStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateStatus400
      | PermissionsUpdateStatus401
      | PermissionsUpdateStatus403
      | PermissionsUpdateStatus404
      | PermissionsUpdateStatus500
      | PermissionsUpdateStatus501
    >,
    {
      data?: PermissionsUpdateData;
      params?: {
        providerName?: PermissionsUpdateQueryProviderName;
        providerKey?: PermissionsUpdateQueryProviderKey;
      };
    },
    TContext
  >;

  return useMutation<
    PermissionsUpdateStatus200 | PermissionsUpdateStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateStatus400
      | PermissionsUpdateStatus401
      | PermissionsUpdateStatus403
      | PermissionsUpdateStatus404
      | PermissionsUpdateStatus500
      | PermissionsUpdateStatus501
    >,
    {
      data?: PermissionsUpdateData;
      params?: {
        providerName?: PermissionsUpdateQueryProviderName;
        providerKey?: PermissionsUpdateQueryProviderKey;
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
    PermissionsUpdateStatus200 | PermissionsUpdateStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateStatus400
      | PermissionsUpdateStatus401
      | PermissionsUpdateStatus403
      | PermissionsUpdateStatus404
      | PermissionsUpdateStatus500
      | PermissionsUpdateStatus501
    >,
    {
      data?: PermissionsUpdateData;
      params?: {
        providerName?: PermissionsUpdateQueryProviderName;
        providerKey?: PermissionsUpdateQueryProviderKey;
      };
    },
    TContext
  >;
}
