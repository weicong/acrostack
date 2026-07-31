/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ReactionToggleData,
  ReactionToggleStatus200,
  ReactionToggleStatus400,
  ReactionToggleStatus401,
  ReactionToggleStatus403,
  ReactionToggleStatus404,
  ReactionToggleStatus500,
  ReactionToggleStatus501,
} from "../../models/reaction/ReactionToggle.ts";

function getReactionToggleUrl() {
  const res = { method: "POST", url: `/api/app/reaction/toggle` as const };

  return res;
}

/**
 * {@link /api/app/reaction/toggle}
 */
export async function reactionToggle(
  data?: ReactionToggleData,
  config: Partial<RequestConfig<ReactionToggleData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    ReactionToggleStatus200,
    ResponseErrorConfig<
      | ReactionToggleStatus400
      | ReactionToggleStatus401
      | ReactionToggleStatus403
      | ReactionToggleStatus404
      | ReactionToggleStatus500
      | ReactionToggleStatus501
    >,
    ReactionToggleData
  >({
    method: "POST",
    url: getReactionToggleUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
