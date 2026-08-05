/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  GlobalResourcePublicGetGlobalStyleStatus200,
  GlobalResourcePublicGetGlobalStyleStatus400,
  GlobalResourcePublicGetGlobalStyleStatus401,
  GlobalResourcePublicGetGlobalStyleStatus403,
  GlobalResourcePublicGetGlobalStyleStatus404,
  GlobalResourcePublicGetGlobalStyleStatus500,
  GlobalResourcePublicGetGlobalStyleStatus501,
} from "../../models/globalResourcePublic/GlobalResourcePublicGetGlobalStyle.ts";

function getGlobalResourcePublicGetGlobalStyleUrl() {
  const res = { method: "GET", url: `/api/cms-kit-public/global-resources/style` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/global-resources/style}
 */
export async function globalResourcePublicGetGlobalStyle(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GlobalResourcePublicGetGlobalStyleStatus200,
    ResponseErrorConfig<
      | GlobalResourcePublicGetGlobalStyleStatus400
      | GlobalResourcePublicGetGlobalStyleStatus401
      | GlobalResourcePublicGetGlobalStyleStatus403
      | GlobalResourcePublicGetGlobalStyleStatus404
      | GlobalResourcePublicGetGlobalStyleStatus500
      | GlobalResourcePublicGetGlobalStyleStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getGlobalResourcePublicGetGlobalStyleUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
