/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomPublicJoinOptions,
  ClassroomPublicJoinResponses,
} from "../../models/classroomPublic/ClassroomPublicJoin";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 加入课堂：手机号识别档案 -> 建档/复用 -> 签发课堂令牌 + 学员门户令牌。
 * {@link /api/public/class-sessions/join}
 */
export function classroomPublicJoin<ThrowOnError extends boolean = true>(
  options: Options<ClassroomPublicJoinOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassroomPublicJoinResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/public/class-sessions/join",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomPublicJoinResponses, ThrowOnError>>,
  );
}
