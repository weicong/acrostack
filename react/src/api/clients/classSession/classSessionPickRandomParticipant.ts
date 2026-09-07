/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionPickRandomParticipantOptions,
  ClassSessionPickRandomParticipantResponses,
} from "../../models/classSession/ClassSessionPickRandomParticipant";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/pick-random-participant}
 */
export function classSessionPickRandomParticipant<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionPickRandomParticipantOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionPickRandomParticipantResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/class-session/{id}/pick-random-participant",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionPickRandomParticipantResponses, ThrowOnError>>,
  );
}
