/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1ClassroomDtosClassSessionDtoClassroomApplicationContractsVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Classroom/dtos/classSessionDtoClassroom/application/ContractsVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionGetListQuery = {
  Sorting?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  SkipCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  MaxResultCount?: number;
};

export type ClassSessionGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1ClassroomDtosClassSessionDtoClassroomApplicationContractsVersion1000CultureneutralPublicKeyTokennull;

export type ClassSessionGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1ClassroomDtosClassSessionDtoClassroomApplicationContractsVersion1000CultureneutralPublicKeyTokennull;

export type ClassSessionGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1ClassroomDtosClassSessionDtoClassroomApplicationContractsVersion1000CultureneutralPublicKeyTokennull;

export type ClassSessionGetListStatus200 =
  | ClassSessionGetListStatus200Plain
  | ClassSessionGetListStatus200Json
  | ClassSessionGetListStatus200Json2;

export type ClassSessionGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus400 =
  | ClassSessionGetListStatus400Plain
  | ClassSessionGetListStatus400Json
  | ClassSessionGetListStatus400Json2;

export type ClassSessionGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus401 =
  | ClassSessionGetListStatus401Plain
  | ClassSessionGetListStatus401Json
  | ClassSessionGetListStatus401Json2;

export type ClassSessionGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus403 =
  | ClassSessionGetListStatus403Plain
  | ClassSessionGetListStatus403Json
  | ClassSessionGetListStatus403Json2;

export type ClassSessionGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus404 =
  | ClassSessionGetListStatus404Plain
  | ClassSessionGetListStatus404Json
  | ClassSessionGetListStatus404Json2;

export type ClassSessionGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus500 =
  | ClassSessionGetListStatus500Plain
  | ClassSessionGetListStatus500Json
  | ClassSessionGetListStatus500Json2;

export type ClassSessionGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetListStatus501 =
  | ClassSessionGetListStatus501Plain
  | ClassSessionGetListStatus501Json
  | ClassSessionGetListStatus501Json2;

export type ClassSessionGetListOptions = {
  body?: never;
  path?: never;
  query?: ClassSessionGetListQuery;
  headers?: never;
};

export type ClassSessionGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionGetListResponse =
  | ClassSessionGetListStatus200
  | ClassSessionGetListStatus400
  | ClassSessionGetListStatus401
  | ClassSessionGetListStatus403
  | ClassSessionGetListStatus404
  | ClassSessionGetListStatus500
  | ClassSessionGetListStatus501;
