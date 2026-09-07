/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentGetSnapshotOptions,
  ClassroomStudentGetSnapshotResponses,
} from "../../models/classroomStudent/ClassroomStudentGetSnapshot";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 学员快照：断线重连 / 刷新页面 / 版本跳跃时恢复状态。
 * {@link /api/student/class-sessions/:id/snapshot}
 */
export function classroomStudentGetSnapshot<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentGetSnapshotOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassroomStudentGetSnapshotResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/student/class-sessions/{id}/snapshot",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomStudentGetSnapshotResponses, ThrowOnError>>,
  );
}
