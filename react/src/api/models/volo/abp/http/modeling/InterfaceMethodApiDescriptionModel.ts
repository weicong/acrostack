/* oxlint-disable */

import type { VoloAbpHttpModelingMethodParameterApiDescriptionModel } from "./MethodParameterApiDescriptionModel.ts";
import type { VoloAbpHttpModelingReturnValueApiDescriptionModel } from "./ReturnValueApiDescriptionModel.ts";

/**
 * @type object
 */
export type VoloAbpHttpModelingInterfaceMethodApiDescriptionModel = {
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type array | undefined
   */
  parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
  /**
   * @type object | undefined
   */
  returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
};
