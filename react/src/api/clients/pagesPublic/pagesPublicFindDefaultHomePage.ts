/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PagesPublicFindDefaultHomePageOptions,
  PagesPublicFindDefaultHomePageResponses,
} from "../../models/pagesPublic/PagesPublicFindDefaultHomePage";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/pages/home}
 */
export function pagesPublicFindDefaultHomePage<ThrowOnError extends boolean = true>(
  options: Options<PagesPublicFindDefaultHomePageOptions, ThrowOnError> = {},
): Promise<RequestResult<PagesPublicFindDefaultHomePageResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-public/pages/home",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<PagesPublicFindDefaultHomePageResponses, ThrowOnError>>;
}
