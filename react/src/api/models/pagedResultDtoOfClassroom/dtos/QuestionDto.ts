/* oxlint-disable */

import type { ClassroomDtosQuestionDto } from "../../classroom/dtos/QuestionDto";

export type PagedResultDtoOfClassroomDtosQuestionDto = {
  items?: ClassroomDtosQuestionDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
