/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { GdprDeleteMyAccountStatus200 } from "../../models/gdpr/GdprDeleteMyAccount.ts";

function getGdprDeleteMyAccountUrl() {
  const res = { method: "DELETE", url: `/api/app/gdpr/account` as const };

  return res;
}

/**
 * {@link /api/app/gdpr/account}
 */
export async function gdprDeleteMyAccount(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<GdprDeleteMyAccountStatus200, ResponseErrorConfig<Error>, unknown>({
    method: "DELETE",
    url: getGdprDeleteMyAccountUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
