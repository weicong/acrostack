/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictTokenDeleteOptions,
  OpenIddictTokenDeleteResponses,
} from "../../models/openIddictToken/OpenIddictTokenDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-token/:id}
 */
export function openIddictTokenDelete<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictTokenDeleteOptions, ThrowOnError>,
): Promise<RequestResult<OpenIddictTokenDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/open-iddict-token/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictTokenDeleteResponses, ThrowOnError>>;
}
