/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  GlobalResourcePublicGetGlobalScriptOptions,
  GlobalResourcePublicGetGlobalScriptResponses,
} from "../../models/globalResourcePublic/GlobalResourcePublicGetGlobalScript";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/global-resources/script}
 */
export function globalResourcePublicGetGlobalScript<ThrowOnError extends boolean = true>(
  options: Options<GlobalResourcePublicGetGlobalScriptOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<GlobalResourcePublicGetGlobalScriptResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/global-resources/script",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<GlobalResourcePublicGetGlobalScriptResponses, ThrowOnError>>,
  );
}
