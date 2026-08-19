/* oxlint-disable */

import type { AcroStackBooksBookDto } from "../acroStack/books/BookDto";
import type { AcroStackBooksCreateUpdateBookDto } from "../acroStack/books/CreateUpdateBookDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BookCreateStatus200Plain = AcroStackBooksBookDto;

export type BookCreateStatus200Json = AcroStackBooksBookDto;

export type BookCreateStatus200Json2 = AcroStackBooksBookDto;

export type BookCreateStatus200 =
  | BookCreateStatus200Plain
  | BookCreateStatus200Json
  | BookCreateStatus200Json2;

export type BookCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus400 =
  | BookCreateStatus400Plain
  | BookCreateStatus400Json
  | BookCreateStatus400Json2;

export type BookCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus401 =
  | BookCreateStatus401Plain
  | BookCreateStatus401Json
  | BookCreateStatus401Json2;

export type BookCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus403 =
  | BookCreateStatus403Plain
  | BookCreateStatus403Json
  | BookCreateStatus403Json2;

export type BookCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus404 =
  | BookCreateStatus404Plain
  | BookCreateStatus404Json
  | BookCreateStatus404Json2;

export type BookCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus500 =
  | BookCreateStatus500Plain
  | BookCreateStatus500Json
  | BookCreateStatus500Json2;

export type BookCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus501 =
  | BookCreateStatus501Plain
  | BookCreateStatus501Json
  | BookCreateStatus501Json2;

export type BookCreateBodyJson = AcroStackBooksCreateUpdateBookDto | undefined;

export type BookCreateBodyJson2 = AcroStackBooksCreateUpdateBookDto | undefined;

export type BookCreateBodyJson3 = AcroStackBooksCreateUpdateBookDto | undefined;

export type BookCreateBody = BookCreateBodyJson | BookCreateBodyJson2 | BookCreateBodyJson3;

export type BookCreateOptions = {
  body: BookCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type BookCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BookCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BookCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BookCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BookCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BookCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BookCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BookCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BookCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BookCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BookCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BookCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BookCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BookCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BookCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BookCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BookCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BookCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BookCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BookCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BookCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BookCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BookCreateResponse =
  | BookCreateStatus200
  | BookCreateStatus400
  | BookCreateStatus401
  | BookCreateStatus403
  | BookCreateStatus404
  | BookCreateStatus500
  | BookCreateStatus501;
