/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RatingPublicCreatePathEntityType,
  RatingPublicCreatePathEntityId,
  RatingPublicCreateData,
  RatingPublicCreateStatus200,
  RatingPublicCreateStatus400,
  RatingPublicCreateStatus401,
  RatingPublicCreateStatus403,
  RatingPublicCreateStatus404,
  RatingPublicCreateStatus500,
  RatingPublicCreateStatus501,
} from "../../models/ratingPublic/RatingPublicCreate.ts";

function getRatingPublicCreateUrl(
  entityType: RatingPublicCreatePathEntityType,
  entityId: RatingPublicCreatePathEntityId,
) {
  const res = {
    method: "PUT",
    url: `/api/cms-kit-public/ratings/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export async function ratingPublicCreate(
  entityType: RatingPublicCreatePathEntityType,
  entityId: RatingPublicCreatePathEntityId,
  data?: RatingPublicCreateData,
  config: Partial<RequestConfig<RatingPublicCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    RatingPublicCreateStatus200,
    ResponseErrorConfig<
      | RatingPublicCreateStatus400
      | RatingPublicCreateStatus401
      | RatingPublicCreateStatus403
      | RatingPublicCreateStatus404
      | RatingPublicCreateStatus500
      | RatingPublicCreateStatus501
    >,
    RatingPublicCreateData
  >({
    method: "PUT",
    url: getRatingPublicCreateUrl(entityType, entityId).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
