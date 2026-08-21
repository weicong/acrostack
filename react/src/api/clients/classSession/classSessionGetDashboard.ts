/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionGetDashboardOptions,
  ClassSessionGetDashboardResponses,
} from "../../models/classSession/ClassSessionGetDashboard";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/dashboard}
 */
export function classSessionGetDashboard<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionGetDashboardOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionGetDashboardResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/class-session/{id}/dashboard",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionGetDashboardResponses, ThrowOnError>>;
}
