/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FeaturesUpdateData,
  FeaturesUpdateQueryProviderName,
  FeaturesUpdateQueryProviderKey,
  FeaturesUpdateStatus200,
  FeaturesUpdateStatus204,
  FeaturesUpdateStatus400,
  FeaturesUpdateStatus401,
  FeaturesUpdateStatus403,
  FeaturesUpdateStatus404,
  FeaturesUpdateStatus500,
  FeaturesUpdateStatus501,
} from "../../models/features/FeaturesUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { featuresUpdate } from "../../clients/features/featuresUpdate.ts";

export const featuresUpdateMutationKey = () =>
  [{ url: "/api/feature-management/features" }] as const;

export function featuresUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<FeaturesUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = featuresUpdateMutationKey();
  return mutationOptions<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    {
      data?: FeaturesUpdateData;
      params?: {
        providerName?: FeaturesUpdateQueryProviderName;
        providerKey?: FeaturesUpdateQueryProviderKey;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data, params }) => {
      return featuresUpdate(data, params, config);
    },
  });
}

/**
 * {@link /api/feature-management/features}
 */
export function useFeaturesUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
      ResponseErrorConfig<
        | FeaturesUpdateStatus400
        | FeaturesUpdateStatus401
        | FeaturesUpdateStatus403
        | FeaturesUpdateStatus404
        | FeaturesUpdateStatus500
        | FeaturesUpdateStatus501
      >,
      {
        data?: FeaturesUpdateData;
        params?: {
          providerName?: FeaturesUpdateQueryProviderName;
          providerKey?: FeaturesUpdateQueryProviderKey;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<FeaturesUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? featuresUpdateMutationKey();

  const baseOptions = featuresUpdateMutationOptions(config) as UseMutationOptions<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    {
      data?: FeaturesUpdateData;
      params?: {
        providerName?: FeaturesUpdateQueryProviderName;
        providerKey?: FeaturesUpdateQueryProviderKey;
      };
    },
    TContext
  >;

  return useMutation<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    {
      data?: FeaturesUpdateData;
      params?: {
        providerName?: FeaturesUpdateQueryProviderName;
        providerKey?: FeaturesUpdateQueryProviderKey;
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
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    {
      data?: FeaturesUpdateData;
      params?: {
        providerName?: FeaturesUpdateQueryProviderName;
        providerKey?: FeaturesUpdateQueryProviderKey;
      };
    },
    TContext
  >;
}
