/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../../classroom/dtos/ClassSessionDto";

export type PagedResultDtoOfClassroomDtosClassSessionDto = {
  items?: ClassroomDtosClassSessionDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
