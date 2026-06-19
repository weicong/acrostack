/* oxlint-disable */

import type { VoloAbpHttpModelingModuleApiDescriptionModel } from "./ModuleApiDescriptionModel.ts";
import type { VoloAbpHttpModelingTypeApiDescriptionModel } from "./TypeApiDescriptionModel.ts";

/**
 * @type object
 */
export type VoloAbpHttpModelingApplicationApiDescriptionModel = {
  /**
   * @type object | undefined
   */
  modules?: {
    [key: string]: VoloAbpHttpModelingModuleApiDescriptionModel;
  } | null;
  /**
   * @type object | undefined
   */
  types?: {
    [key: string]: VoloAbpHttpModelingTypeApiDescriptionModel;
  } | null;
};
