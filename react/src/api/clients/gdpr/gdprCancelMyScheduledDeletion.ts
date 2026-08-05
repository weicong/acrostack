/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { GdprCancelMyScheduledDeletionStatus200 } from "../../models/gdpr/GdprCancelMyScheduledDeletion.ts";

function getGdprCancelMyScheduledDeletionUrl() {
  const res = { method: "DELETE", url: `/api/app/gdpr/scheduled-deletion` as const };

  return res;
}

/**
 * {@link /api/app/gdpr/scheduled-deletion}
 */
export async function gdprCancelMyScheduledDeletion(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GdprCancelMyScheduledDeletionStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "DELETE",
    url: getGdprCancelMyScheduledDeletionUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
