/* oxlint-disable */

import type { AcroStackServicesGdprScheduledDeletionDto } from "../acroStack/services/gdpr/ScheduledDeletionDto.ts";

/**
 * @type object
 */
export type GdprScheduleMyAccountDeletionStatus200Plain = AcroStackServicesGdprScheduledDeletionDto;

/**
 * @type object
 */
export type GdprScheduleMyAccountDeletionStatus200Json = AcroStackServicesGdprScheduledDeletionDto;

/**
 * @type object
 */
export type GdprScheduleMyAccountDeletionStatus200Json2 = AcroStackServicesGdprScheduledDeletionDto;

export type GdprScheduleMyAccountDeletionStatus200 =
  | GdprScheduleMyAccountDeletionStatus200Plain
  | GdprScheduleMyAccountDeletionStatus200Json
  | GdprScheduleMyAccountDeletionStatus200Json2;

/**
 * @type object
 */
export type GdprScheduleMyAccountDeletionRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/gdpr/scheduled-deletion";
};

/**
 * @type object
 */
export type GdprScheduleMyAccountDeletionResponses = {
  "200": GdprScheduleMyAccountDeletionStatus200;
};

/**
 * @description Union of all possible responses
 */
export type GdprScheduleMyAccountDeletionResponse = GdprScheduleMyAccountDeletionStatus200;
