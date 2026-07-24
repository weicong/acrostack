/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictScopeDeletePathId,
  OpenIddictScopeDeleteStatus200,
  OpenIddictScopeDeleteStatus204,
  OpenIddictScopeDeleteStatus400,
  OpenIddictScopeDeleteStatus401,
  OpenIddictScopeDeleteStatus403,
  OpenIddictScopeDeleteStatus404,
  OpenIddictScopeDeleteStatus500,
  OpenIddictScopeDeleteStatus501,
} from "../../models/openIddictScope/OpenIddictScopeDelete.ts";

function getOpenIddictScopeDeleteUrl(id: OpenIddictScopeDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/open-iddict-scope/${id}` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export async function openIddictScopeDelete(
  id: OpenIddictScopeDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictScopeDeleteStatus400
      | OpenIddictScopeDeleteStatus401
      | OpenIddictScopeDeleteStatus403
      | OpenIddictScopeDeleteStatus404
      | OpenIddictScopeDeleteStatus500
      | OpenIddictScopeDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getOpenIddictScopeDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
