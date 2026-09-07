/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ImpersonationSessionGetListOptions,
  ImpersonationSessionGetListResponses,
} from "../../models/impersonationSession/ImpersonationSessionGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/impersonation-session}
 */
export function impersonationSessionGetList<ThrowOnError extends boolean = true>(
  options: Options<ImpersonationSessionGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ImpersonationSessionGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/impersonation-session",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ImpersonationSessionGetListResponses, ThrowOnError>>,
  );
}
