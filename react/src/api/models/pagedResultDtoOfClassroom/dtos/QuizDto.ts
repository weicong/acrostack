/* oxlint-disable */

import type { ClassroomDtosQuizDto } from "../../classroom/dtos/QuizDto";

export type PagedResultDtoOfClassroomDtosQuizDto = {
  items?: ClassroomDtosQuizDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
