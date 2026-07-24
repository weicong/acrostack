/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictApplicationGetPathId,
  OpenIddictApplicationGetStatus200,
  OpenIddictApplicationGetStatus400,
  OpenIddictApplicationGetStatus401,
  OpenIddictApplicationGetStatus403,
  OpenIddictApplicationGetStatus404,
  OpenIddictApplicationGetStatus500,
  OpenIddictApplicationGetStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationGet.ts";

function getOpenIddictApplicationGetUrl(id: OpenIddictApplicationGetPathId) {
  const res = { method: "GET", url: `/api/app/open-iddict-application/${id}` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export async function openIddictApplicationGet(
  id: OpenIddictApplicationGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    OpenIddictApplicationGetStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationGetStatus400
      | OpenIddictApplicationGetStatus401
      | OpenIddictApplicationGetStatus403
      | OpenIddictApplicationGetStatus404
      | OpenIddictApplicationGetStatus500
      | OpenIddictApplicationGetStatus501
    >,
    unknown
  >({ method: "GET", url: getOpenIddictApplicationGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
