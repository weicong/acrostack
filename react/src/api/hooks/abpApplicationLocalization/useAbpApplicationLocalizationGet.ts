/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AbpApplicationLocalizationGetQueryCultureName,
  AbpApplicationLocalizationGetQueryOnlyDynamics,
  AbpApplicationLocalizationGetStatus200,
  AbpApplicationLocalizationGetStatus400,
  AbpApplicationLocalizationGetStatus401,
  AbpApplicationLocalizationGetStatus403,
  AbpApplicationLocalizationGetStatus404,
  AbpApplicationLocalizationGetStatus500,
  AbpApplicationLocalizationGetStatus501,
} from "../../models/abpApplicationLocalization/AbpApplicationLocalizationGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { abpApplicationLocalizationGet } from "../../clients/abpApplicationLocalization/abpApplicationLocalizationGet.ts";

export const abpApplicationLocalizationGetQueryKey = (params?: {
  CultureName: AbpApplicationLocalizationGetQueryCultureName;
  OnlyDynamics?: AbpApplicationLocalizationGetQueryOnlyDynamics;
}) => [{ url: "/api/abp/application-localization" }, ...(params ? [params] : [])] as const;

type AbpApplicationLocalizationGetQueryKey = ReturnType<
  typeof abpApplicationLocalizationGetQueryKey
>;

export function abpApplicationLocalizationGetQueryOptions(
  params?: {
    CultureName: AbpApplicationLocalizationGetQueryCultureName;
    OnlyDynamics?: AbpApplicationLocalizationGetQueryOnlyDynamics;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = abpApplicationLocalizationGetQueryKey(params);
  return queryOptions<
    AbpApplicationLocalizationGetStatus200,
    ResponseErrorConfig<
      | AbpApplicationLocalizationGetStatus400
      | AbpApplicationLocalizationGetStatus401
      | AbpApplicationLocalizationGetStatus403
      | AbpApplicationLocalizationGetStatus404
      | AbpApplicationLocalizationGetStatus500
      | AbpApplicationLocalizationGetStatus501
    >,
    AbpApplicationLocalizationGetStatus200,
    typeof queryKey
  >({
    enabled: !!params,
    queryKey,
    queryFn: async ({ signal }) => {
      return abpApplicationLocalizationGet(params!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/abp/application-localization}
 */
export function useAbpApplicationLocalizationGet<
  TData = AbpApplicationLocalizationGetStatus200,
  TQueryData = AbpApplicationLocalizationGetStatus200,
  TQueryKey extends QueryKey = AbpApplicationLocalizationGetQueryKey,
>(
  params?: {
    CultureName: AbpApplicationLocalizationGetQueryCultureName;
    OnlyDynamics?: AbpApplicationLocalizationGetQueryOnlyDynamics;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        AbpApplicationLocalizationGetStatus200,
        ResponseErrorConfig<
          | AbpApplicationLocalizationGetStatus400
          | AbpApplicationLocalizationGetStatus401
          | AbpApplicationLocalizationGetStatus403
          | AbpApplicationLocalizationGetStatus404
          | AbpApplicationLocalizationGetStatus500
          | AbpApplicationLocalizationGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? abpApplicationLocalizationGetQueryKey(params);

  const query = useQuery(
    {
      ...abpApplicationLocalizationGetQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AbpApplicationLocalizationGetStatus400
      | AbpApplicationLocalizationGetStatus401
      | AbpApplicationLocalizationGetStatus403
      | AbpApplicationLocalizationGetStatus404
      | AbpApplicationLocalizationGetStatus500
      | AbpApplicationLocalizationGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
