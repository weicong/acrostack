/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ContactGetTotalUnreadMessageCountOptions,
  ContactGetTotalUnreadMessageCountResponses,
} from "../../models/contact/ContactGetTotalUnreadMessageCount";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/contact/total-unread-message-count}
 */
export function contactGetTotalUnreadMessageCount<ThrowOnError extends boolean = true>(
  options: Options<ContactGetTotalUnreadMessageCountOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ContactGetTotalUnreadMessageCountResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/contact/total-unread-message-count",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ContactGetTotalUnreadMessageCountResponses, ThrowOnError>>,
  );
}
