/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MarkedItemPublicGetForUserPathEntityType,
  MarkedItemPublicGetForUserPathEntityId,
  MarkedItemPublicGetForUserStatus200,
  MarkedItemPublicGetForUserStatus400,
  MarkedItemPublicGetForUserStatus401,
  MarkedItemPublicGetForUserStatus403,
  MarkedItemPublicGetForUserStatus404,
  MarkedItemPublicGetForUserStatus500,
  MarkedItemPublicGetForUserStatus501,
} from "../../models/markedItemPublic/MarkedItemPublicGetForUser.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { markedItemPublicGetForUser } from "../../clients/markedItemPublic/markedItemPublicGetForUser.ts";

export const markedItemPublicGetForUserQueryKey = (
  entityType?: MarkedItemPublicGetForUserPathEntityType,
  entityId?: MarkedItemPublicGetForUserPathEntityId,
) =>
  [
    {
      url: "/api/cms-kit-public/marked-items/:entityType/:entityId",
      params: { entityType: entityType, entityId: entityId },
    },
  ] as const;

type MarkedItemPublicGetForUserQueryKey = ReturnType<typeof markedItemPublicGetForUserQueryKey>;

export function markedItemPublicGetForUserQueryOptions(
  entityType?: MarkedItemPublicGetForUserPathEntityType,
  entityId?: MarkedItemPublicGetForUserPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = markedItemPublicGetForUserQueryKey(entityType, entityId);
  return queryOptions<
    MarkedItemPublicGetForUserStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicGetForUserStatus400
      | MarkedItemPublicGetForUserStatus401
      | MarkedItemPublicGetForUserStatus403
      | MarkedItemPublicGetForUserStatus404
      | MarkedItemPublicGetForUserStatus500
      | MarkedItemPublicGetForUserStatus501
    >,
    MarkedItemPublicGetForUserStatus200,
    typeof queryKey
  >({
    enabled: !!(entityType && entityId),
    queryKey,
    queryFn: async ({ signal }) => {
      return markedItemPublicGetForUser(entityType!, entityId!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function useMarkedItemPublicGetForUser<
  TData = MarkedItemPublicGetForUserStatus200,
  TQueryData = MarkedItemPublicGetForUserStatus200,
  TQueryKey extends QueryKey = MarkedItemPublicGetForUserQueryKey,
>(
  entityType?: MarkedItemPublicGetForUserPathEntityType,
  entityId?: MarkedItemPublicGetForUserPathEntityId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        MarkedItemPublicGetForUserStatus200,
        ResponseErrorConfig<
          | MarkedItemPublicGetForUserStatus400
          | MarkedItemPublicGetForUserStatus401
          | MarkedItemPublicGetForUserStatus403
          | MarkedItemPublicGetForUserStatus404
          | MarkedItemPublicGetForUserStatus500
          | MarkedItemPublicGetForUserStatus501
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
  const queryKey =
    resolvedOptions?.queryKey ?? markedItemPublicGetForUserQueryKey(entityType, entityId);

  const query = useQuery(
    {
      ...markedItemPublicGetForUserQueryOptions(entityType, entityId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MarkedItemPublicGetForUserStatus400
      | MarkedItemPublicGetForUserStatus401
      | MarkedItemPublicGetForUserStatus403
      | MarkedItemPublicGetForUserStatus404
      | MarkedItemPublicGetForUserStatus500
      | MarkedItemPublicGetForUserStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
