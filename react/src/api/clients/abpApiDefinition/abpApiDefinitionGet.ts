/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AbpApiDefinitionGetOptions,
  AbpApiDefinitionGetResponses,
} from "../../models/abpApiDefinition/AbpApiDefinitionGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/abp/api-definition}
 */
export function abpApiDefinitionGet<ThrowOnError extends boolean = true>(
  options: Options<AbpApiDefinitionGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<AbpApiDefinitionGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/abp/api-definition",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AbpApiDefinitionGetResponses, ThrowOnError>>,
  );
}
