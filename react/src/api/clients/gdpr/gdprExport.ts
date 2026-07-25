/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { GdprExportStatus200 } from "../../models/gdpr/GdprExport.ts";

function getGdprExportUrl() {
  const res = { method: "GET", url: `/api/app/gdpr/export` as const };

  return res;
}

/**
 * {@link /api/app/gdpr/export}
 */
export async function gdprExport(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<GdprExportStatus200, ResponseErrorConfig<Error>, unknown>({
    method: "GET",
    url: getGdprExportUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
