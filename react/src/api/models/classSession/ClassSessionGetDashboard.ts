/* oxlint-disable */

import type { ClassroomDtosDashboardDto } from "../classroom/dtos/DashboardDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionGetDashboardPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

/**
 * @description 教师课堂面板数据（提示词五节：在线/总数/各状态人数/统计/最近更新时间等）。
 * @type object
 */
export type ClassSessionGetDashboardStatus200Plain = ClassroomDtosDashboardDto;

/**
 * @description 教师课堂面板数据（提示词五节：在线/总数/各状态人数/统计/最近更新时间等）。
 * @type object
 */
export type ClassSessionGetDashboardStatus200Json = ClassroomDtosDashboardDto;

/**
 * @description 教师课堂面板数据（提示词五节：在线/总数/各状态人数/统计/最近更新时间等）。
 * @type object
 */
export type ClassSessionGetDashboardStatus200Json2 = ClassroomDtosDashboardDto;

export type ClassSessionGetDashboardStatus200 =
  | ClassSessionGetDashboardStatus200Plain
  | ClassSessionGetDashboardStatus200Json
  | ClassSessionGetDashboardStatus200Json2;

export type ClassSessionGetDashboardStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus400 =
  | ClassSessionGetDashboardStatus400Plain
  | ClassSessionGetDashboardStatus400Json
  | ClassSessionGetDashboardStatus400Json2;

export type ClassSessionGetDashboardStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus401 =
  | ClassSessionGetDashboardStatus401Plain
  | ClassSessionGetDashboardStatus401Json
  | ClassSessionGetDashboardStatus401Json2;

export type ClassSessionGetDashboardStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus403 =
  | ClassSessionGetDashboardStatus403Plain
  | ClassSessionGetDashboardStatus403Json
  | ClassSessionGetDashboardStatus403Json2;

export type ClassSessionGetDashboardStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus404 =
  | ClassSessionGetDashboardStatus404Plain
  | ClassSessionGetDashboardStatus404Json
  | ClassSessionGetDashboardStatus404Json2;

export type ClassSessionGetDashboardStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus500 =
  | ClassSessionGetDashboardStatus500Plain
  | ClassSessionGetDashboardStatus500Json
  | ClassSessionGetDashboardStatus500Json2;

export type ClassSessionGetDashboardStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetDashboardStatus501 =
  | ClassSessionGetDashboardStatus501Plain
  | ClassSessionGetDashboardStatus501Json
  | ClassSessionGetDashboardStatus501Json2;

export type ClassSessionGetDashboardOptions = {
  body?: never;
  path: ClassSessionGetDashboardPath;
  query?: never;
  headers?: never;
};

export type ClassSessionGetDashboardResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionGetDashboardStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetDashboardStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetDashboardStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionGetDashboardStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetDashboardStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetDashboardStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionGetDashboardStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetDashboardStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetDashboardStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionGetDashboardStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetDashboardStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetDashboardStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionGetDashboardStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetDashboardStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetDashboardStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionGetDashboardStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetDashboardStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetDashboardStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionGetDashboardStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetDashboardStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetDashboardStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionGetDashboardResponse =
  | ClassSessionGetDashboardStatus200
  | ClassSessionGetDashboardStatus400
  | ClassSessionGetDashboardStatus401
  | ClassSessionGetDashboardStatus403
  | ClassSessionGetDashboardStatus404
  | ClassSessionGetDashboardStatus500
  | ClassSessionGetDashboardStatus501;
