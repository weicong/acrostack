/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentPortalGetMyClassroomsOptions,
  ClassroomStudentPortalGetMyClassroomsResponses,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalGetMyClassrooms";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 加入过的课堂列表（进行中的排前）。
 * {@link /api/student-portal/my/classrooms}
 */
export function classroomStudentPortalGetMyClassrooms<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentPortalGetMyClassroomsOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ClassroomStudentPortalGetMyClassroomsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/student-portal/my/classrooms",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomStudentPortalGetMyClassroomsResponses, ThrowOnError>>,
  );
}
