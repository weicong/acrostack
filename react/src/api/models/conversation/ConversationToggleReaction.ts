/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ConversationToggleReactionPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  messageId: string;
};

export type ConversationToggleReactionQuery = {
  reaction?: string;
};

export type ConversationToggleReactionStatus200Plain = boolean;

export type ConversationToggleReactionStatus200Json = boolean;

export type ConversationToggleReactionStatus200Json2 = boolean;

export type ConversationToggleReactionStatus200 =
  | ConversationToggleReactionStatus200Plain
  | ConversationToggleReactionStatus200Json
  | ConversationToggleReactionStatus200Json2;

export type ConversationToggleReactionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus400 =
  | ConversationToggleReactionStatus400Plain
  | ConversationToggleReactionStatus400Json
  | ConversationToggleReactionStatus400Json2;

export type ConversationToggleReactionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus401 =
  | ConversationToggleReactionStatus401Plain
  | ConversationToggleReactionStatus401Json
  | ConversationToggleReactionStatus401Json2;

export type ConversationToggleReactionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus403 =
  | ConversationToggleReactionStatus403Plain
  | ConversationToggleReactionStatus403Json
  | ConversationToggleReactionStatus403Json2;

export type ConversationToggleReactionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus404 =
  | ConversationToggleReactionStatus404Plain
  | ConversationToggleReactionStatus404Json
  | ConversationToggleReactionStatus404Json2;

export type ConversationToggleReactionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus500 =
  | ConversationToggleReactionStatus500Plain
  | ConversationToggleReactionStatus500Json
  | ConversationToggleReactionStatus500Json2;

export type ConversationToggleReactionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationToggleReactionStatus501 =
  | ConversationToggleReactionStatus501Plain
  | ConversationToggleReactionStatus501Json
  | ConversationToggleReactionStatus501Json2;

export type ConversationToggleReactionOptions = {
  body?: never;
  path: ConversationToggleReactionPath;
  query?: ConversationToggleReactionQuery;
  headers?: never;
};

export type ConversationToggleReactionResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ConversationToggleReactionStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationToggleReactionStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ConversationToggleReactionStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ConversationToggleReactionStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationToggleReactionStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ConversationToggleReactionStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ConversationToggleReactionStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationToggleReactionStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ConversationToggleReactionStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ConversationToggleReactionStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationToggleReactionStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ConversationToggleReactionStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ConversationToggleReactionStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationToggleReactionStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ConversationToggleReactionStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ConversationToggleReactionStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationToggleReactionStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ConversationToggleReactionStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ConversationToggleReactionStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationToggleReactionStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ConversationToggleReactionStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ConversationToggleReactionResponse =
  | ConversationToggleReactionStatus200
  | ConversationToggleReactionStatus400
  | ConversationToggleReactionStatus401
  | ConversationToggleReactionStatus403
  | ConversationToggleReactionStatus404
  | ConversationToggleReactionStatus500
  | ConversationToggleReactionStatus501;
