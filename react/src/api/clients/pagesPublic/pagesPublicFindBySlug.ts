/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PagesPublicFindBySlugOptions,
  PagesPublicFindBySlugResponses,
} from "../../models/pagesPublic/PagesPublicFindBySlug";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/pages/by-slug}
 */
export function pagesPublicFindBySlug<ThrowOnError extends boolean = true>(
  options: Options<PagesPublicFindBySlugOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PagesPublicFindBySlugResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/pages/by-slug",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PagesPublicFindBySlugResponses, ThrowOnError>>,
  );
}
