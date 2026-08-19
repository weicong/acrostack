/* oxlint-disable */

import type { VoloAbpHttpModelingAuthorizeDataApiDescriptionModel } from './AuthorizeDataApiDescriptionModel'
import type { VoloAbpHttpModelingMethodParameterApiDescriptionModel } from './MethodParameterApiDescriptionModel'
import type { VoloAbpHttpModelingParameterApiDescriptionModel } from './ParameterApiDescriptionModel'
import type { VoloAbpHttpModelingReturnValueApiDescriptionModel } from './ReturnValueApiDescriptionModel'

export type VoloAbpHttpModelingActionApiDescriptionModel = {
    uniqueName?: string | null;
    name?: string | null;
    httpMethod?: string | null;
    url?: string | null;
    supportedVersions?: string[] | null;
    parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
    parameters?: VoloAbpHttpModelingParameterApiDescriptionModel[] | null;
    returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
    allowAnonymous?: boolean | null;
    authorizeDatas?: VoloAbpHttpModelingAuthorizeDataApiDescriptionModel[] | null;
    implementFrom?: string | null;
    summary?: string | null;
    remarks?: string | null;
    description?: string | null;
    displayName?: string | null;
};
