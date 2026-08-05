/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { GdprGetMyScheduledDeletionStatus200 } from "../../models/gdpr/GdprGetMyScheduledDeletion.ts";

function getGdprGetMyScheduledDeletionUrl() {
  const res = { method: "GET", url: `/api/app/gdpr/scheduled-deletion` as const };

  return res;
}

/**
 * {@link /api/app/gdpr/scheduled-deletion}
 */
export async function gdprGetMyScheduledDeletion(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GdprGetMyScheduledDeletionStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({ method: "GET", url: getGdprGetMyScheduledDeletionUrl().url.toString(), ...requestConfig });

  return res.data;
}
