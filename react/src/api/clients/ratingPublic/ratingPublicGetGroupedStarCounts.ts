/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RatingPublicGetGroupedStarCountsPathEntityType,
  RatingPublicGetGroupedStarCountsPathEntityId,
  RatingPublicGetGroupedStarCountsStatus200,
  RatingPublicGetGroupedStarCountsStatus400,
  RatingPublicGetGroupedStarCountsStatus401,
  RatingPublicGetGroupedStarCountsStatus403,
  RatingPublicGetGroupedStarCountsStatus404,
  RatingPublicGetGroupedStarCountsStatus500,
  RatingPublicGetGroupedStarCountsStatus501,
} from "../../models/ratingPublic/RatingPublicGetGroupedStarCounts.ts";

function getRatingPublicGetGroupedStarCountsUrl(
  entityType: RatingPublicGetGroupedStarCountsPathEntityType,
  entityId: RatingPublicGetGroupedStarCountsPathEntityId,
) {
  const res = {
    method: "GET",
    url: `/api/cms-kit-public/ratings/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export async function ratingPublicGetGroupedStarCounts(
  entityType: RatingPublicGetGroupedStarCountsPathEntityType,
  entityId: RatingPublicGetGroupedStarCountsPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RatingPublicGetGroupedStarCountsStatus200,
    ResponseErrorConfig<
      | RatingPublicGetGroupedStarCountsStatus400
      | RatingPublicGetGroupedStarCountsStatus401
      | RatingPublicGetGroupedStarCountsStatus403
      | RatingPublicGetGroupedStarCountsStatus404
      | RatingPublicGetGroupedStarCountsStatus500
      | RatingPublicGetGroupedStarCountsStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getRatingPublicGetGroupedStarCountsUrl(entityType, entityId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
