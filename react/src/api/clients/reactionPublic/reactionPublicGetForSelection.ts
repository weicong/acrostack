/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ReactionPublicGetForSelectionPathEntityType,
  ReactionPublicGetForSelectionPathEntityId,
  ReactionPublicGetForSelectionStatus200,
  ReactionPublicGetForSelectionStatus400,
  ReactionPublicGetForSelectionStatus401,
  ReactionPublicGetForSelectionStatus403,
  ReactionPublicGetForSelectionStatus404,
  ReactionPublicGetForSelectionStatus500,
  ReactionPublicGetForSelectionStatus501,
} from "../../models/reactionPublic/ReactionPublicGetForSelection.ts";

function getReactionPublicGetForSelectionUrl(
  entityType: ReactionPublicGetForSelectionPathEntityType,
  entityId: ReactionPublicGetForSelectionPathEntityId,
) {
  const res = {
    method: "GET",
    url: `/api/cms-kit-public/reactions/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId}
 */
export async function reactionPublicGetForSelection(
  entityType: ReactionPublicGetForSelectionPathEntityType,
  entityId: ReactionPublicGetForSelectionPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ReactionPublicGetForSelectionStatus200,
    ResponseErrorConfig<
      | ReactionPublicGetForSelectionStatus400
      | ReactionPublicGetForSelectionStatus401
      | ReactionPublicGetForSelectionStatus403
      | ReactionPublicGetForSelectionStatus404
      | ReactionPublicGetForSelectionStatus500
      | ReactionPublicGetForSelectionStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getReactionPublicGetForSelectionUrl(entityType, entityId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
