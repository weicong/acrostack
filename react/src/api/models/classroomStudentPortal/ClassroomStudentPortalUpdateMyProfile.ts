/* oxlint-disable */

import type { ClassroomDtosStudentProfileDto } from "../classroom/dtos/StudentProfileDto";
import type { ClassroomDtosUpdateStudentProfileInputDto } from "../classroom/dtos/UpdateStudentProfileInputDto";

/**
 * @description 学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。
 * @type object
 */
export type ClassroomStudentPortalUpdateMyProfileStatus200Plain = ClassroomDtosStudentProfileDto;

/**
 * @description 学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。
 * @type object
 */
export type ClassroomStudentPortalUpdateMyProfileStatus200Json = ClassroomDtosStudentProfileDto;

/**
 * @description 学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。
 * @type object
 */
export type ClassroomStudentPortalUpdateMyProfileStatus200Json2 = ClassroomDtosStudentProfileDto;

export type ClassroomStudentPortalUpdateMyProfileStatus200 =
  | ClassroomStudentPortalUpdateMyProfileStatus200Plain
  | ClassroomStudentPortalUpdateMyProfileStatus200Json
  | ClassroomStudentPortalUpdateMyProfileStatus200Json2;

/**
 * @description 更新本人资料。手机号为身份锚点，不可修改。
 * @type object | undefined
 */
export type ClassroomStudentPortalUpdateMyProfileBodyJson =
  | ClassroomDtosUpdateStudentProfileInputDto
  | undefined;

/**
 * @description 更新本人资料。手机号为身份锚点，不可修改。
 * @type object | undefined
 */
export type ClassroomStudentPortalUpdateMyProfileBodyJson2 =
  | ClassroomDtosUpdateStudentProfileInputDto
  | undefined;

/**
 * @description 更新本人资料。手机号为身份锚点，不可修改。
 * @type object | undefined
 */
export type ClassroomStudentPortalUpdateMyProfileBodyJson3 =
  | ClassroomDtosUpdateStudentProfileInputDto
  | undefined;

export type ClassroomStudentPortalUpdateMyProfileBody =
  | ClassroomStudentPortalUpdateMyProfileBodyJson
  | ClassroomStudentPortalUpdateMyProfileBodyJson2
  | ClassroomStudentPortalUpdateMyProfileBodyJson3;

export type ClassroomStudentPortalUpdateMyProfileOptions = {
  body: ClassroomStudentPortalUpdateMyProfileBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type ClassroomStudentPortalUpdateMyProfileResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentPortalUpdateMyProfileStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentPortalUpdateMyProfileStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentPortalUpdateMyProfileStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentPortalUpdateMyProfileResponse =
  ClassroomStudentPortalUpdateMyProfileStatus200;
