/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionPickRandomParticipantOptions,
  ClassSessionPickRandomParticipantResponses,
} from "../../models/classSession/ClassSessionPickRandomParticipant";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/pick-random-participant}
 */
export function classSessionPickRandomParticipant<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionPickRandomParticipantOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionPickRandomParticipantResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/class-session/{id}/pick-random-participant",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionPickRandomParticipantResponses, ThrowOnError>>;
}
