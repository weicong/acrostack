/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentPortalResumeClassroomOptions,
  ClassroomStudentPortalResumeClassroomResponses,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalResumeClassroom";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 从门户进入课堂：校验会员关系后签发课堂短期令牌。
 * {@link /api/student-portal/my/classrooms/:sessionId/resume}
 */
export function classroomStudentPortalResumeClassroom<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentPortalResumeClassroomOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassroomStudentPortalResumeClassroomResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/student-portal/my/classrooms/{sessionId}/resume",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomStudentPortalResumeClassroomResponses, ThrowOnError>>,
  );
}
