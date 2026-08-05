/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RatingPublicDeletePathEntityType,
  RatingPublicDeletePathEntityId,
  RatingPublicDeleteStatus200,
  RatingPublicDeleteStatus204,
  RatingPublicDeleteStatus400,
  RatingPublicDeleteStatus401,
  RatingPublicDeleteStatus403,
  RatingPublicDeleteStatus404,
  RatingPublicDeleteStatus500,
  RatingPublicDeleteStatus501,
} from "../../models/ratingPublic/RatingPublicDelete.ts";

function getRatingPublicDeleteUrl(
  entityType: RatingPublicDeletePathEntityType,
  entityId: RatingPublicDeletePathEntityId,
) {
  const res = {
    method: "DELETE",
    url: `/api/cms-kit-public/ratings/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export async function ratingPublicDelete(
  entityType: RatingPublicDeletePathEntityType,
  entityId: RatingPublicDeletePathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204,
    ResponseErrorConfig<
      | RatingPublicDeleteStatus400
      | RatingPublicDeleteStatus401
      | RatingPublicDeleteStatus403
      | RatingPublicDeleteStatus404
      | RatingPublicDeleteStatus500
      | RatingPublicDeleteStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getRatingPublicDeleteUrl(entityType, entityId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
