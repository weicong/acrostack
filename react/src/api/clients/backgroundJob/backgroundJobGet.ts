/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BackgroundJobGetOptions,
  BackgroundJobGetResponses,
} from "../../models/backgroundJob/BackgroundJobGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/background-job/:id}
 */
export function backgroundJobGet<ThrowOnError extends boolean = true>(
  options: Options<BackgroundJobGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<BackgroundJobGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/background-job/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BackgroundJobGetResponses, ThrowOnError>>,
  );
}
