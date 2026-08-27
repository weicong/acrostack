/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassroomPublicJoinOptions,
  ClassroomPublicJoinResponses,
} from "../../models/classroomPublic/ClassroomPublicJoin";
import { client } from "../../.kubb/client";

/**
 * @summary 加入课堂：校验课堂码 -> 创建 Participant -> 签发课堂范围短期令牌。
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
