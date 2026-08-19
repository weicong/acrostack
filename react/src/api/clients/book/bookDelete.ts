/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { BookDeleteOptions, BookDeleteResponses } from "../../models/book/BookDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/book/:id}
 */
export function bookDelete<ThrowOnError extends boolean = true>(
  options: Options<BookDeleteOptions, ThrowOnError>,
): Promise<RequestResult<BookDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/book/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BookDeleteResponses, ThrowOnError>>;
}
