/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BackgroundJobGetListQueryFilter,
  BackgroundJobGetListQueryJobName,
  BackgroundJobGetListQueryIsAbandoned,
  BackgroundJobGetListQueryStartCreationTime,
  BackgroundJobGetListQueryEndCreationTime,
  BackgroundJobGetListQuerySorting,
  BackgroundJobGetListQuerySkipCount,
  BackgroundJobGetListQueryMaxResultCount,
  BackgroundJobGetListStatus200,
  BackgroundJobGetListStatus400,
  BackgroundJobGetListStatus401,
  BackgroundJobGetListStatus403,
  BackgroundJobGetListStatus404,
  BackgroundJobGetListStatus500,
  BackgroundJobGetListStatus501,
} from "../../models/backgroundJob/BackgroundJobGetList.ts";

function getBackgroundJobGetListUrl() {
  const res = { method: "GET", url: `/api/app/background-job` as const };

  return res;
}

/**
 * {@link /api/app/background-job}
 */
export async function backgroundJobGetList(
  params?: {
    Filter?: BackgroundJobGetListQueryFilter;
    JobName?: BackgroundJobGetListQueryJobName;
    IsAbandoned?: BackgroundJobGetListQueryIsAbandoned;
    StartCreationTime?: BackgroundJobGetListQueryStartCreationTime;
    EndCreationTime?: BackgroundJobGetListQueryEndCreationTime;
    Sorting?: BackgroundJobGetListQuerySorting;
    SkipCount?: BackgroundJobGetListQuerySkipCount;
    MaxResultCount?: BackgroundJobGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BackgroundJobGetListStatus200,
    ResponseErrorConfig<
      | BackgroundJobGetListStatus400
      | BackgroundJobGetListStatus401
      | BackgroundJobGetListStatus403
      | BackgroundJobGetListStatus404
      | BackgroundJobGetListStatus500
      | BackgroundJobGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getBackgroundJobGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
