/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { BookDeleteOptions, BookDeleteResponses } from "../../models/book/BookDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/book/:id}
 */
export function bookDelete<ThrowOnError extends boolean = true>(
  options: Options<BookDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<BookDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/book/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BookDeleteResponses, ThrowOnError>>,
  );
}
