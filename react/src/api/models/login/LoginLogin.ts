/* oxlint-disable */

import type { VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult } from "../volo/abp/account/web/areas/account/controllers/models/AbpLoginResult";
import type { VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo } from "../volo/abp/account/web/areas/account/controllers/models/UserLoginInfo";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type LoginLoginStatus200Plain = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginLoginStatus200Json = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginLoginStatus200Json2 = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginLoginStatus200 =
  | LoginLoginStatus200Plain
  | LoginLoginStatus200Json
  | LoginLoginStatus200Json2;

export type LoginLoginStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus400 =
  | LoginLoginStatus400Plain
  | LoginLoginStatus400Json
  | LoginLoginStatus400Json2;

export type LoginLoginStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus401 =
  | LoginLoginStatus401Plain
  | LoginLoginStatus401Json
  | LoginLoginStatus401Json2;

export type LoginLoginStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus403 =
  | LoginLoginStatus403Plain
  | LoginLoginStatus403Json
  | LoginLoginStatus403Json2;

export type LoginLoginStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus404 =
  | LoginLoginStatus404Plain
  | LoginLoginStatus404Json
  | LoginLoginStatus404Json2;

export type LoginLoginStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus500 =
  | LoginLoginStatus500Plain
  | LoginLoginStatus500Json
  | LoginLoginStatus500Json2;

export type LoginLoginStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLoginStatus501 =
  | LoginLoginStatus501Plain
  | LoginLoginStatus501Json
  | LoginLoginStatus501Json2;

export type LoginLoginBodyJson =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

export type LoginLoginBodyJson2 =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

export type LoginLoginBodyJson3 =
  | VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo
  | undefined;

export type LoginLoginBody = LoginLoginBodyJson | LoginLoginBodyJson2 | LoginLoginBodyJson3;

export type LoginLoginOptions = {
  body: LoginLoginBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type LoginLoginResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: LoginLoginStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: LoginLoginStatus200Json;
      }
    | {
        contentType: "text/json";
        data: LoginLoginStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: LoginLoginStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: LoginLoginStatus400Json;
      }
    | {
        contentType: "text/json";
        data: LoginLoginStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: LoginLoginStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: LoginLoginStatus401Json;
      }
    | {
        contentType: "text/json";
        data: LoginLoginStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: LoginLoginStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: LoginLoginStatus403Json;
      }
    | {
        contentType: "text/json";
        data: LoginLoginStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: LoginLoginStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: LoginLoginStatus404Json;
      }
    | {
        contentType: "text/json";
        data: LoginLoginStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: LoginLoginStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: LoginLoginStatus500Json;
      }
    | {
        contentType: "text/json";
        data: LoginLoginStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: LoginLoginStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: LoginLoginStatus501Json;
      }
    | {
        contentType: "text/json";
        data: LoginLoginStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type LoginLoginResponse =
  | LoginLoginStatus200
  | LoginLoginStatus400
  | LoginLoginStatus401
  | LoginLoginStatus403
  | LoginLoginStatus404
  | LoginLoginStatus500
  | LoginLoginStatus501;
