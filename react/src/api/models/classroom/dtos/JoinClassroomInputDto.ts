/* oxlint-disable */

export type ClassroomDtosJoinClassroomInputDto = {
  /**
   * @minLength 0
   * @maxLength 6
   * @type string
   */
  classroomCode: string;
  /**
   * @minLength 0
   * @maxLength 32
   * @type string
   */
  nickname: string;
  /**
   * @minLength 0
   * @maxLength 32
   * @type string | undefined
   */
  studentNumber?: string | null;
};
