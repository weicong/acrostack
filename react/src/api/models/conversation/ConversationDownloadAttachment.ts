/* oxlint-disable */

import type { SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E } from "../system/valueTuple3System/IO/streamSystem/private/coreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystem/stringSystem/private/coreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystem/stringSystem/private/CoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ConversationDownloadAttachmentPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  messageId: string;
};

export type ConversationDownloadAttachmentStatus200Plain =
  SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E;

export type ConversationDownloadAttachmentStatus200Json =
  SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E;

export type ConversationDownloadAttachmentStatus200Json2 =
  SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E;

export type ConversationDownloadAttachmentStatus200 =
  | ConversationDownloadAttachmentStatus200Plain
  | ConversationDownloadAttachmentStatus200Json
  | ConversationDownloadAttachmentStatus200Json2;

export type ConversationDownloadAttachmentStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus400 =
  | ConversationDownloadAttachmentStatus400Plain
  | ConversationDownloadAttachmentStatus400Json
  | ConversationDownloadAttachmentStatus400Json2;

export type ConversationDownloadAttachmentStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus401 =
  | ConversationDownloadAttachmentStatus401Plain
  | ConversationDownloadAttachmentStatus401Json
  | ConversationDownloadAttachmentStatus401Json2;

export type ConversationDownloadAttachmentStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus403 =
  | ConversationDownloadAttachmentStatus403Plain
  | ConversationDownloadAttachmentStatus403Json
  | ConversationDownloadAttachmentStatus403Json2;

export type ConversationDownloadAttachmentStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus404 =
  | ConversationDownloadAttachmentStatus404Plain
  | ConversationDownloadAttachmentStatus404Json
  | ConversationDownloadAttachmentStatus404Json2;

export type ConversationDownloadAttachmentStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus500 =
  | ConversationDownloadAttachmentStatus500Plain
  | ConversationDownloadAttachmentStatus500Json
  | ConversationDownloadAttachmentStatus500Json2;

export type ConversationDownloadAttachmentStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus501 =
  | ConversationDownloadAttachmentStatus501Plain
  | ConversationDownloadAttachmentStatus501Json
  | ConversationDownloadAttachmentStatus501Json2;

export type ConversationDownloadAttachmentOptions = {
  body?: never;
  path: ConversationDownloadAttachmentPath;
  query?: never;
  headers?: never;
};

export type ConversationDownloadAttachmentResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ConversationDownloadAttachmentStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationDownloadAttachmentStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ConversationDownloadAttachmentStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ConversationDownloadAttachmentStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationDownloadAttachmentStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ConversationDownloadAttachmentStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ConversationDownloadAttachmentStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationDownloadAttachmentStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ConversationDownloadAttachmentStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ConversationDownloadAttachmentStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationDownloadAttachmentStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ConversationDownloadAttachmentStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ConversationDownloadAttachmentStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationDownloadAttachmentStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ConversationDownloadAttachmentStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ConversationDownloadAttachmentStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationDownloadAttachmentStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ConversationDownloadAttachmentStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ConversationDownloadAttachmentStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ConversationDownloadAttachmentStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ConversationDownloadAttachmentStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ConversationDownloadAttachmentResponse =
  | ConversationDownloadAttachmentStatus200
  | ConversationDownloadAttachmentStatus400
  | ConversationDownloadAttachmentStatus401
  | ConversationDownloadAttachmentStatus403
  | ConversationDownloadAttachmentStatus404
  | ConversationDownloadAttachmentStatus500
  | ConversationDownloadAttachmentStatus501;
