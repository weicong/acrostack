/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { BookCreateOptions, BookCreateResponses } from "../../models/book/BookCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/book}
 */
export function bookCreate<ThrowOnError extends boolean = true>(
  options: Options<BookCreateOptions, ThrowOnError>,
): Promise<RequestResult<BookCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/book",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BookCreateResponses, ThrowOnError>>;
}
