/* oxlint-disable */

import type { AcroStackBooksBookDto } from "../../acroStack/books/BookDto";

export type PagedResultDtoOfAcroStackBooksBookDto = {
  items?: AcroStackBooksBookDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
