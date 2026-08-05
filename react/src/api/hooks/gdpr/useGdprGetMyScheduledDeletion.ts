/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { GdprGetMyScheduledDeletionStatus200 } from "../../models/gdpr/GdprGetMyScheduledDeletion.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { gdprGetMyScheduledDeletion } from "../../clients/gdpr/gdprGetMyScheduledDeletion.ts";

export const gdprGetMyScheduledDeletionQueryKey = () =>
  [{ url: "/api/app/gdpr/scheduled-deletion" }] as const;

type GdprGetMyScheduledDeletionQueryKey = ReturnType<typeof gdprGetMyScheduledDeletionQueryKey>;

export function gdprGetMyScheduledDeletionQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = gdprGetMyScheduledDeletionQueryKey();
  return queryOptions<
    GdprGetMyScheduledDeletionStatus200,
    ResponseErrorConfig<Error>,
    GdprGetMyScheduledDeletionStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return gdprGetMyScheduledDeletion({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/gdpr/scheduled-deletion}
 */
export function useGdprGetMyScheduledDeletion<
  TData = GdprGetMyScheduledDeletionStatus200,
  TQueryData = GdprGetMyScheduledDeletionStatus200,
  TQueryKey extends QueryKey = GdprGetMyScheduledDeletionQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        GdprGetMyScheduledDeletionStatus200,
        ResponseErrorConfig<Error>,
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
  const queryKey = resolvedOptions?.queryKey ?? gdprGetMyScheduledDeletionQueryKey();

  const query = useQuery(
    {
      ...gdprGetMyScheduledDeletionQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
