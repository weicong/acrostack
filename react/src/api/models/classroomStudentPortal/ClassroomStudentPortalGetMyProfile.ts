/* oxlint-disable */

import type { ClassroomDtosStudentProfileDto } from "../classroom/dtos/StudentProfileDto";

/**
 * @description 学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。
 * @type object
 */
export type ClassroomStudentPortalGetMyProfileStatus200Plain = ClassroomDtosStudentProfileDto;

/**
 * @description 学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。
 * @type object
 */
export type ClassroomStudentPortalGetMyProfileStatus200Json = ClassroomDtosStudentProfileDto;

/**
 * @description 学员档案视图（手机号脱敏由客户端处理；此处返回原值供本人核对）。
 * @type object
 */
export type ClassroomStudentPortalGetMyProfileStatus200Json2 = ClassroomDtosStudentProfileDto;

export type ClassroomStudentPortalGetMyProfileStatus200 =
  | ClassroomStudentPortalGetMyProfileStatus200Plain
  | ClassroomStudentPortalGetMyProfileStatus200Json
  | ClassroomStudentPortalGetMyProfileStatus200Json2;

export type ClassroomStudentPortalGetMyProfileOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type ClassroomStudentPortalGetMyProfileResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentPortalGetMyProfileStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentPortalGetMyProfileStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentPortalGetMyProfileStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentPortalGetMyProfileResponse =
  ClassroomStudentPortalGetMyProfileStatus200;
