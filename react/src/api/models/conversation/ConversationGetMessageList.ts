/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/chat/chatMessageDtoAcroStack/ChatVersion1000CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ConversationGetMessageListQuery = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  TargetUserId?: string;
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

export type ConversationGetMessageListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetMessageListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetMessageListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackChatChatMessageDtoAcroStackChatVersion1000CultureneutralPublicKeyTokennull;

export type ConversationGetMessageListStatus200 =
  | ConversationGetMessageListStatus200Plain
  | ConversationGetMessageListStatus200Json
  | ConversationGetMessageListStatus200Json2;

export type ConversationGetMessageListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus400 =
  | ConversationGetMessageListStatus400Plain
  | ConversationGetMessageListStatus400Json
  | ConversationGetMessageListStatus400Json2;

export type ConversationGetMessageListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus401 =
  | ConversationGetMessageListStatus401Plain
  | ConversationGetMessageListStatus401Json
  | ConversationGetMessageListStatus401Json2;

export type ConversationGetMessageListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus403 =
  | ConversationGetMessageListStatus403Plain
  | ConversationGetMessageListStatus403Json
  | ConversationGetMessageListStatus403Json2;

export type ConversationGetMessageListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus404 =
  | ConversationGetMessageListStatus404Plain
  | ConversationGetMessageListStatus404Json
  | ConversationGetMessageListStatus404Json2;

export type ConversationGetMessageListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus500 =
  | ConversationGetMessageListStatus500Plain
  | ConversationGetMessageListStatus500Json
  | ConversationGetMessageListStatus500Json2;

export type ConversationGetMessageListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationGetMessageListStatus501 =
  | ConversationGetMessageListStatus501Plain
  | ConversationGetMessageListStatus501Json
  | ConversationGetMessageListStatus501Json2;

export type ConversationGetMessageListOptions = {
  body?: never;
  path?: never;
  query?: ConversationGetMessageListQuery;
  headers?: never;
};

export type ConversationGetMessageListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ConversationGetMessageListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetMessageListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetMessageListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ConversationGetMessageListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetMessageListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetMessageListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ConversationGetMessageListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetMessageListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetMessageListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ConversationGetMessageListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetMessageListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetMessageListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ConversationGetMessageListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetMessageListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetMessageListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ConversationGetMessageListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetMessageListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetMessageListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ConversationGetMessageListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationGetMessageListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ConversationGetMessageListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ConversationGetMessageListResponse =
  | ConversationGetMessageListStatus200
  | ConversationGetMessageListStatus400
  | ConversationGetMessageListStatus401
  | ConversationGetMessageListStatus403
  | ConversationGetMessageListStatus404
  | ConversationGetMessageListStatus500
  | ConversationGetMessageListStatus501;
