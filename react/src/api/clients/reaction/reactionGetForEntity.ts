/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ReactionGetForEntityPathEntityId,
  ReactionGetForEntityQueryEntityType,
  ReactionGetForEntityStatus200,
  ReactionGetForEntityStatus400,
  ReactionGetForEntityStatus401,
  ReactionGetForEntityStatus403,
  ReactionGetForEntityStatus404,
  ReactionGetForEntityStatus500,
  ReactionGetForEntityStatus501,
} from "../../models/reaction/ReactionGetForEntity.ts";

function getReactionGetForEntityUrl(entityId: ReactionGetForEntityPathEntityId) {
  const res = { method: "GET", url: `/api/app/reaction/for-entity/${entityId}` as const };

  return res;
}

/**
 * {@link /api/app/reaction/for-entity/:entityId}
 */
export async function reactionGetForEntity(
  entityId: ReactionGetForEntityPathEntityId,
  params?: { entityType?: ReactionGetForEntityQueryEntityType },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ReactionGetForEntityStatus200,
    ResponseErrorConfig<
      | ReactionGetForEntityStatus400
      | ReactionGetForEntityStatus401
      | ReactionGetForEntityStatus403
      | ReactionGetForEntityStatus404
      | ReactionGetForEntityStatus500
      | ReactionGetForEntityStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getReactionGetForEntityUrl(entityId).url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
