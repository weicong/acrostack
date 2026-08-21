/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentGetMyAnswerHistoryOptions,
  ClassroomStudentGetMyAnswerHistoryResponses,
} from "../../models/classroomStudent/ClassroomStudentGetMyAnswerHistory";
import { client } from "../../.kubb/client";

/**
 * {@link /api/student/class-sessions/:id/my-answers}
 */
export function classroomStudentGetMyAnswerHistory<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentGetMyAnswerHistoryOptions, ThrowOnError>,
): Promise<RequestResult<ClassroomStudentGetMyAnswerHistoryResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/student/class-sessions/{id}/my-answers",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassroomStudentGetMyAnswerHistoryResponses, ThrowOnError>>;
}
