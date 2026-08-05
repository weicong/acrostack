/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MarkedItemPublicTogglePathEntityType,
  MarkedItemPublicTogglePathEntityId,
  MarkedItemPublicToggleStatus200,
  MarkedItemPublicToggleStatus400,
  MarkedItemPublicToggleStatus401,
  MarkedItemPublicToggleStatus403,
  MarkedItemPublicToggleStatus404,
  MarkedItemPublicToggleStatus500,
  MarkedItemPublicToggleStatus501,
} from "../../models/markedItemPublic/MarkedItemPublicToggle.ts";

function getMarkedItemPublicToggleUrl(
  entityType: MarkedItemPublicTogglePathEntityType,
  entityId: MarkedItemPublicTogglePathEntityId,
) {
  const res = {
    method: "PUT",
    url: `/api/cms-kit-public/marked-items/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export async function markedItemPublicToggle(
  entityType: MarkedItemPublicTogglePathEntityType,
  entityId: MarkedItemPublicTogglePathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MarkedItemPublicToggleStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicToggleStatus400
      | MarkedItemPublicToggleStatus401
      | MarkedItemPublicToggleStatus403
      | MarkedItemPublicToggleStatus404
      | MarkedItemPublicToggleStatus500
      | MarkedItemPublicToggleStatus501
    >,
    unknown
  >({
    method: "PUT",
    url: getMarkedItemPublicToggleUrl(entityType, entityId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
