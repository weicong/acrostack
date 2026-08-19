/* oxlint-disable */

import type { AcroStackBooksBookType } from "./BookType";

export type AcroStackBooksBookDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  creatorId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  lastModifierId?: string | null;
  name?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  type?: AcroStackBooksBookType;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  publishDate?: string;
  /**
   * @description
   * Format: `double`
   * @type number | undefined
   */
  price?: number;
};
