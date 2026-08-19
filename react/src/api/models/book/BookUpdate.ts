/* oxlint-disable */

import type { AcroStackBooksBookDto } from "../acroStack/books/BookDto";
import type { AcroStackBooksCreateUpdateBookDto } from "../acroStack/books/CreateUpdateBookDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BookUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BookUpdateStatus200Plain = AcroStackBooksBookDto;

export type BookUpdateStatus200Json = AcroStackBooksBookDto;

export type BookUpdateStatus200Json2 = AcroStackBooksBookDto;

export type BookUpdateStatus200 =
  | BookUpdateStatus200Plain
  | BookUpdateStatus200Json
  | BookUpdateStatus200Json2;

export type BookUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus400 =
  | BookUpdateStatus400Plain
  | BookUpdateStatus400Json
  | BookUpdateStatus400Json2;

export type BookUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus401 =
  | BookUpdateStatus401Plain
  | BookUpdateStatus401Json
  | BookUpdateStatus401Json2;

export type BookUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus403 =
  | BookUpdateStatus403Plain
  | BookUpdateStatus403Json
  | BookUpdateStatus403Json2;

export type BookUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus404 =
  | BookUpdateStatus404Plain
  | BookUpdateStatus404Json
  | BookUpdateStatus404Json2;

export type BookUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus500 =
  | BookUpdateStatus500Plain
  | BookUpdateStatus500Json
  | BookUpdateStatus500Json2;

export type BookUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus501 =
  | BookUpdateStatus501Plain
  | BookUpdateStatus501Json
  | BookUpdateStatus501Json2;

export type BookUpdateBodyJson = AcroStackBooksCreateUpdateBookDto | undefined;

export type BookUpdateBodyJson2 = AcroStackBooksCreateUpdateBookDto | undefined;

export type BookUpdateBodyJson3 = AcroStackBooksCreateUpdateBookDto | undefined;

export type BookUpdateBody = BookUpdateBodyJson | BookUpdateBodyJson2 | BookUpdateBodyJson3;

export type BookUpdateOptions = {
  body: BookUpdateBody;
  path: BookUpdatePath;
  query?: never;
  headers?: never;
};

export type BookUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BookUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BookUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BookUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BookUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BookUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BookUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BookUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BookUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BookUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BookUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BookUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BookUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BookUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BookUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BookUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BookUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BookUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BookUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BookUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BookUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BookUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BookUpdateResponse =
  | BookUpdateStatus200
  | BookUpdateStatus400
  | BookUpdateStatus401
  | BookUpdateStatus403
  | BookUpdateStatus404
  | BookUpdateStatus500
  | BookUpdateStatus501;
