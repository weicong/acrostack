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

/**
 * @description 学员快照（提示词九节：当前状态/当前题/EndsAt/本人提交状态/本人最终答案/公布标记/版本号）。
 * @type object
 */
export type ClassroomStudentGetSnapshotStatus200Plain = ClassroomDtosStudentSnapshotDto;

/**
 * @description 学员快照（提示词九节：当前状态/当前题/EndsAt/本人提交状态/本人最终答案/公布标记/版本号）。
 * @type object
 */
export type ClassroomStudentGetSnapshotStatus200Json = ClassroomDtosStudentSnapshotDto;

/**
 * @description 学员快照（提示词九节：当前状态/当前题/EndsAt/本人提交状态/本人最终答案/公布标记/版本号）。
 * @type object
 */
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
