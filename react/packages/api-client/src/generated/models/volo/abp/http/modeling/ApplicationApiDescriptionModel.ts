/* oxlint-disable */

import type { VoloAbpHttpModelingModuleApiDescriptionModel } from "./ModuleApiDescriptionModel";
import type { VoloAbpHttpModelingTypeApiDescriptionModel } from "./TypeApiDescriptionModel";

export type VoloAbpHttpModelingApplicationApiDescriptionModel = {
  modules?: {
    [key: string]: VoloAbpHttpModelingModuleApiDescriptionModel;
  } | null;
  types?: {
    [key: string]: VoloAbpHttpModelingTypeApiDescriptionModel;
  } | null;
};
