/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  GlobalResourceAdminSetGlobalResourcesOptions,
  GlobalResourceAdminSetGlobalResourcesResponses,
} from "../../models/globalResourceAdmin/GlobalResourceAdminSetGlobalResources";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export function globalResourceAdminSetGlobalResources<ThrowOnError extends boolean = true>(
  options: Options<GlobalResourceAdminSetGlobalResourcesOptions, ThrowOnError>,
): Unwrappable<RequestResult<GlobalResourceAdminSetGlobalResourcesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/global-resources",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<GlobalResourceAdminSetGlobalResourcesResponses, ThrowOnError>>,
  );
}
