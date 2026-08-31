/* oxlint-disable */

/**
 * @description 随机点名入参（服务端无状态：不重复点名由教师端传入本轮已点名单实现）。
 * @type object
 */
export type ClassroomDtosPickRandomParticipantDto = {
  /**
   * @description 仅从在线学员中抽取（默认 true；现场点名应针对在场学员）。
   * @type boolean | undefined
   */
  onlineOnly?: boolean;
  /**
   * @description 本轮已点过的学员 Id（教师端维护；全员点完后前端自动清空开启新一轮）。
   * @type array | undefined
   */
  excludeParticipantIds?: string[] | null;
};
