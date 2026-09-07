/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BackgroundJobAbandonOptions,
  BackgroundJobAbandonResponses,
} from "../../models/backgroundJob/BackgroundJobAbandon";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/background-job/:id/abandon}
 */
export function backgroundJobAbandon<ThrowOnError extends boolean = true>(
  options: Options<BackgroundJobAbandonOptions, ThrowOnError>,
): Unwrappable<RequestResult<BackgroundJobAbandonResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/background-job/{id}/abandon",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BackgroundJobAbandonResponses, ThrowOnError>>,
  );
}
