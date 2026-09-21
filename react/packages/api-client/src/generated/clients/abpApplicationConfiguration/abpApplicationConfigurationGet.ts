/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AbpApplicationConfigurationGetOptions,
  AbpApplicationConfigurationGetResponses,
} from "../../models/abpApplicationConfiguration/AbpApplicationConfigurationGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/abp/application-configuration}
 */
export function abpApplicationConfigurationGet<ThrowOnError extends boolean = true>(
  options: Options<AbpApplicationConfigurationGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<AbpApplicationConfigurationGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/abp/application-configuration",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AbpApplicationConfigurationGetResponses, ThrowOnError>>,
  );
}
