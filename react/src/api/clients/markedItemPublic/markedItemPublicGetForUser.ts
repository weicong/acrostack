/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MarkedItemPublicGetForUserPathEntityType,
  MarkedItemPublicGetForUserPathEntityId,
  MarkedItemPublicGetForUserStatus200,
  MarkedItemPublicGetForUserStatus400,
  MarkedItemPublicGetForUserStatus401,
  MarkedItemPublicGetForUserStatus403,
  MarkedItemPublicGetForUserStatus404,
  MarkedItemPublicGetForUserStatus500,
  MarkedItemPublicGetForUserStatus501,
} from "../../models/markedItemPublic/MarkedItemPublicGetForUser.ts";

function getMarkedItemPublicGetForUserUrl(
  entityType: MarkedItemPublicGetForUserPathEntityType,
  entityId: MarkedItemPublicGetForUserPathEntityId,
) {
  const res = {
    method: "GET",
    url: `/api/cms-kit-public/marked-items/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export async function markedItemPublicGetForUser(
  entityType: MarkedItemPublicGetForUserPathEntityType,
  entityId: MarkedItemPublicGetForUserPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MarkedItemPublicGetForUserStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicGetForUserStatus400
      | MarkedItemPublicGetForUserStatus401
      | MarkedItemPublicGetForUserStatus403
      | MarkedItemPublicGetForUserStatus404
      | MarkedItemPublicGetForUserStatus500
      | MarkedItemPublicGetForUserStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getMarkedItemPublicGetForUserUrl(entityType, entityId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
