/* oxlint-disable */

import type { ClassroomDtosJoinClassroomInputDto } from "../classroom/dtos/JoinClassroomInputDto";
import type { ClassroomDtosJoinResultDto } from "../classroom/dtos/JoinResultDto";

export type ClassroomPublicJoinStatus200Plain = ClassroomDtosJoinResultDto;

export type ClassroomPublicJoinStatus200Json = ClassroomDtosJoinResultDto;

export type ClassroomPublicJoinStatus200Json2 = ClassroomDtosJoinResultDto;

export type ClassroomPublicJoinStatus200 =
  | ClassroomPublicJoinStatus200Plain
  | ClassroomPublicJoinStatus200Json
  | ClassroomPublicJoinStatus200Json2;

export type ClassroomPublicJoinBodyJson = ClassroomDtosJoinClassroomInputDto | undefined;

export type ClassroomPublicJoinBodyJson2 = ClassroomDtosJoinClassroomInputDto | undefined;

export type ClassroomPublicJoinBodyJson3 = ClassroomDtosJoinClassroomInputDto | undefined;

export type ClassroomPublicJoinBody =
  | ClassroomPublicJoinBodyJson
  | ClassroomPublicJoinBodyJson2
  | ClassroomPublicJoinBodyJson3;

export type ClassroomPublicJoinOptions = {
  body: ClassroomPublicJoinBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type ClassroomPublicJoinResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomPublicJoinStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomPublicJoinStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomPublicJoinStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomPublicJoinResponse = ClassroomPublicJoinStatus200;
