/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetResourceByProviderOptions,
  PermissionsGetResourceByProviderResponses,
} from "../../models/permissions/PermissionsGetResourceByProvider";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource/by-provider}
 */
export function permissionsGetResourceByProvider<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetResourceByProviderOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PermissionsGetResourceByProviderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/permission-management/permissions/resource/by-provider",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PermissionsGetResourceByProviderResponses, ThrowOnError>>,
  );
}
