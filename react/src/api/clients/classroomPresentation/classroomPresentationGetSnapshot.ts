/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassroomPresentationGetSnapshotOptions,
  ClassroomPresentationGetSnapshotResponses,
} from "../../models/classroomPresentation/ClassroomPresentationGetSnapshot";
import { client } from "../../.kubb/client";

/**
 * {@link /api/presentation/class-sessions/:id/snapshot}
 */
export function classroomPresentationGetSnapshot<ThrowOnError extends boolean = true>(
  options: Options<ClassroomPresentationGetSnapshotOptions, ThrowOnError>,
): Promise<RequestResult<ClassroomPresentationGetSnapshotResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/presentation/class-sessions/{id}/snapshot",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassroomPresentationGetSnapshotResponses, ThrowOnError>>;
}
