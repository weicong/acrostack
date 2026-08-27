/* oxlint-disable */

import type { ListResultDtoOfAcroStackChatConversationDto } from "../listResultDtoOfAcroStack/chat/ConversationDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ConversationGetListStatus200Plain = ListResultDtoOfAcroStackChatConversationDto;

export type ConversationGetListStatus200Json = ListResultDtoOfAcroStackChatConversationDto;

export type ConversationGetListStatus200Json2 = ListResultDtoOfAcroStackChatConversationDto;

export type ConversationGetListStatus200 =
  | ConversationGetListStatus200Plain
  | ConversationGetListStatus200Json
  | ConversationGetListStatus200Json2;

export type ConversationGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus400 =
  | ConversationGetListStatus400Plain
  | ConversationGetListStatus400Json
  | ConversationGetListStatus400Json2;

export type ConversationGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus401 =
  | ConversationGetListStatus401Plain
  | ConversationGetListStatus401Json
  | ConversationGetListStatus401Json2;

export type ConversationGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus403 =
  | ConversationGetListStatus403Plain
  | ConversationGetListStatus403Json
  | ConversationGetListStatus403Json2;

export type ConversationGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus404 =
  | ConversationGetListStatus404Plain
  | ConversationGetListStatus404Json
  | ConversationGetListStatus404Json2;

export type ConversationGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus500 =
  | ConversationGetListStatus500Plain
  | ConversationGetListStatus500Json
  | ConversationGetListStatus500Json2;

export type ConversationGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetListStatus501 =
  | ConversationGetListStatus501Plain
  | ConversationGetListStatus501Json
  | ConversationGetListStatus501Json2;

export type ConversationGetListOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type ConversationGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ConversationGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ConversationGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ConversationGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ConversationGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ConversationGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ConversationGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ConversationGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ConversationGetListResponse =
  | ConversationGetListStatus200
  | ConversationGetListStatus400
  | ConversationGetListStatus401
  | ConversationGetListStatus403
  | ConversationGetListStatus404
  | ConversationGetListStatus500
  | ConversationGetListStatus501;
