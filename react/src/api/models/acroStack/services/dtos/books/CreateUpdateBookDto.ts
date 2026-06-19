/* oxlint-disable */

import type { AcroStackEntitiesBooksBookType } from "../../../entities/books/BookType.ts";

/**
 * @type object
 */
export type AcroStackServicesDtosBooksCreateUpdateBookDto = {
  /**
   * @minLength 0
   * @maxLength 128
   * @type string
   */
  name: string;
  /**
   * @description
   * Format: `int32`
   * @type integer
   */
  type: AcroStackEntitiesBooksBookType;
  /**
   * @description
   * Format: `date`
   * @type string
   */
  publishDate: string;
  /**
   * @description
   * Format: `float`
   * @type number
   */
  price: number;
};
