/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentGetSnapshotOptions,
  ClassroomStudentGetSnapshotResponses,
} from "../../models/classroomStudent/ClassroomStudentGetSnapshot";
import { client } from "../../.kubb/client";

/**
 * {@link /api/student/class-sessions/:id/snapshot}
 */
export function classroomStudentGetSnapshot<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentGetSnapshotOptions, ThrowOnError>,
): Promise<RequestResult<ClassroomStudentGetSnapshotResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/student/class-sessions/{id}/snapshot",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassroomStudentGetSnapshotResponses, ThrowOnError>>;
}
