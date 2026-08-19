/* oxlint-disable */

import type { AcroStackBooksBookType } from './BookType'

export type AcroStackBooksCreateUpdateBookDto = {
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
    type: AcroStackBooksBookType;
    /**
     * @description
     * Format: `date`
     * @type string
    */
    publishDate: string;
    /**
     * @description
     * Format: `double`
     * @type number
    */
    price: number;
};
