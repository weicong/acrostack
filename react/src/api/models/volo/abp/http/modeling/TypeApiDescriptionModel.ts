/* oxlint-disable */

import type { VoloAbpHttpModelingPropertyApiDescriptionModel } from './PropertyApiDescriptionModel'

export type VoloAbpHttpModelingTypeApiDescriptionModel = {
    baseType?: string | null;
    isEnum?: boolean;
    enumNames?: string[] | null;
    enumValues?: unknown[] | null;
    genericArguments?: string[] | null;
    properties?: VoloAbpHttpModelingPropertyApiDescriptionModel[] | null;
    summary?: string | null;
    remarks?: string | null;
    description?: string | null;
    displayName?: string | null;
};
