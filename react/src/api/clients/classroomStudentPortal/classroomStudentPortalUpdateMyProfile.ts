/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassroomStudentPortalUpdateMyProfileOptions,
  ClassroomStudentPortalUpdateMyProfileResponses,
} from "../../models/classroomStudentPortal/ClassroomStudentPortalUpdateMyProfile";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * @summary 更新本人资料（姓名/单位/职务；手机号不可改）。
 * {@link /api/student-portal/me}
 */
export function classroomStudentPortalUpdateMyProfile<ThrowOnError extends boolean = true>(
  options: Options<ClassroomStudentPortalUpdateMyProfileOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassroomStudentPortalUpdateMyProfileResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/student-portal/me",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassroomStudentPortalUpdateMyProfileResponses, ThrowOnError>>,
  );
}
