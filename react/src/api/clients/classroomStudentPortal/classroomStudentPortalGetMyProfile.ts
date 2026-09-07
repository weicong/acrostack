/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentPortalGetMyProfileOptions,
  ClassroomStudentPortalGetMyProfileResponses,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalGetMyProfile";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 本人资料。
 * {@link /api/student-portal/me}
 */
export function classroomStudentPortalGetMyProfile<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentPortalGetMyProfileOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ClassroomStudentPortalGetMyProfileResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/student-portal/me",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomStudentPortalGetMyProfileResponses, ThrowOnError>>,
  );
}
