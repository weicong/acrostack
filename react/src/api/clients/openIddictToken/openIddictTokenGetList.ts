/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictTokenGetListOptions,
  OpenIddictTokenGetListResponses,
} from "../../models/openIddictToken/OpenIddictTokenGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-token}
 */
export function openIddictTokenGetList<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictTokenGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<OpenIddictTokenGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/open-iddict-token",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictTokenGetListResponses, ThrowOnError>>;
}
