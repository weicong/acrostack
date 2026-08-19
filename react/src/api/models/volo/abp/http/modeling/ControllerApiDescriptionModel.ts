/* oxlint-disable */

import type { VoloAbpHttpModelingActionApiDescriptionModel } from './ActionApiDescriptionModel'
import type { VoloAbpHttpModelingControllerInterfaceApiDescriptionModel } from './ControllerInterfaceApiDescriptionModel'

export type VoloAbpHttpModelingControllerApiDescriptionModel = {
    controllerName?: string | null;
    controllerGroupName?: string | null;
    isRemoteService?: boolean;
    isIntegrationService?: boolean;
    apiVersion?: string | null;
    type?: string | null;
    summary?: string | null;
    remarks?: string | null;
    description?: string | null;
    displayName?: string | null;
    interfaces?: VoloAbpHttpModelingControllerInterfaceApiDescriptionModel[] | null;
    actions?: {
        [key: string]: VoloAbpHttpModelingActionApiDescriptionModel;
    } | null;
};
