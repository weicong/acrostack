/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionPublishStatisticsPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  questionId: string;
};

export type ClassSessionPublishStatisticsStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionPublishStatisticsStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionPublishStatisticsStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionPublishStatisticsStatus200 =
  | ClassSessionPublishStatisticsStatus200Plain
  | ClassSessionPublishStatisticsStatus200Json
  | ClassSessionPublishStatisticsStatus200Json2;

export type ClassSessionPublishStatisticsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus400 =
  | ClassSessionPublishStatisticsStatus400Plain
  | ClassSessionPublishStatisticsStatus400Json
  | ClassSessionPublishStatisticsStatus400Json2;

export type ClassSessionPublishStatisticsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus401 =
  | ClassSessionPublishStatisticsStatus401Plain
  | ClassSessionPublishStatisticsStatus401Json
  | ClassSessionPublishStatisticsStatus401Json2;

export type ClassSessionPublishStatisticsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus403 =
  | ClassSessionPublishStatisticsStatus403Plain
  | ClassSessionPublishStatisticsStatus403Json
  | ClassSessionPublishStatisticsStatus403Json2;

export type ClassSessionPublishStatisticsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus404 =
  | ClassSessionPublishStatisticsStatus404Plain
  | ClassSessionPublishStatisticsStatus404Json
  | ClassSessionPublishStatisticsStatus404Json2;

export type ClassSessionPublishStatisticsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus500 =
  | ClassSessionPublishStatisticsStatus500Plain
  | ClassSessionPublishStatisticsStatus500Json
  | ClassSessionPublishStatisticsStatus500Json2;

export type ClassSessionPublishStatisticsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishStatisticsStatus501 =
  | ClassSessionPublishStatisticsStatus501Plain
  | ClassSessionPublishStatisticsStatus501Json
  | ClassSessionPublishStatisticsStatus501Json2;

export type ClassSessionPublishStatisticsOptions = {
  body?: never;
  path: ClassSessionPublishStatisticsPath;
  query?: never;
  headers?: never;
};

export type ClassSessionPublishStatisticsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishStatisticsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishStatisticsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishStatisticsStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishStatisticsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishStatisticsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishStatisticsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishStatisticsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishStatisticsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishStatisticsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishStatisticsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishStatisticsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishStatisticsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishStatisticsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishStatisticsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishStatisticsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishStatisticsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishStatisticsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishStatisticsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishStatisticsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishStatisticsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishStatisticsStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionPublishStatisticsResponse =
  | ClassSessionPublishStatisticsStatus200
  | ClassSessionPublishStatisticsStatus400
  | ClassSessionPublishStatisticsStatus401
  | ClassSessionPublishStatisticsStatus403
  | ClassSessionPublishStatisticsStatus404
  | ClassSessionPublishStatisticsStatus500
  | ClassSessionPublishStatisticsStatus501;
