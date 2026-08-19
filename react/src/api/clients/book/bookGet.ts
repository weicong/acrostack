/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { BookGetOptions, BookGetResponses } from "../../models/book/BookGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/book/:id}
 */
export function bookGet<ThrowOnError extends boolean = true>(
  options: Options<BookGetOptions, ThrowOnError>,
): Promise<RequestResult<BookGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/book/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BookGetResponses, ThrowOnError>>;
}
