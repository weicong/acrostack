/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentPortalGetMyClassroomAnswersOptions,
  ClassroomStudentPortalGetMyClassroomAnswersResponses,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalGetMyClassroomAnswers";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 本人某课堂的答题记录（逐题回顾；正确答案仅公布后下发）。
 * {@link /api/student-portal/my/classrooms/:sessionId/answers}
 */
export function classroomStudentPortalGetMyClassroomAnswers<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentPortalGetMyClassroomAnswersOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassroomStudentPortalGetMyClassroomAnswersResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/student-portal/my/classrooms/{sessionId}/answers",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<
      RequestResult<ClassroomStudentPortalGetMyClassroomAnswersResponses, ThrowOnError>
    >,
  );
}
