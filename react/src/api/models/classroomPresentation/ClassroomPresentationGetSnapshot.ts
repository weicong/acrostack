/* oxlint-disable */

import type { ClassroomDtosPresentationSnapshotDto } from "../classroom/dtos/PresentationSnapshotDto";

export type ClassroomPresentationGetSnapshotPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

/**
 * @description 投屏快照：仅匿名数据。禁止包含学员姓名、学号、ParticipantId、个人答案\r\n（提示词五、六节）。
 * @type object
 */
export type ClassroomPresentationGetSnapshotStatus200Plain = ClassroomDtosPresentationSnapshotDto;

/**
 * @description 投屏快照：仅匿名数据。禁止包含学员姓名、学号、ParticipantId、个人答案\r\n（提示词五、六节）。
 * @type object
 */
export type ClassroomPresentationGetSnapshotStatus200Json = ClassroomDtosPresentationSnapshotDto;

/**
 * @description 投屏快照：仅匿名数据。禁止包含学员姓名、学号、ParticipantId、个人答案\r\n（提示词五、六节）。
 * @type object
 */
export type ClassroomPresentationGetSnapshotStatus200Json2 = ClassroomDtosPresentationSnapshotDto;

export type ClassroomPresentationGetSnapshotStatus200 =
  | ClassroomPresentationGetSnapshotStatus200Plain
  | ClassroomPresentationGetSnapshotStatus200Json
  | ClassroomPresentationGetSnapshotStatus200Json2;

export type ClassroomPresentationGetSnapshotOptions = {
  body?: never;
  path: ClassroomPresentationGetSnapshotPath;
  query?: never;
  headers?: never;
};

export type ClassroomPresentationGetSnapshotResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomPresentationGetSnapshotStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomPresentationGetSnapshotStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomPresentationGetSnapshotStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomPresentationGetSnapshotResponse = ClassroomPresentationGetSnapshotStatus200;
