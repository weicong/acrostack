/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ConversationMarkAsReadPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  targetUserId: string;
};

export type ConversationMarkAsReadStatus200 = unknown;

export type ConversationMarkAsReadStatus204 = unknown;

export type ConversationMarkAsReadStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus400 =
  | ConversationMarkAsReadStatus400Plain
  | ConversationMarkAsReadStatus400Json
  | ConversationMarkAsReadStatus400Json2;

export type ConversationMarkAsReadStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus401 =
  | ConversationMarkAsReadStatus401Plain
  | ConversationMarkAsReadStatus401Json
  | ConversationMarkAsReadStatus401Json2;

export type ConversationMarkAsReadStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus403 =
  | ConversationMarkAsReadStatus403Plain
  | ConversationMarkAsReadStatus403Json
  | ConversationMarkAsReadStatus403Json2;

export type ConversationMarkAsReadStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus404 =
  | ConversationMarkAsReadStatus404Plain
  | ConversationMarkAsReadStatus404Json
  | ConversationMarkAsReadStatus404Json2;

export type ConversationMarkAsReadStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus500 =
  | ConversationMarkAsReadStatus500Plain
  | ConversationMarkAsReadStatus500Json
  | ConversationMarkAsReadStatus500Json2;

export type ConversationMarkAsReadStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationMarkAsReadStatus501 =
  | ConversationMarkAsReadStatus501Plain
  | ConversationMarkAsReadStatus501Json
  | ConversationMarkAsReadStatus501Json2;

export type ConversationMarkAsReadOptions = {
  body?: never;
  path: ConversationMarkAsReadPath;
  query?: never;
  headers?: never;
};

export type ConversationMarkAsReadResponses = {
  "200": ConversationMarkAsReadStatus200;
  "204": ConversationMarkAsReadStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: ConversationMarkAsReadStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationMarkAsReadStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ConversationMarkAsReadStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ConversationMarkAsReadStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationMarkAsReadStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ConversationMarkAsReadStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ConversationMarkAsReadStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationMarkAsReadStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ConversationMarkAsReadStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ConversationMarkAsReadStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationMarkAsReadStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ConversationMarkAsReadStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ConversationMarkAsReadStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationMarkAsReadStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ConversationMarkAsReadStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ConversationMarkAsReadStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationMarkAsReadStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ConversationMarkAsReadStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ConversationMarkAsReadResponse =
  | ConversationMarkAsReadStatus200
  | ConversationMarkAsReadStatus204
  | ConversationMarkAsReadStatus400
  | ConversationMarkAsReadStatus401
  | ConversationMarkAsReadStatus403
  | ConversationMarkAsReadStatus404
  | ConversationMarkAsReadStatus500
  | ConversationMarkAsReadStatus501;
