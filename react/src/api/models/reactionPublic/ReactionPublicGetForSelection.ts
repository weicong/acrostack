/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/cmsKit/public/reactions/reactionWithSelectionDtoVolo/cmsKit/public/application/ContractsVersion10600CultureneutralPublicKeyTokennull";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ReactionPublicGetForSelectionPath = {
  entityType: string;
  entityId: string;
};

export type ReactionPublicGetForSelectionStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type ReactionPublicGetForSelectionStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type ReactionPublicGetForSelectionStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type ReactionPublicGetForSelectionStatus200 =
  | ReactionPublicGetForSelectionStatus200Plain
  | ReactionPublicGetForSelectionStatus200Json
  | ReactionPublicGetForSelectionStatus200Json2;

export type ReactionPublicGetForSelectionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus400 =
  | ReactionPublicGetForSelectionStatus400Plain
  | ReactionPublicGetForSelectionStatus400Json
  | ReactionPublicGetForSelectionStatus400Json2;

export type ReactionPublicGetForSelectionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus401 =
  | ReactionPublicGetForSelectionStatus401Plain
  | ReactionPublicGetForSelectionStatus401Json
  | ReactionPublicGetForSelectionStatus401Json2;

export type ReactionPublicGetForSelectionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus403 =
  | ReactionPublicGetForSelectionStatus403Plain
  | ReactionPublicGetForSelectionStatus403Json
  | ReactionPublicGetForSelectionStatus403Json2;

export type ReactionPublicGetForSelectionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus404 =
  | ReactionPublicGetForSelectionStatus404Plain
  | ReactionPublicGetForSelectionStatus404Json
  | ReactionPublicGetForSelectionStatus404Json2;

export type ReactionPublicGetForSelectionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus500 =
  | ReactionPublicGetForSelectionStatus500Plain
  | ReactionPublicGetForSelectionStatus500Json
  | ReactionPublicGetForSelectionStatus500Json2;

export type ReactionPublicGetForSelectionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus501 =
  | ReactionPublicGetForSelectionStatus501Plain
  | ReactionPublicGetForSelectionStatus501Json
  | ReactionPublicGetForSelectionStatus501Json2;

export type ReactionPublicGetForSelectionOptions = {
  body?: never;
  path: ReactionPublicGetForSelectionPath;
  query?: never;
  headers?: never;
};

export type ReactionPublicGetForSelectionResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ReactionPublicGetForSelectionStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicGetForSelectionStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicGetForSelectionStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ReactionPublicGetForSelectionStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicGetForSelectionStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicGetForSelectionStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ReactionPublicGetForSelectionStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicGetForSelectionStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicGetForSelectionStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ReactionPublicGetForSelectionStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicGetForSelectionStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicGetForSelectionStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ReactionPublicGetForSelectionStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicGetForSelectionStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicGetForSelectionStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ReactionPublicGetForSelectionStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicGetForSelectionStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicGetForSelectionStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ReactionPublicGetForSelectionStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ReactionPublicGetForSelectionStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ReactionPublicGetForSelectionStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ReactionPublicGetForSelectionResponse =
  | ReactionPublicGetForSelectionStatus200
  | ReactionPublicGetForSelectionStatus400
  | ReactionPublicGetForSelectionStatus401
  | ReactionPublicGetForSelectionStatus403
  | ReactionPublicGetForSelectionStatus404
  | ReactionPublicGetForSelectionStatus500
  | ReactionPublicGetForSelectionStatus501;
