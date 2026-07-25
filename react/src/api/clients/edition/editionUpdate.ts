/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EditionUpdatePathId,
  EditionUpdateData,
  EditionUpdateStatus200,
  EditionUpdateStatus400,
  EditionUpdateStatus401,
  EditionUpdateStatus403,
  EditionUpdateStatus404,
  EditionUpdateStatus500,
  EditionUpdateStatus501,
} from "../../models/edition/EditionUpdate.ts";

function getEditionUpdateUrl(id: EditionUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/edition/${id}` as const };

  return res;
}

/**
 * {@link /api/app/edition/:id}
 */
export async function editionUpdate(
  id: EditionUpdatePathId,
  data?: EditionUpdateData,
  config: Partial<RequestConfig<EditionUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    EditionUpdateStatus200,
    ResponseErrorConfig<
      | EditionUpdateStatus400
      | EditionUpdateStatus401
      | EditionUpdateStatus403
      | EditionUpdateStatus404
      | EditionUpdateStatus500
      | EditionUpdateStatus501
    >,
    EditionUpdateData
  >({
    method: "PUT",
    url: getEditionUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
