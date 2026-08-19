/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  AbpApplicationLocalizationGetOptions,
  AbpApplicationLocalizationGetResponses,
} from "../../models/abpApplicationLocalization/AbpApplicationLocalizationGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/abp/application-localization}
 */
export function abpApplicationLocalizationGet<ThrowOnError extends boolean = true>(
  options: Options<AbpApplicationLocalizationGetOptions, ThrowOnError>,
): Promise<RequestResult<AbpApplicationLocalizationGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/abp/application-localization",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<AbpApplicationLocalizationGetResponses, ThrowOnError>>;
}
