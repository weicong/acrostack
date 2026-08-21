/* oxlint-disable */

export type ClassroomDtosQuestionStatisticsDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionQuestionId?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  totalParticipants?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  submittedCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  notStartedCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  answeringCount?: number;
  /**
   * @description
   * Format: `double`
   * @type number | undefined
   */
  completionRate?: number;
  optionCounts?: {
    [key: string]: number;
  } | null;
  /**
   * @description
   * Format: `double`
   * @type number | undefined
   */
  correctRate?: number | null;
  /**
   * @description
   * Format: `double`
   * @type number | undefined
   */
  averageAnswerSeconds?: number;
};
