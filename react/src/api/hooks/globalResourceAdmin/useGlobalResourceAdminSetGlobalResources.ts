/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  GlobalResourceAdminSetGlobalResourcesData,
  GlobalResourceAdminSetGlobalResourcesStatus200,
  GlobalResourceAdminSetGlobalResourcesStatus204,
  GlobalResourceAdminSetGlobalResourcesStatus400,
  GlobalResourceAdminSetGlobalResourcesStatus401,
  GlobalResourceAdminSetGlobalResourcesStatus403,
  GlobalResourceAdminSetGlobalResourcesStatus404,
  GlobalResourceAdminSetGlobalResourcesStatus500,
  GlobalResourceAdminSetGlobalResourcesStatus501,
} from "../../models/globalResourceAdmin/GlobalResourceAdminSetGlobalResources.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { globalResourceAdminSetGlobalResources } from "../../clients/globalResourceAdmin/globalResourceAdminSetGlobalResources.ts";

export const globalResourceAdminSetGlobalResourcesMutationKey = () =>
  [{ url: "/api/cms-kit-admin/global-resources" }] as const;

export function globalResourceAdminSetGlobalResourcesMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<GlobalResourceAdminSetGlobalResourcesData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = globalResourceAdminSetGlobalResourcesMutationKey();
  return mutationOptions<
    GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204,
    ResponseErrorConfig<
      | GlobalResourceAdminSetGlobalResourcesStatus400
      | GlobalResourceAdminSetGlobalResourcesStatus401
      | GlobalResourceAdminSetGlobalResourcesStatus403
      | GlobalResourceAdminSetGlobalResourcesStatus404
      | GlobalResourceAdminSetGlobalResourcesStatus500
      | GlobalResourceAdminSetGlobalResourcesStatus501
    >,
    { data?: GlobalResourceAdminSetGlobalResourcesData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return globalResourceAdminSetGlobalResources(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export function useGlobalResourceAdminSetGlobalResources<TContext>(
  options: {
    mutation?: UseMutationOptions<
      | GlobalResourceAdminSetGlobalResourcesStatus200
      | GlobalResourceAdminSetGlobalResourcesStatus204,
      ResponseErrorConfig<
        | GlobalResourceAdminSetGlobalResourcesStatus400
        | GlobalResourceAdminSetGlobalResourcesStatus401
        | GlobalResourceAdminSetGlobalResourcesStatus403
        | GlobalResourceAdminSetGlobalResourcesStatus404
        | GlobalResourceAdminSetGlobalResourcesStatus500
        | GlobalResourceAdminSetGlobalResourcesStatus501
      >,
      { data?: GlobalResourceAdminSetGlobalResourcesData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<GlobalResourceAdminSetGlobalResourcesData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey =
    mutationOptions.mutationKey ?? globalResourceAdminSetGlobalResourcesMutationKey();

  const baseOptions = globalResourceAdminSetGlobalResourcesMutationOptions(
    config,
  ) as UseMutationOptions<
    GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204,
    ResponseErrorConfig<
      | GlobalResourceAdminSetGlobalResourcesStatus400
      | GlobalResourceAdminSetGlobalResourcesStatus401
      | GlobalResourceAdminSetGlobalResourcesStatus403
      | GlobalResourceAdminSetGlobalResourcesStatus404
      | GlobalResourceAdminSetGlobalResourcesStatus500
      | GlobalResourceAdminSetGlobalResourcesStatus501
    >,
    { data?: GlobalResourceAdminSetGlobalResourcesData },
    TContext
  >;

  return useMutation<
    GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204,
    ResponseErrorConfig<
      | GlobalResourceAdminSetGlobalResourcesStatus400
      | GlobalResourceAdminSetGlobalResourcesStatus401
      | GlobalResourceAdminSetGlobalResourcesStatus403
      | GlobalResourceAdminSetGlobalResourcesStatus404
      | GlobalResourceAdminSetGlobalResourcesStatus500
      | GlobalResourceAdminSetGlobalResourcesStatus501
    >,
    { data?: GlobalResourceAdminSetGlobalResourcesData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204,
    ResponseErrorConfig<
      | GlobalResourceAdminSetGlobalResourcesStatus400
      | GlobalResourceAdminSetGlobalResourcesStatus401
      | GlobalResourceAdminSetGlobalResourcesStatus403
      | GlobalResourceAdminSetGlobalResourcesStatus404
      | GlobalResourceAdminSetGlobalResourcesStatus500
      | GlobalResourceAdminSetGlobalResourcesStatus501
    >,
    { data?: GlobalResourceAdminSetGlobalResourcesData },
    TContext
  >;
}
