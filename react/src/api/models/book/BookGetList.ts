/* oxlint-disable */

import type { AcroStackBooksBookType } from "../acroStack/books/BookType";
import type { PagedResultDtoOfAcroStackBooksBookDto } from "../pagedResultDtoOfAcroStack/books/BookDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BookGetListQuery = {
  Filter?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  Type?: AcroStackBooksBookType;
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

export type BookGetListStatus200Plain = PagedResultDtoOfAcroStackBooksBookDto;

export type BookGetListStatus200Json = PagedResultDtoOfAcroStackBooksBookDto;

export type BookGetListStatus200Json2 = PagedResultDtoOfAcroStackBooksBookDto;

export type BookGetListStatus200 =
  | BookGetListStatus200Plain
  | BookGetListStatus200Json
  | BookGetListStatus200Json2;

export type BookGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus400 =
  | BookGetListStatus400Plain
  | BookGetListStatus400Json
  | BookGetListStatus400Json2;

export type BookGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus401 =
  | BookGetListStatus401Plain
  | BookGetListStatus401Json
  | BookGetListStatus401Json2;

export type BookGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus403 =
  | BookGetListStatus403Plain
  | BookGetListStatus403Json
  | BookGetListStatus403Json2;

export type BookGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus404 =
  | BookGetListStatus404Plain
  | BookGetListStatus404Json
  | BookGetListStatus404Json2;

export type BookGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus500 =
  | BookGetListStatus500Plain
  | BookGetListStatus500Json
  | BookGetListStatus500Json2;

export type BookGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus501 =
  | BookGetListStatus501Plain
  | BookGetListStatus501Json
  | BookGetListStatus501Json2;

export type BookGetListOptions = {
  body?: never;
  path?: never;
  query?: BookGetListQuery;
  headers?: never;
};

export type BookGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BookGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BookGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BookGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BookGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BookGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BookGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BookGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BookGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BookGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BookGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BookGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BookGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BookGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BookGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BookGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BookGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BookGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BookGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BookGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BookGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BookGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BookGetListResponse =
  | BookGetListStatus200
  | BookGetListStatus400
  | BookGetListStatus401
  | BookGetListStatus403
  | BookGetListStatus404
  | BookGetListStatus500
  | BookGetListStatus501;
