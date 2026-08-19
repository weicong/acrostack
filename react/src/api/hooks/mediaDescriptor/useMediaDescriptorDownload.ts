/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MediaDescriptorDownloadOptions,
  MediaDescriptorDownloadStatus200,
  MediaDescriptorDownloadStatus400,
  MediaDescriptorDownloadStatus401,
  MediaDescriptorDownloadStatus403,
  MediaDescriptorDownloadStatus404,
  MediaDescriptorDownloadStatus500,
  MediaDescriptorDownloadStatus501,
} from "../../models/mediaDescriptor/MediaDescriptorDownload";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { mediaDescriptorDownload } from "../../clients/mediaDescriptor/mediaDescriptorDownload";

export const mediaDescriptorDownloadQueryKey = ({
  path,
}: Omit<MediaDescriptorDownloadOptions, "headers">) =>
  [{ url: "/api/cms-kit/media/:id", params: path }] as const;

type MediaDescriptorDownloadQueryKey = ReturnType<typeof mediaDescriptorDownloadQueryKey>;

export function mediaDescriptorDownloadQueryOptions(
  { path }: MediaDescriptorDownloadOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = mediaDescriptorDownloadQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await mediaDescriptorDownload({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    path,
  }: {
    path: MediaDescriptorDownloadOptions["path"] | (() => MediaDescriptorDownloadOptions["path"]);
  },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? mediaDescriptorDownloadQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...mediaDescriptorDownloadQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
