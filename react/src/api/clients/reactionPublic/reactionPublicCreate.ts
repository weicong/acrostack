/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ReactionPublicCreatePathEntityType,
  ReactionPublicCreatePathEntityId,
  ReactionPublicCreatePathReaction,
  ReactionPublicCreateStatus200,
  ReactionPublicCreateStatus204,
  ReactionPublicCreateStatus400,
  ReactionPublicCreateStatus401,
  ReactionPublicCreateStatus403,
  ReactionPublicCreateStatus404,
  ReactionPublicCreateStatus500,
  ReactionPublicCreateStatus501,
} from "../../models/reactionPublic/ReactionPublicCreate.ts";

function getReactionPublicCreateUrl(
  entityType: ReactionPublicCreatePathEntityType,
  entityId: ReactionPublicCreatePathEntityId,
  reaction: ReactionPublicCreatePathReaction,
) {
  const res = {
    method: "PUT",
    url: `/api/cms-kit-public/reactions/${entityType}/${entityId}/${reaction}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export async function reactionPublicCreate(
  entityType: ReactionPublicCreatePathEntityType,
  entityId: ReactionPublicCreatePathEntityId,
  reaction: ReactionPublicCreatePathReaction,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204,
    ResponseErrorConfig<
      | ReactionPublicCreateStatus400
      | ReactionPublicCreateStatus401
      | ReactionPublicCreateStatus403
      | ReactionPublicCreateStatus404
      | ReactionPublicCreateStatus500
      | ReactionPublicCreateStatus501
    >,
    unknown
  >({
    method: "PUT",
    url: getReactionPublicCreateUrl(entityType, entityId, reaction).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
