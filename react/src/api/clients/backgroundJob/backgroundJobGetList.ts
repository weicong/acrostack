/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BackgroundJobGetListOptions,
  BackgroundJobGetListResponses,
} from "../../models/backgroundJob/BackgroundJobGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/background-job}
 */
export function backgroundJobGetList<ThrowOnError extends boolean = true>(
  options: Options<BackgroundJobGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<BackgroundJobGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/background-job",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BackgroundJobGetListResponses, ThrowOnError>>,
  );
}
