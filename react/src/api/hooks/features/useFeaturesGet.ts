/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FeaturesGetQueryProviderName,
  FeaturesGetQueryProviderKey,
  FeaturesGetStatus200,
  FeaturesGetStatus400,
  FeaturesGetStatus401,
  FeaturesGetStatus403,
  FeaturesGetStatus404,
  FeaturesGetStatus500,
  FeaturesGetStatus501,
} from "../../models/features/FeaturesGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { featuresGet } from "../../clients/features/featuresGet.ts";

export const featuresGetQueryKey = (params?: {
  providerName?: FeaturesGetQueryProviderName;
  providerKey?: FeaturesGetQueryProviderKey;
}) => [{ url: "/api/feature-management/features" }, ...(params ? [params] : [])] as const;

type FeaturesGetQueryKey = ReturnType<typeof featuresGetQueryKey>;

export function featuresGetQueryOptions(
  params?: {
    providerName?: FeaturesGetQueryProviderName;
    providerKey?: FeaturesGetQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = featuresGetQueryKey(params);
  return queryOptions<
    FeaturesGetStatus200,
    ResponseErrorConfig<
      | FeaturesGetStatus400
      | FeaturesGetStatus401
      | FeaturesGetStatus403
      | FeaturesGetStatus404
      | FeaturesGetStatus500
      | FeaturesGetStatus501
    >,
    FeaturesGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return featuresGet(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/feature-management/features}
 */
export function useFeaturesGet<
  TData = FeaturesGetStatus200,
  TQueryData = FeaturesGetStatus200,
  TQueryKey extends QueryKey = FeaturesGetQueryKey,
>(
  params?: {
    providerName?: FeaturesGetQueryProviderName;
    providerKey?: FeaturesGetQueryProviderKey;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        FeaturesGetStatus200,
        ResponseErrorConfig<
          | FeaturesGetStatus400
          | FeaturesGetStatus401
          | FeaturesGetStatus403
          | FeaturesGetStatus404
          | FeaturesGetStatus500
          | FeaturesGetStatus501
        >,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? featuresGetQueryKey(params);

  const query = useQuery(
    {
      ...featuresGetQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | FeaturesGetStatus400
      | FeaturesGetStatus401
      | FeaturesGetStatus403
      | FeaturesGetStatus404
      | FeaturesGetStatus500
      | FeaturesGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
