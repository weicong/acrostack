/* oxlint-disable */

import type { VoloAbpHttpModelingControllerApiDescriptionModel } from "./ControllerApiDescriptionModel.ts";

/**
 * @type object
 */
export type VoloAbpHttpModelingModuleApiDescriptionModel = {
  /**
   * @type string | undefined
   */
  rootPath?: string | null;
  /**
   * @type string | undefined
   */
  remoteServiceName?: string | null;
  /**
   * @type object | undefined
   */
  controllers?: {
    [key: string]: VoloAbpHttpModelingControllerApiDescriptionModel;
  } | null;
};
