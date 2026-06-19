/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ProfileGetStatus200,
  ProfileGetStatus400,
  ProfileGetStatus401,
  ProfileGetStatus403,
  ProfileGetStatus404,
  ProfileGetStatus500,
  ProfileGetStatus501,
} from "../../models/profile/ProfileGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { profileGet } from "../../clients/profile/profileGet.ts";

export const profileGetQueryKey = () => [{ url: "/api/account/my-profile" }] as const;

type ProfileGetQueryKey = ReturnType<typeof profileGetQueryKey>;

export function profileGetQueryOptions(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const queryKey = profileGetQueryKey();
  return queryOptions<
    ProfileGetStatus200,
    ResponseErrorConfig<
      | ProfileGetStatus400
      | ProfileGetStatus401
      | ProfileGetStatus403
      | ProfileGetStatus404
      | ProfileGetStatus500
      | ProfileGetStatus501
    >,
    ProfileGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return profileGet({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/account/my-profile}
 */
export function useProfileGet<
  TData = ProfileGetStatus200,
  TQueryData = ProfileGetStatus200,
  TQueryKey extends QueryKey = ProfileGetQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ProfileGetStatus200,
        ResponseErrorConfig<
          | ProfileGetStatus400
          | ProfileGetStatus401
          | ProfileGetStatus403
          | ProfileGetStatus404
          | ProfileGetStatus500
          | ProfileGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? profileGetQueryKey();

  const query = useQuery(
    {
      ...profileGetQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ProfileGetStatus400
      | ProfileGetStatus401
      | ProfileGetStatus403
      | ProfileGetStatus404
      | ProfileGetStatus500
      | ProfileGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
