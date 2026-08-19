/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetResourceByProviderOptions,
  PermissionsGetResourceByProviderResponses,
} from "../../models/permissions/PermissionsGetResourceByProvider";
import { client } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource/by-provider}
 */
export function permissionsGetResourceByProvider<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetResourceByProviderOptions, ThrowOnError> = {},
): Promise<RequestResult<PermissionsGetResourceByProviderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/permission-management/permissions/resource/by-provider",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<PermissionsGetResourceByProviderResponses, ThrowOnError>>;
}
