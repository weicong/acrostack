/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassroomPublicJoinOptions,
  ClassroomPublicJoinResponses,
} from "../../models/classroomPublic/ClassroomPublicJoin";
import { client } from "../../.kubb/client";

/**
 * {@link /api/public/class-sessions/join}
 */
export function classroomPublicJoin<ThrowOnError extends boolean = true>(
  options: Options<ClassroomPublicJoinOptions, ThrowOnError>,
): Promise<RequestResult<ClassroomPublicJoinResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/public/class-sessions/join",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassroomPublicJoinResponses, ThrowOnError>>;
}
