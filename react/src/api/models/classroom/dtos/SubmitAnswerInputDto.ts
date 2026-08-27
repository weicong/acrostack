/* oxlint-disable */

/**
 * @description 提交/修改答案 DTO。\r\nParticipantId 从令牌获取（禁止信任请求体）；ClientSubmittedAt 仅用于诊断，不用于截止判定。
 * @type object
 */
export type ClassroomDtosSubmitAnswerInputDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  sessionQuestionId: string;
  /**
   * @description 幂等键：客户端为每次提交生成 UUID。相同 RequestId 重试返回首次结果。
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  requestId: string;
  /**
   * @description 客户端提交时的课堂版本（服务端仅做合理性检查，不作为硬性拒绝条件）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  classroomVersion?: number;
  /**
   * @minLength 0
   * @maxLength 4000
   * @type string
   */
  answerContent: string;
  /**
   * @description 学员（本地）开始作答时间，仅诊断用途。
   *
   * Format: `date-time`
   * @type string | undefined
   */
  clientStartedAt?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  clientSubmittedAt?: string;
};
