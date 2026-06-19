/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AbpApiDefinitionGetQueryIncludeTypes,
  AbpApiDefinitionGetQueryIncludeDescriptions,
  AbpApiDefinitionGetStatus200,
  AbpApiDefinitionGetStatus400,
  AbpApiDefinitionGetStatus401,
  AbpApiDefinitionGetStatus403,
  AbpApiDefinitionGetStatus404,
  AbpApiDefinitionGetStatus500,
  AbpApiDefinitionGetStatus501,
} from "../../models/abpApiDefinition/AbpApiDefinitionGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { abpApiDefinitionGet } from "../../clients/abpApiDefinition/abpApiDefinitionGet.ts";

export const abpApiDefinitionGetQueryKey = (params?: {
  IncludeTypes?: AbpApiDefinitionGetQueryIncludeTypes;
  IncludeDescriptions?: AbpApiDefinitionGetQueryIncludeDescriptions;
}) => [{ url: "/api/abp/api-definition" }, ...(params ? [params] : [])] as const;

type AbpApiDefinitionGetQueryKey = ReturnType<typeof abpApiDefinitionGetQueryKey>;

export function abpApiDefinitionGetQueryOptions(
  params?: {
    IncludeTypes?: AbpApiDefinitionGetQueryIncludeTypes;
    IncludeDescriptions?: AbpApiDefinitionGetQueryIncludeDescriptions;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = abpApiDefinitionGetQueryKey(params);
  return queryOptions<
    AbpApiDefinitionGetStatus200,
    ResponseErrorConfig<
      | AbpApiDefinitionGetStatus400
      | AbpApiDefinitionGetStatus401
      | AbpApiDefinitionGetStatus403
      | AbpApiDefinitionGetStatus404
      | AbpApiDefinitionGetStatus500
      | AbpApiDefinitionGetStatus501
    >,
    AbpApiDefinitionGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return abpApiDefinitionGet(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/abp/api-definition}
 */
export function useAbpApiDefinitionGet<
  TData = AbpApiDefinitionGetStatus200,
  TQueryData = AbpApiDefinitionGetStatus200,
  TQueryKey extends QueryKey = AbpApiDefinitionGetQueryKey,
>(
  params?: {
    IncludeTypes?: AbpApiDefinitionGetQueryIncludeTypes;
    IncludeDescriptions?: AbpApiDefinitionGetQueryIncludeDescriptions;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        AbpApiDefinitionGetStatus200,
        ResponseErrorConfig<
          | AbpApiDefinitionGetStatus400
          | AbpApiDefinitionGetStatus401
          | AbpApiDefinitionGetStatus403
          | AbpApiDefinitionGetStatus404
          | AbpApiDefinitionGetStatus500
          | AbpApiDefinitionGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? abpApiDefinitionGetQueryKey(params);

  const query = useQuery(
    {
      ...abpApiDefinitionGetQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AbpApiDefinitionGetStatus400
      | AbpApiDefinitionGetStatus401
      | AbpApiDefinitionGetStatus403
      | AbpApiDefinitionGetStatus404
      | AbpApiDefinitionGetStatus500
      | AbpApiDefinitionGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
