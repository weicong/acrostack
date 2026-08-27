/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentSubmitAnswerOptions,
  ClassroomStudentSubmitAnswerResponses,
} from "../../models/classroomStudent/ClassroomStudentSubmitAnswer";
import { client } from "../../.kubb/client";

/**
 * @summary 提交或修改答案（幂等：相同 RequestId 返回首次处理结果）。
 * {@link /api/student/class-sessions/:id/answers}
 */
export function classroomStudentSubmitAnswer<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentSubmitAnswerOptions, ThrowOnError>,
): Promise<RequestResult<ClassroomStudentSubmitAnswerResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/student/class-sessions/{id}/answers",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassroomStudentSubmitAnswerResponses, ThrowOnError>>;
}
