/* oxlint-disable */

import type { VoloAbpHttpModelingControllerApiDescriptionModel } from './ControllerApiDescriptionModel'

export type VoloAbpHttpModelingModuleApiDescriptionModel = {
    rootPath?: string | null;
    remoteServiceName?: string | null;
    controllers?: {
        [key: string]: VoloAbpHttpModelingControllerApiDescriptionModel;
    } | null;
};
