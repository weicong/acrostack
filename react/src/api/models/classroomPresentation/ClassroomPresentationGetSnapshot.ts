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

export type ClassroomPresentationGetSnapshotStatus200Plain = ClassroomDtosPresentationSnapshotDto;

export type ClassroomPresentationGetSnapshotStatus200Json = ClassroomDtosPresentationSnapshotDto;

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
