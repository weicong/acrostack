/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ContactGetListOptions,
  ContactGetListResponses,
} from "../../models/contact/ContactGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/contact}
 */
export function contactGetList<ThrowOnError extends boolean = true>(
  options: Options<ContactGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ContactGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/contact",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ContactGetListResponses, ThrowOnError>>,
  );
}
