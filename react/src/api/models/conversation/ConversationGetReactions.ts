/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackChatChatMessageReactionDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/chat/chatMessageReactionDtoAcroStack/ChatVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ConversationGetReactionsPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  messageId: string;
};

export type ConversationGetReactionsStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackChatChatMessageReactionDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetReactionsStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackChatChatMessageReactionDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetReactionsStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackChatChatMessageReactionDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetReactionsStatus200 =
  | ConversationGetReactionsStatus200Plain
  | ConversationGetReactionsStatus200Json
  | ConversationGetReactionsStatus200Json2;

export type ConversationGetReactionsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus400 =
  | ConversationGetReactionsStatus400Plain
  | ConversationGetReactionsStatus400Json
  | ConversationGetReactionsStatus400Json2;

export type ConversationGetReactionsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus401 =
  | ConversationGetReactionsStatus401Plain
  | ConversationGetReactionsStatus401Json
  | ConversationGetReactionsStatus401Json2;

export type ConversationGetReactionsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus403 =
  | ConversationGetReactionsStatus403Plain
  | ConversationGetReactionsStatus403Json
  | ConversationGetReactionsStatus403Json2;

export type ConversationGetReactionsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus404 =
  | ConversationGetReactionsStatus404Plain
  | ConversationGetReactionsStatus404Json
  | ConversationGetReactionsStatus404Json2;

export type ConversationGetReactionsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus500 =
  | ConversationGetReactionsStatus500Plain
  | ConversationGetReactionsStatus500Json
  | ConversationGetReactionsStatus500Json2;

export type ConversationGetReactionsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetReactionsStatus501 =
  | ConversationGetReactionsStatus501Plain
  | ConversationGetReactionsStatus501Json
  | ConversationGetReactionsStatus501Json2;

export type ConversationGetReactionsOptions = {
  body?: never;
  path: ConversationGetReactionsPath;
  query?: never;
  headers?: never;
};

export type ConversationGetReactionsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ConversationGetReactionsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetReactionsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetReactionsStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ConversationGetReactionsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetReactionsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetReactionsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ConversationGetReactionsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetReactionsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetReactionsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ConversationGetReactionsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetReactionsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetReactionsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ConversationGetReactionsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetReactionsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetReactionsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ConversationGetReactionsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetReactionsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetReactionsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ConversationGetReactionsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetReactionsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetReactionsStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ConversationGetReactionsResponse =
  | ConversationGetReactionsStatus200
  | ConversationGetReactionsStatus400
  | ConversationGetReactionsStatus401
  | ConversationGetReactionsStatus403
  | ConversationGetReactionsStatus404
  | ConversationGetReactionsStatus500
  | ConversationGetReactionsStatus501;
