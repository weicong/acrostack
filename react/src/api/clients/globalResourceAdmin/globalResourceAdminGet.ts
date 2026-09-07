/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  GlobalResourceAdminGetOptions,
  GlobalResourceAdminGetResponses,
} from "../../models/globalResourceAdmin/GlobalResourceAdminGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export function globalResourceAdminGet<ThrowOnError extends boolean = true>(
  options: Options<GlobalResourceAdminGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<GlobalResourceAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/global-resources",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<GlobalResourceAdminGetResponses, ThrowOnError>>,
  );
}
