/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { BookGetListOptions, BookGetListResponses } from "../../models/book/BookGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/book}
 */
export function bookGetList<ThrowOnError extends boolean = true>(
  options: Options<BookGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<BookGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/book",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BookGetListResponses, ThrowOnError>>,
  );
}
