/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictScopeGetPathId,
  OpenIddictScopeGetStatus200,
  OpenIddictScopeGetStatus400,
  OpenIddictScopeGetStatus401,
  OpenIddictScopeGetStatus403,
  OpenIddictScopeGetStatus404,
  OpenIddictScopeGetStatus500,
  OpenIddictScopeGetStatus501,
} from "../../models/openIddictScope/OpenIddictScopeGet.ts";

function getOpenIddictScopeGetUrl(id: OpenIddictScopeGetPathId) {
  const res = { method: "GET", url: `/api/app/open-iddict-scope/${id}` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export async function openIddictScopeGet(
  id: OpenIddictScopeGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    OpenIddictScopeGetStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeGetStatus400
      | OpenIddictScopeGetStatus401
      | OpenIddictScopeGetStatus403
      | OpenIddictScopeGetStatus404
      | OpenIddictScopeGetStatus500
      | OpenIddictScopeGetStatus501
    >,
    unknown
  >({ method: "GET", url: getOpenIddictScopeGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
