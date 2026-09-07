/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomPublicPreJoinOptions,
  ClassroomPublicPreJoinResponses,
} from "../../models/classroomPublic/ClassroomPublicPreJoin";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 探测加入：按手机号判断是否已有学员档案（决定是否展示 单位/职务 表单）。
 * {@link /api/public/class-sessions/pre-join}
 */
export function classroomPublicPreJoin<ThrowOnError extends boolean = true>(
  options: Options<ClassroomPublicPreJoinOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassroomPublicPreJoinResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/public/class-sessions/pre-join",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomPublicPreJoinResponses, ThrowOnError>>,
  );
}
