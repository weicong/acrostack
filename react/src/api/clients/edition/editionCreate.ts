/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EditionCreateData,
  EditionCreateStatus200,
  EditionCreateStatus400,
  EditionCreateStatus401,
  EditionCreateStatus403,
  EditionCreateStatus404,
  EditionCreateStatus500,
  EditionCreateStatus501,
} from "../../models/edition/EditionCreate.ts";

function getEditionCreateUrl() {
  const res = { method: "POST", url: `/api/app/edition` as const };

  return res;
}

/**
 * {@link /api/app/edition}
 */
export async function editionCreate(
  data?: EditionCreateData,
  config: Partial<RequestConfig<EditionCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    EditionCreateStatus200,
    ResponseErrorConfig<
      | EditionCreateStatus400
      | EditionCreateStatus401
      | EditionCreateStatus403
      | EditionCreateStatus404
      | EditionCreateStatus500
      | EditionCreateStatus501
    >,
    EditionCreateData
  >({
    method: "POST",
    url: getEditionCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
