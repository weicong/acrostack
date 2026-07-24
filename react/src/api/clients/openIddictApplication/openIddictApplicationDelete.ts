/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictApplicationDeletePathId,
  OpenIddictApplicationDeleteStatus200,
  OpenIddictApplicationDeleteStatus204,
  OpenIddictApplicationDeleteStatus400,
  OpenIddictApplicationDeleteStatus401,
  OpenIddictApplicationDeleteStatus403,
  OpenIddictApplicationDeleteStatus404,
  OpenIddictApplicationDeleteStatus500,
  OpenIddictApplicationDeleteStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationDelete.ts";

function getOpenIddictApplicationDeleteUrl(id: OpenIddictApplicationDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/open-iddict-application/${id}` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export async function openIddictApplicationDelete(
  id: OpenIddictApplicationDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    OpenIddictApplicationDeleteStatus200 | OpenIddictApplicationDeleteStatus204,
    ResponseErrorConfig<
      | OpenIddictApplicationDeleteStatus400
      | OpenIddictApplicationDeleteStatus401
      | OpenIddictApplicationDeleteStatus403
      | OpenIddictApplicationDeleteStatus404
      | OpenIddictApplicationDeleteStatus500
      | OpenIddictApplicationDeleteStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getOpenIddictApplicationDeleteUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
