/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackBackgroundJobsBackgroundJobDtoAcroStackBackgroundJobsVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/backgroundJobs/backgroundJobDtoAcroStack/BackgroundJobsVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BackgroundJobGetListQuery = {
  Filter?: string;
  JobName?: string;
  IsAbandoned?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  StartCreationTime?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  EndCreationTime?: string;
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

export type BackgroundJobGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackBackgroundJobsBackgroundJobDtoAcroStackBackgroundJobsVersion1000CultureneutralPublicKeyTokennull;

export type BackgroundJobGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackBackgroundJobsBackgroundJobDtoAcroStackBackgroundJobsVersion1000CultureneutralPublicKeyTokennull;

export type BackgroundJobGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackBackgroundJobsBackgroundJobDtoAcroStackBackgroundJobsVersion1000CultureneutralPublicKeyTokennull;

export type BackgroundJobGetListStatus200 =
  | BackgroundJobGetListStatus200Plain
  | BackgroundJobGetListStatus200Json
  | BackgroundJobGetListStatus200Json2;

export type BackgroundJobGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus400 =
  | BackgroundJobGetListStatus400Plain
  | BackgroundJobGetListStatus400Json
  | BackgroundJobGetListStatus400Json2;

export type BackgroundJobGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus401 =
  | BackgroundJobGetListStatus401Plain
  | BackgroundJobGetListStatus401Json
  | BackgroundJobGetListStatus401Json2;

export type BackgroundJobGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus403 =
  | BackgroundJobGetListStatus403Plain
  | BackgroundJobGetListStatus403Json
  | BackgroundJobGetListStatus403Json2;

export type BackgroundJobGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus404 =
  | BackgroundJobGetListStatus404Plain
  | BackgroundJobGetListStatus404Json
  | BackgroundJobGetListStatus404Json2;

export type BackgroundJobGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus500 =
  | BackgroundJobGetListStatus500Plain
  | BackgroundJobGetListStatus500Json
  | BackgroundJobGetListStatus500Json2;

export type BackgroundJobGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus501 =
  | BackgroundJobGetListStatus501Plain
  | BackgroundJobGetListStatus501Json
  | BackgroundJobGetListStatus501Json2;

export type BackgroundJobGetListOptions = {
  body?: never;
  path?: never;
  query?: BackgroundJobGetListQuery;
  headers?: never;
};

export type BackgroundJobGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BackgroundJobGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BackgroundJobGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BackgroundJobGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BackgroundJobGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BackgroundJobGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BackgroundJobGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BackgroundJobGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BackgroundJobGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BackgroundJobGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BackgroundJobGetListResponse =
  | BackgroundJobGetListStatus200
  | BackgroundJobGetListStatus400
  | BackgroundJobGetListStatus401
  | BackgroundJobGetListStatus403
  | BackgroundJobGetListStatus404
  | BackgroundJobGetListStatus500
  | BackgroundJobGetListStatus501;
