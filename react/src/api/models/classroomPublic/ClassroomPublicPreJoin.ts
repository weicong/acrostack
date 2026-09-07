/* oxlint-disable */

import type { ClassroomDtosPreJoinClassroomInputDto } from "../classroom/dtos/PreJoinClassroomInputDto";
import type { ClassroomDtosPreJoinResultDto } from "../classroom/dtos/PreJoinResultDto";

/**
 * @description 探测结果：NeedProfile=true 表示该手机号在目标租户无学员档案，加入时须补齐姓名/单位/职务。
 * @type object
 */
export type ClassroomPublicPreJoinStatus200Plain = ClassroomDtosPreJoinResultDto;

/**
 * @description 探测结果：NeedProfile=true 表示该手机号在目标租户无学员档案，加入时须补齐姓名/单位/职务。
 * @type object
 */
export type ClassroomPublicPreJoinStatus200Json = ClassroomDtosPreJoinResultDto;

/**
 * @description 探测结果：NeedProfile=true 表示该手机号在目标租户无学员档案，加入时须补齐姓名/单位/职务。
 * @type object
 */
export type ClassroomPublicPreJoinStatus200Json2 = ClassroomDtosPreJoinResultDto;

export type ClassroomPublicPreJoinStatus200 =
  | ClassroomPublicPreJoinStatus200Plain
  | ClassroomPublicPreJoinStatus200Json
  | ClassroomPublicPreJoinStatus200Json2;

export type ClassroomPublicPreJoinBodyJson = ClassroomDtosPreJoinClassroomInputDto | undefined;

export type ClassroomPublicPreJoinBodyJson2 = ClassroomDtosPreJoinClassroomInputDto | undefined;

export type ClassroomPublicPreJoinBodyJson3 = ClassroomDtosPreJoinClassroomInputDto | undefined;

export type ClassroomPublicPreJoinBody =
  | ClassroomPublicPreJoinBodyJson
  | ClassroomPublicPreJoinBodyJson2
  | ClassroomPublicPreJoinBodyJson3;

export type ClassroomPublicPreJoinOptions = {
  body: ClassroomPublicPreJoinBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type ClassroomPublicPreJoinResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomPublicPreJoinStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomPublicPreJoinStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomPublicPreJoinStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomPublicPreJoinResponse = ClassroomPublicPreJoinStatus200;
