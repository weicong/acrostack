/* oxlint-disable */

import type { VoloAbpValidationStringValuesIValueValidator } from './IValueValidator'

export type VoloAbpValidationStringValuesIStringValueType = {
    readonly name?: string | null;
    readonly properties?: {
        [key: string]: unknown;
    } | null;
    validator?: VoloAbpValidationStringValuesIValueValidator;
};
