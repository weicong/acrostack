/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeGetListOptions,
  OpenIddictScopeGetListResponses,
} from "../../models/openIddictScope/OpenIddictScopeGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope}
 */
export function openIddictScopeGetList<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<OpenIddictScopeGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/open-iddict-scope",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictScopeGetListResponses, ThrowOnError>>;
}
