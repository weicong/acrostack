/* oxlint-disable */

import type { ClassroomDtosMyClassroomItemDto } from "../classroom/dtos/MyClassroomItemDto";

export type ClassroomStudentPortalGetMyClassroomsStatus200Plain = ClassroomDtosMyClassroomItemDto[];

export type ClassroomStudentPortalGetMyClassroomsStatus200Json = ClassroomDtosMyClassroomItemDto[];

export type ClassroomStudentPortalGetMyClassroomsStatus200Json2 = ClassroomDtosMyClassroomItemDto[];

export type ClassroomStudentPortalGetMyClassroomsStatus200 =
  | ClassroomStudentPortalGetMyClassroomsStatus200Plain
  | ClassroomStudentPortalGetMyClassroomsStatus200Json
  | ClassroomStudentPortalGetMyClassroomsStatus200Json2;

export type ClassroomStudentPortalGetMyClassroomsOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type ClassroomStudentPortalGetMyClassroomsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentPortalGetMyClassroomsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentPortalGetMyClassroomsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentPortalGetMyClassroomsStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentPortalGetMyClassroomsResponse =
  ClassroomStudentPortalGetMyClassroomsStatus200;
