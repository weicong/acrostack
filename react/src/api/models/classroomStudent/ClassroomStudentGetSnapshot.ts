/* oxlint-disable */

import type { ClassroomDtosStudentSnapshotDto } from "../classroom/dtos/StudentSnapshotDto";

export type ClassroomStudentGetSnapshotPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassroomStudentGetSnapshotStatus200Plain = ClassroomDtosStudentSnapshotDto;

export type ClassroomStudentGetSnapshotStatus200Json = ClassroomDtosStudentSnapshotDto;

export type ClassroomStudentGetSnapshotStatus200Json2 = ClassroomDtosStudentSnapshotDto;

export type ClassroomStudentGetSnapshotStatus200 =
  | ClassroomStudentGetSnapshotStatus200Plain
  | ClassroomStudentGetSnapshotStatus200Json
  | ClassroomStudentGetSnapshotStatus200Json2;

export type ClassroomStudentGetSnapshotOptions = {
  body?: never;
  path: ClassroomStudentGetSnapshotPath;
  query?: never;
  headers?: never;
};

export type ClassroomStudentGetSnapshotResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentGetSnapshotStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentGetSnapshotStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentGetSnapshotStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentGetSnapshotResponse = ClassroomStudentGetSnapshotStatus200;
