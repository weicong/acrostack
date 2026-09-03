/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ImpersonationSessionGetListOptions,
  ImpersonationSessionGetListResponses,
} from "../../models/impersonationSession/ImpersonationSessionGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/impersonation-session}
 */
export function impersonationSessionGetList<ThrowOnError extends boolean = true>(
  options: Options<ImpersonationSessionGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<ImpersonationSessionGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/impersonation-session",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ImpersonationSessionGetListResponses, ThrowOnError>>;
}
