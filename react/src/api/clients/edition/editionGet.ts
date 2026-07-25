/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EditionGetPathId,
  EditionGetStatus200,
  EditionGetStatus400,
  EditionGetStatus401,
  EditionGetStatus403,
  EditionGetStatus404,
  EditionGetStatus500,
  EditionGetStatus501,
} from "../../models/edition/EditionGet.ts";

function getEditionGetUrl(id: EditionGetPathId) {
  const res = { method: "GET", url: `/api/app/edition/${id}` as const };

  return res;
}

/**
 * {@link /api/app/edition/:id}
 */
export async function editionGet(
  id: EditionGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    EditionGetStatus200,
    ResponseErrorConfig<
      | EditionGetStatus400
      | EditionGetStatus401
      | EditionGetStatus403
      | EditionGetStatus404
      | EditionGetStatus500
      | EditionGetStatus501
    >,
    unknown
  >({ method: "GET", url: getEditionGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
