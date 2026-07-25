/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EditionDeletePathId,
  EditionDeleteStatus200,
  EditionDeleteStatus204,
  EditionDeleteStatus400,
  EditionDeleteStatus401,
  EditionDeleteStatus403,
  EditionDeleteStatus404,
  EditionDeleteStatus500,
  EditionDeleteStatus501,
} from "../../models/edition/EditionDelete.ts";

function getEditionDeleteUrl(id: EditionDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/edition/${id}` as const };

  return res;
}

/**
 * {@link /api/app/edition/:id}
 */
export async function editionDelete(
  id: EditionDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    EditionDeleteStatus200 | EditionDeleteStatus204,
    ResponseErrorConfig<
      | EditionDeleteStatus400
      | EditionDeleteStatus401
      | EditionDeleteStatus403
      | EditionDeleteStatus404
      | EditionDeleteStatus500
      | EditionDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getEditionDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
