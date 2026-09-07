/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomPresentationGetSnapshotOptions,
  ClassroomPresentationGetSnapshotResponses,
} from "../../models/classroomPresentation/ClassroomPresentationGetSnapshot";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 投屏快照：当前题、倒计时（EndsAt/ServerTime）、匿名统计。
 * {@link /api/presentation/class-sessions/:id/snapshot}
 */
export function classroomPresentationGetSnapshot<ThrowOnError extends boolean = true>(
  options: Options<ClassroomPresentationGetSnapshotOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassroomPresentationGetSnapshotResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/presentation/class-sessions/{id}/snapshot",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomPresentationGetSnapshotResponses, ThrowOnError>>,
  );
}
