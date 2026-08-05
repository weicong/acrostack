/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ReactionPublicDeletePathEntityType,
  ReactionPublicDeletePathEntityId,
  ReactionPublicDeletePathReaction,
  ReactionPublicDeleteStatus200,
  ReactionPublicDeleteStatus204,
  ReactionPublicDeleteStatus400,
  ReactionPublicDeleteStatus401,
  ReactionPublicDeleteStatus403,
  ReactionPublicDeleteStatus404,
  ReactionPublicDeleteStatus500,
  ReactionPublicDeleteStatus501,
} from "../../models/reactionPublic/ReactionPublicDelete.ts";

function getReactionPublicDeleteUrl(
  entityType: ReactionPublicDeletePathEntityType,
  entityId: ReactionPublicDeletePathEntityId,
  reaction: ReactionPublicDeletePathReaction,
) {
  const res = {
    method: "DELETE",
    url: `/api/cms-kit-public/reactions/${entityType}/${entityId}/${reaction}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export async function reactionPublicDelete(
  entityType: ReactionPublicDeletePathEntityType,
  entityId: ReactionPublicDeletePathEntityId,
  reaction: ReactionPublicDeletePathReaction,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ReactionPublicDeleteStatus200 | ReactionPublicDeleteStatus204,
    ResponseErrorConfig<
      | ReactionPublicDeleteStatus400
      | ReactionPublicDeleteStatus401
      | ReactionPublicDeleteStatus403
      | ReactionPublicDeleteStatus404
      | ReactionPublicDeleteStatus500
      | ReactionPublicDeleteStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getReactionPublicDeleteUrl(entityType, entityId, reaction).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
