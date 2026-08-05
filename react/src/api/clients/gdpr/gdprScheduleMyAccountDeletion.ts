/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { GdprScheduleMyAccountDeletionStatus200 } from "../../models/gdpr/GdprScheduleMyAccountDeletion.ts";

function getGdprScheduleMyAccountDeletionUrl() {
  const res = { method: "POST", url: `/api/app/gdpr/scheduled-deletion` as const };

  return res;
}

/**
 * {@link /api/app/gdpr/scheduled-deletion}
 */
export async function gdprScheduleMyAccountDeletion(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GdprScheduleMyAccountDeletionStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "POST",
    url: getGdprScheduleMyAccountDeletionUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
