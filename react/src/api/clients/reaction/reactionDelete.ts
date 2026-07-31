/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ReactionDeleteQueryEntityType,
  ReactionDeleteQueryEntityId,
  ReactionDeleteQueryReactionType,
  ReactionDeleteStatus200,
  ReactionDeleteStatus204,
  ReactionDeleteStatus400,
  ReactionDeleteStatus401,
  ReactionDeleteStatus403,
  ReactionDeleteStatus404,
  ReactionDeleteStatus500,
  ReactionDeleteStatus501,
} from "../../models/reaction/ReactionDelete.ts";

function getReactionDeleteUrl() {
  const res = { method: "DELETE", url: `/api/app/reaction` as const };

  return res;
}

/**
 * {@link /api/app/reaction}
 */
export async function reactionDelete(
  params?: {
    entityType?: ReactionDeleteQueryEntityType;
    entityId?: ReactionDeleteQueryEntityId;
    reactionType?: ReactionDeleteQueryReactionType;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ReactionDeleteStatus200 | ReactionDeleteStatus204,
    ResponseErrorConfig<
      | ReactionDeleteStatus400
      | ReactionDeleteStatus401
      | ReactionDeleteStatus403
      | ReactionDeleteStatus404
      | ReactionDeleteStatus500
      | ReactionDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getReactionDeleteUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
