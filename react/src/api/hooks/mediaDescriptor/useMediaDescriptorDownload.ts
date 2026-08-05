/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  MediaDescriptorDownloadPathId,
  MediaDescriptorDownloadStatus200,
  MediaDescriptorDownloadStatus400,
  MediaDescriptorDownloadStatus401,
  MediaDescriptorDownloadStatus403,
  MediaDescriptorDownloadStatus404,
  MediaDescriptorDownloadStatus500,
  MediaDescriptorDownloadStatus501,
} from "../../models/mediaDescriptor/MediaDescriptorDownload.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { mediaDescriptorDownload } from "../../clients/mediaDescriptor/mediaDescriptorDownload.ts";

export const mediaDescriptorDownloadQueryKey = (id?: MediaDescriptorDownloadPathId) =>
  [{ url: "/api/cms-kit/media/:id", params: { id: id } }] as const;

type MediaDescriptorDownloadQueryKey = ReturnType<typeof mediaDescriptorDownloadQueryKey>;

export function mediaDescriptorDownloadQueryOptions(
  id?: MediaDescriptorDownloadPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = mediaDescriptorDownloadQueryKey(id);
  return queryOptions<
    MediaDescriptorDownloadStatus200,
    ResponseErrorConfig<
      | MediaDescriptorDownloadStatus400
      | MediaDescriptorDownloadStatus401
      | MediaDescriptorDownloadStatus403
      | MediaDescriptorDownloadStatus404
      | MediaDescriptorDownloadStatus500
      | MediaDescriptorDownloadStatus501
    >,
    MediaDescriptorDownloadStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return mediaDescriptorDownload(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit/media/:id}
 */
export function useMediaDescriptorDownload<
  TData = MediaDescriptorDownloadStatus200,
  TQueryData = MediaDescriptorDownloadStatus200,
  TQueryKey extends QueryKey = MediaDescriptorDownloadQueryKey,
>(
  id?: MediaDescriptorDownloadPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        MediaDescriptorDownloadStatus200,
        ResponseErrorConfig<
          | MediaDescriptorDownloadStatus400
          | MediaDescriptorDownloadStatus401
          | MediaDescriptorDownloadStatus403
          | MediaDescriptorDownloadStatus404
          | MediaDescriptorDownloadStatus500
          | MediaDescriptorDownloadStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? mediaDescriptorDownloadQueryKey(id);

  const query = useQuery(
    {
      ...mediaDescriptorDownloadQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | MediaDescriptorDownloadStatus400
      | MediaDescriptorDownloadStatus401
      | MediaDescriptorDownloadStatus403
      | MediaDescriptorDownloadStatus404
      | MediaDescriptorDownloadStatus500
      | MediaDescriptorDownloadStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
