/* oxlint-disable */

import type { VoloAbpHttpModelingMethodParameterApiDescriptionModel } from "./MethodParameterApiDescriptionModel";
import type { VoloAbpHttpModelingReturnValueApiDescriptionModel } from "./ReturnValueApiDescriptionModel";

export type VoloAbpHttpModelingInterfaceMethodApiDescriptionModel = {
  name?: string | null;
  parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
  returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
};
