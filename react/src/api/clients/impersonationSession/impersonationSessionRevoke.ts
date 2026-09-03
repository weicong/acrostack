/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ImpersonationSessionRevokeOptions,
  ImpersonationSessionRevokeResponses,
} from "../../models/impersonationSession/ImpersonationSessionRevoke";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/impersonation-session/:id/revoke}
 */
export function impersonationSessionRevoke<ThrowOnError extends boolean = true>(
  options: Options<ImpersonationSessionRevokeOptions, ThrowOnError>,
): Promise<RequestResult<ImpersonationSessionRevokeResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/impersonation-session/{id}/revoke",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ImpersonationSessionRevokeResponses, ThrowOnError>>;
}
