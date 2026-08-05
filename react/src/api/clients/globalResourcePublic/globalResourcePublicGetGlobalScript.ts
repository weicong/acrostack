/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  GlobalResourcePublicGetGlobalScriptStatus200,
  GlobalResourcePublicGetGlobalScriptStatus400,
  GlobalResourcePublicGetGlobalScriptStatus401,
  GlobalResourcePublicGetGlobalScriptStatus403,
  GlobalResourcePublicGetGlobalScriptStatus404,
  GlobalResourcePublicGetGlobalScriptStatus500,
  GlobalResourcePublicGetGlobalScriptStatus501,
} from "../../models/globalResourcePublic/GlobalResourcePublicGetGlobalScript.ts";

function getGlobalResourcePublicGetGlobalScriptUrl() {
  const res = { method: "GET", url: `/api/cms-kit-public/global-resources/script` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/global-resources/script}
 */
export async function globalResourcePublicGetGlobalScript(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GlobalResourcePublicGetGlobalScriptStatus200,
    ResponseErrorConfig<
      | GlobalResourcePublicGetGlobalScriptStatus400
      | GlobalResourcePublicGetGlobalScriptStatus401
      | GlobalResourcePublicGetGlobalScriptStatus403
      | GlobalResourcePublicGetGlobalScriptStatus404
      | GlobalResourcePublicGetGlobalScriptStatus500
      | GlobalResourcePublicGetGlobalScriptStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getGlobalResourcePublicGetGlobalScriptUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
