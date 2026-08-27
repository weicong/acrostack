/* oxlint-disable */

import type { AcroStackBackgroundJobsBackgroundJobDto } from "../../acroStack/backgroundJobs/BackgroundJobDto";

export type PagedResultDtoOfAcroStackBackgroundJobsBackgroundJobDto = {
  items?: AcroStackBackgroundJobsBackgroundJobDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
