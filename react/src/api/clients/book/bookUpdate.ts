/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { BookUpdateOptions, BookUpdateResponses } from "../../models/book/BookUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/book/:id}
 */
export function bookUpdate<ThrowOnError extends boolean = true>(
  options: Options<BookUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<BookUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/book/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BookUpdateResponses, ThrowOnError>>,
  );
}
