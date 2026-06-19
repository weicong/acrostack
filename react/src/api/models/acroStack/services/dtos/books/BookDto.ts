/* oxlint-disable */

import type { AcroStackEntitiesBooksBookType } from "../../../entities/books/BookType.ts";

/**
 * @type object
 */
export type AcroStackServicesDtosBooksBookDto = {
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
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  type?: AcroStackEntitiesBooksBookType;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  publishDate?: string;
  /**
   * @description
   * Format: `float`
   * @type number | undefined
   */
  price?: number;
};
