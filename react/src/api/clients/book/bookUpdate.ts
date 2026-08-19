/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { BookUpdateOptions, BookUpdateResponses } from "../../models/book/BookUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/book/:id}
 */
export function bookUpdate<ThrowOnError extends boolean = true>(
  options: Options<BookUpdateOptions, ThrowOnError>,
): Promise<RequestResult<BookUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/app/book/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BookUpdateResponses, ThrowOnError>>;
}
