/* oxlint-disable */

import type { ClassroomDtosPickRandomParticipantDto } from "../classroom/dtos/PickRandomParticipantDto";
import type { ClassroomDtosPickedParticipantDto } from "../classroom/dtos/PickedParticipantDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionPickRandomParticipantPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

/**
 * @description 随机点名结果（教师端展示；含学号，仅返回给教师）。
 * @type object
 */
export type ClassSessionPickRandomParticipantStatus200Plain = ClassroomDtosPickedParticipantDto;

/**
 * @description 随机点名结果（教师端展示；含学号，仅返回给教师）。
 * @type object
 */
export type ClassSessionPickRandomParticipantStatus200Json = ClassroomDtosPickedParticipantDto;

/**
 * @description 随机点名结果（教师端展示；含学号，仅返回给教师）。
 * @type object
 */
export type ClassSessionPickRandomParticipantStatus200Json2 = ClassroomDtosPickedParticipantDto;

export type ClassSessionPickRandomParticipantStatus200 =
  | ClassSessionPickRandomParticipantStatus200Plain
  | ClassSessionPickRandomParticipantStatus200Json
  | ClassSessionPickRandomParticipantStatus200Json2;

export type ClassSessionPickRandomParticipantStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus400 =
  | ClassSessionPickRandomParticipantStatus400Plain
  | ClassSessionPickRandomParticipantStatus400Json
  | ClassSessionPickRandomParticipantStatus400Json2;

export type ClassSessionPickRandomParticipantStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus401 =
  | ClassSessionPickRandomParticipantStatus401Plain
  | ClassSessionPickRandomParticipantStatus401Json
  | ClassSessionPickRandomParticipantStatus401Json2;

export type ClassSessionPickRandomParticipantStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus403 =
  | ClassSessionPickRandomParticipantStatus403Plain
  | ClassSessionPickRandomParticipantStatus403Json
  | ClassSessionPickRandomParticipantStatus403Json2;

export type ClassSessionPickRandomParticipantStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus404 =
  | ClassSessionPickRandomParticipantStatus404Plain
  | ClassSessionPickRandomParticipantStatus404Json
  | ClassSessionPickRandomParticipantStatus404Json2;

export type ClassSessionPickRandomParticipantStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus500 =
  | ClassSessionPickRandomParticipantStatus500Plain
  | ClassSessionPickRandomParticipantStatus500Json
  | ClassSessionPickRandomParticipantStatus500Json2;

export type ClassSessionPickRandomParticipantStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPickRandomParticipantStatus501 =
  | ClassSessionPickRandomParticipantStatus501Plain
  | ClassSessionPickRandomParticipantStatus501Json
  | ClassSessionPickRandomParticipantStatus501Json2;

/**
 * @description 随机点名入参（服务端无状态：不重复点名由教师端传入本轮已点名单实现）。
 * @type object | undefined
 */
export type ClassSessionPickRandomParticipantBodyJson =
  | ClassroomDtosPickRandomParticipantDto
  | undefined;

/**
 * @description 随机点名入参（服务端无状态：不重复点名由教师端传入本轮已点名单实现）。
 * @type object | undefined
 */
export type ClassSessionPickRandomParticipantBodyJson2 =
  | ClassroomDtosPickRandomParticipantDto
  | undefined;

/**
 * @description 随机点名入参（服务端无状态：不重复点名由教师端传入本轮已点名单实现）。
 * @type object | undefined
 */
export type ClassSessionPickRandomParticipantBodyJson3 =
  | ClassroomDtosPickRandomParticipantDto
  | undefined;

export type ClassSessionPickRandomParticipantBody =
  | ClassSessionPickRandomParticipantBodyJson
  | ClassSessionPickRandomParticipantBodyJson2
  | ClassSessionPickRandomParticipantBodyJson3;

export type ClassSessionPickRandomParticipantOptions = {
  body: ClassSessionPickRandomParticipantBody;
  path: ClassSessionPickRandomParticipantPath;
  query?: never;
  headers?: never;
};

export type ClassSessionPickRandomParticipantResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionPickRandomParticipantStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPickRandomParticipantStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPickRandomParticipantStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionPickRandomParticipantStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPickRandomParticipantStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPickRandomParticipantStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionPickRandomParticipantStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPickRandomParticipantStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPickRandomParticipantStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionPickRandomParticipantStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPickRandomParticipantStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPickRandomParticipantStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionPickRandomParticipantStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPickRandomParticipantStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPickRandomParticipantStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionPickRandomParticipantStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPickRandomParticipantStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPickRandomParticipantStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionPickRandomParticipantStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPickRandomParticipantStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPickRandomParticipantStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionPickRandomParticipantResponse =
  | ClassSessionPickRandomParticipantStatus200
  | ClassSessionPickRandomParticipantStatus400
  | ClassSessionPickRandomParticipantStatus401
  | ClassSessionPickRandomParticipantStatus403
  | ClassSessionPickRandomParticipantStatus404
  | ClassSessionPickRandomParticipantStatus500
  | ClassSessionPickRandomParticipantStatus501;
