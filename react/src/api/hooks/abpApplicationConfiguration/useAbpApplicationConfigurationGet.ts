/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AbpApplicationConfigurationGetQueryIncludeLocalizationResources,
  AbpApplicationConfigurationGetStatus200,
  AbpApplicationConfigurationGetStatus400,
  AbpApplicationConfigurationGetStatus401,
  AbpApplicationConfigurationGetStatus403,
  AbpApplicationConfigurationGetStatus404,
  AbpApplicationConfigurationGetStatus500,
  AbpApplicationConfigurationGetStatus501,
} from "../../models/abpApplicationConfiguration/AbpApplicationConfigurationGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { abpApplicationConfigurationGet } from "../../clients/abpApplicationConfiguration/abpApplicationConfigurationGet.ts";

export const abpApplicationConfigurationGetQueryKey = (params?: {
  IncludeLocalizationResources?: AbpApplicationConfigurationGetQueryIncludeLocalizationResources;
}) => [{ url: "/api/abp/application-configuration" }, ...(params ? [params] : [])] as const;

type AbpApplicationConfigurationGetQueryKey = ReturnType<
  typeof abpApplicationConfigurationGetQueryKey
>;

export function abpApplicationConfigurationGetQueryOptions(
  params?: {
    IncludeLocalizationResources?: AbpApplicationConfigurationGetQueryIncludeLocalizationResources;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = abpApplicationConfigurationGetQueryKey(params);
  return queryOptions<
    AbpApplicationConfigurationGetStatus200,
    ResponseErrorConfig<
      | AbpApplicationConfigurationGetStatus400
      | AbpApplicationConfigurationGetStatus401
      | AbpApplicationConfigurationGetStatus403
      | AbpApplicationConfigurationGetStatus404
      | AbpApplicationConfigurationGetStatus500
      | AbpApplicationConfigurationGetStatus501
    >,
    AbpApplicationConfigurationGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return abpApplicationConfigurationGet(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/abp/application-configuration}
 */
export function useAbpApplicationConfigurationGet<
  TData = AbpApplicationConfigurationGetStatus200,
  TQueryData = AbpApplicationConfigurationGetStatus200,
  TQueryKey extends QueryKey = AbpApplicationConfigurationGetQueryKey,
>(
  params?: {
    IncludeLocalizationResources?: AbpApplicationConfigurationGetQueryIncludeLocalizationResources;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        AbpApplicationConfigurationGetStatus200,
        ResponseErrorConfig<
          | AbpApplicationConfigurationGetStatus400
          | AbpApplicationConfigurationGetStatus401
          | AbpApplicationConfigurationGetStatus403
          | AbpApplicationConfigurationGetStatus404
          | AbpApplicationConfigurationGetStatus500
          | AbpApplicationConfigurationGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? abpApplicationConfigurationGetQueryKey(params);

  const query = useQuery(
    {
      ...abpApplicationConfigurationGetQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AbpApplicationConfigurationGetStatus400
      | AbpApplicationConfigurationGetStatus401
      | AbpApplicationConfigurationGetStatus403
      | AbpApplicationConfigurationGetStatus404
      | AbpApplicationConfigurationGetStatus500
      | AbpApplicationConfigurationGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
