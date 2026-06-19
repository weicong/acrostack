/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FeaturesDeleteQueryProviderName,
  FeaturesDeleteQueryProviderKey,
  FeaturesDeleteStatus200,
  FeaturesDeleteStatus204,
  FeaturesDeleteStatus400,
  FeaturesDeleteStatus401,
  FeaturesDeleteStatus403,
  FeaturesDeleteStatus404,
  FeaturesDeleteStatus500,
  FeaturesDeleteStatus501,
} from "../../models/features/FeaturesDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { featuresDelete } from "../../clients/features/featuresDelete.ts";

export const featuresDeleteMutationKey = () =>
  [{ url: "/api/feature-management/features" }] as const;

export function featuresDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = featuresDeleteMutationKey();
  return mutationOptions<
    FeaturesDeleteStatus200 | FeaturesDeleteStatus204,
    ResponseErrorConfig<
      | FeaturesDeleteStatus400
      | FeaturesDeleteStatus401
      | FeaturesDeleteStatus403
      | FeaturesDeleteStatus404
      | FeaturesDeleteStatus500
      | FeaturesDeleteStatus501
    >,
    {
      params?: {
        providerName?: FeaturesDeleteQueryProviderName;
        providerKey?: FeaturesDeleteQueryProviderKey;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ params }) => {
      return featuresDelete(params, config);
    },
  });
}

/**
 * {@link /api/feature-management/features}
 */
export function useFeaturesDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FeaturesDeleteStatus200 | FeaturesDeleteStatus204,
      ResponseErrorConfig<
        | FeaturesDeleteStatus400
        | FeaturesDeleteStatus401
        | FeaturesDeleteStatus403
        | FeaturesDeleteStatus404
        | FeaturesDeleteStatus500
        | FeaturesDeleteStatus501
      >,
      {
        params?: {
          providerName?: FeaturesDeleteQueryProviderName;
          providerKey?: FeaturesDeleteQueryProviderKey;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? featuresDeleteMutationKey();

  const baseOptions = featuresDeleteMutationOptions(config) as UseMutationOptions<
    FeaturesDeleteStatus200 | FeaturesDeleteStatus204,
    ResponseErrorConfig<
      | FeaturesDeleteStatus400
      | FeaturesDeleteStatus401
      | FeaturesDeleteStatus403
      | FeaturesDeleteStatus404
      | FeaturesDeleteStatus500
      | FeaturesDeleteStatus501
    >,
    {
      params?: {
        providerName?: FeaturesDeleteQueryProviderName;
        providerKey?: FeaturesDeleteQueryProviderKey;
      };
    },
    TContext
  >;

  return useMutation<
    FeaturesDeleteStatus200 | FeaturesDeleteStatus204,
    ResponseErrorConfig<
      | FeaturesDeleteStatus400
      | FeaturesDeleteStatus401
      | FeaturesDeleteStatus403
      | FeaturesDeleteStatus404
      | FeaturesDeleteStatus500
      | FeaturesDeleteStatus501
    >,
    {
      params?: {
        providerName?: FeaturesDeleteQueryProviderName;
        providerKey?: FeaturesDeleteQueryProviderKey;
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
    FeaturesDeleteStatus200 | FeaturesDeleteStatus204,
    ResponseErrorConfig<
      | FeaturesDeleteStatus400
      | FeaturesDeleteStatus401
      | FeaturesDeleteStatus403
      | FeaturesDeleteStatus404
      | FeaturesDeleteStatus500
      | FeaturesDeleteStatus501
    >,
    {
      params?: {
        providerName?: FeaturesDeleteQueryProviderName;
        providerKey?: FeaturesDeleteQueryProviderKey;
      };
    },
    TContext
  >;
}
