/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  GlobalResourcePublicGetGlobalStyleOptions,
  GlobalResourcePublicGetGlobalStyleResponses,
} from "../../models/globalResourcePublic/GlobalResourcePublicGetGlobalStyle";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/global-resources/style}
 */
export function globalResourcePublicGetGlobalStyle<ThrowOnError extends boolean = true>(
  options: Options<GlobalResourcePublicGetGlobalStyleOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<GlobalResourcePublicGetGlobalStyleResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/global-resources/style",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<GlobalResourcePublicGetGlobalStyleResponses, ThrowOnError>>,
  );
}
