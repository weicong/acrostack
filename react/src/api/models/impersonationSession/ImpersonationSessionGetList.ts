/* oxlint-disable */

import type { PagedResultDtoOfAcroStackAccountProImpersonationSessionDto } from "../pagedResultDtoOfAcroStack/accountPro/ImpersonationSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ImpersonationSessionGetListQuery = {
  /**
   * @description 按模拟者（管理员）过滤。
   *
   * Format: `uuid`
   * @type string | undefined
   */
  ImpersonatorUserId?: string;
  /**
   * @description 按被模拟用户过滤。
   *
   * Format: `uuid`
   * @type string | undefined
   */
  TargetUserId?: string;
  /**
   * @description 会话创建时间的起始值。
   *
   * Format: `date-time`
   * @type string | undefined
   */
  StartTime?: string;
  /**
   * @description 会话创建时间的截止值。
   *
   * Format: `date-time`
   * @type string | undefined
   */
  EndTime?: string;
  /**
   * @description 仅列出进行中（`true`）或已结束（`false`）的会话；\r\n为 `null` 时不过滤。
   * @type boolean | undefined
   */
  IsActive?: boolean;
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

export type ImpersonationSessionGetListStatus200Plain =
  PagedResultDtoOfAcroStackAccountProImpersonationSessionDto;

export type ImpersonationSessionGetListStatus200Json =
  PagedResultDtoOfAcroStackAccountProImpersonationSessionDto;

export type ImpersonationSessionGetListStatus200Json2 =
  PagedResultDtoOfAcroStackAccountProImpersonationSessionDto;

export type ImpersonationSessionGetListStatus200 =
  | ImpersonationSessionGetListStatus200Plain
  | ImpersonationSessionGetListStatus200Json
  | ImpersonationSessionGetListStatus200Json2;

export type ImpersonationSessionGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus400 =
  | ImpersonationSessionGetListStatus400Plain
  | ImpersonationSessionGetListStatus400Json
  | ImpersonationSessionGetListStatus400Json2;

export type ImpersonationSessionGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus401 =
  | ImpersonationSessionGetListStatus401Plain
  | ImpersonationSessionGetListStatus401Json
  | ImpersonationSessionGetListStatus401Json2;

export type ImpersonationSessionGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus403 =
  | ImpersonationSessionGetListStatus403Plain
  | ImpersonationSessionGetListStatus403Json
  | ImpersonationSessionGetListStatus403Json2;

export type ImpersonationSessionGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus404 =
  | ImpersonationSessionGetListStatus404Plain
  | ImpersonationSessionGetListStatus404Json
  | ImpersonationSessionGetListStatus404Json2;

export type ImpersonationSessionGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus500 =
  | ImpersonationSessionGetListStatus500Plain
  | ImpersonationSessionGetListStatus500Json
  | ImpersonationSessionGetListStatus500Json2;

export type ImpersonationSessionGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ImpersonationSessionGetListStatus501 =
  | ImpersonationSessionGetListStatus501Plain
  | ImpersonationSessionGetListStatus501Json
  | ImpersonationSessionGetListStatus501Json2;

export type ImpersonationSessionGetListOptions = {
  body?: never;
  path?: never;
  query?: ImpersonationSessionGetListQuery;
  headers?: never;
};

export type ImpersonationSessionGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ImpersonationSessionGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ImpersonationSessionGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ImpersonationSessionGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ImpersonationSessionGetListResponse =
  | ImpersonationSessionGetListStatus200
  | ImpersonationSessionGetListStatus400
  | ImpersonationSessionGetListStatus401
  | ImpersonationSessionGetListStatus403
  | ImpersonationSessionGetListStatus404
  | ImpersonationSessionGetListStatus500
  | ImpersonationSessionGetListStatus501;
