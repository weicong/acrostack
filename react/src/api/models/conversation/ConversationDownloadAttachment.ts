/* oxlint-disable */

import type { SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E } from "../system/valueTuple3System/IO/streamSystem/private/coreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystem/stringSystem/private/coreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystem/stringSystem/private/CoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ConversationDownloadAttachmentPathMessageId = string;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus200Plain =
  SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus200Json =
  SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus200Json2 =
  SystemValueTuple3SystemIOStreamSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798ESystemStringSystemPrivateCoreLibVersion10000CultureneutralPublicKeyToken7Cec85D7Bea7798E;

export type ConversationDownloadAttachmentStatus200 =
  | ConversationDownloadAttachmentStatus200Plain
  | ConversationDownloadAttachmentStatus200Json
  | ConversationDownloadAttachmentStatus200Json2;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus400 =
  | ConversationDownloadAttachmentStatus400Plain
  | ConversationDownloadAttachmentStatus400Json
  | ConversationDownloadAttachmentStatus400Json2;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus401 =
  | ConversationDownloadAttachmentStatus401Plain
  | ConversationDownloadAttachmentStatus401Json
  | ConversationDownloadAttachmentStatus401Json2;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus403 =
  | ConversationDownloadAttachmentStatus403Plain
  | ConversationDownloadAttachmentStatus403Json
  | ConversationDownloadAttachmentStatus403Json2;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus404 =
  | ConversationDownloadAttachmentStatus404Plain
  | ConversationDownloadAttachmentStatus404Json
  | ConversationDownloadAttachmentStatus404Json2;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus500 =
  | ConversationDownloadAttachmentStatus500Plain
  | ConversationDownloadAttachmentStatus500Json
  | ConversationDownloadAttachmentStatus500Json2;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ConversationDownloadAttachmentStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ConversationDownloadAttachmentStatus501 =
  | ConversationDownloadAttachmentStatus501Plain
  | ConversationDownloadAttachmentStatus501Json
  | ConversationDownloadAttachmentStatus501Json2;

/**
 * @type object
 */
export type ConversationDownloadAttachmentRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    messageId: ConversationDownloadAttachmentPathMessageId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/conversation/download-attachment/${string}`;
};

/**
 * @type object
 */
export type ConversationDownloadAttachmentResponses = {
  "200": ConversationDownloadAttachmentStatus200;
  "400": ConversationDownloadAttachmentStatus400;
  "401": ConversationDownloadAttachmentStatus401;
  "403": ConversationDownloadAttachmentStatus403;
  "404": ConversationDownloadAttachmentStatus404;
  "500": ConversationDownloadAttachmentStatus500;
  "501": ConversationDownloadAttachmentStatus501;
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
