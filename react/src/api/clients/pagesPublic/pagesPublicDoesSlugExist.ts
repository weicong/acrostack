/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PagesPublicDoesSlugExistOptions,
  PagesPublicDoesSlugExistResponses,
} from "../../models/pagesPublic/PagesPublicDoesSlugExist";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/pages/exist}
 */
export function pagesPublicDoesSlugExist<ThrowOnError extends boolean = true>(
  options: Options<PagesPublicDoesSlugExistOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PagesPublicDoesSlugExistResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/pages/exist",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PagesPublicDoesSlugExistResponses, ThrowOnError>>,
  );
}
