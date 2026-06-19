/* oxlint-disable */

import type { VoloAbpHttpModelingAuthorizeDataApiDescriptionModel } from "./AuthorizeDataApiDescriptionModel.ts";
import type { VoloAbpHttpModelingMethodParameterApiDescriptionModel } from "./MethodParameterApiDescriptionModel.ts";
import type { VoloAbpHttpModelingParameterApiDescriptionModel } from "./ParameterApiDescriptionModel.ts";
import type { VoloAbpHttpModelingReturnValueApiDescriptionModel } from "./ReturnValueApiDescriptionModel.ts";

/**
 * @type object
 */
export type VoloAbpHttpModelingActionApiDescriptionModel = {
  /**
   * @type string | undefined
   */
  uniqueName?: string | null;
  /**
   * @type string | undefined
   */
  name?: string | null;
  /**
   * @type string | undefined
   */
  httpMethod?: string | null;
  /**
   * @type string | undefined
   */
  url?: string | null;
  /**
   * @type array | undefined
   */
  supportedVersions?: string[] | null;
  /**
   * @type array | undefined
   */
  parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
  /**
   * @type array | undefined
   */
  parameters?: VoloAbpHttpModelingParameterApiDescriptionModel[] | null;
  /**
   * @type object | undefined
   */
  returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
  /**
   * @type boolean | undefined
   */
  allowAnonymous?: boolean | null;
  /**
   * @type array | undefined
   */
  authorizeDatas?: VoloAbpHttpModelingAuthorizeDataApiDescriptionModel[] | null;
  /**
   * @type string | undefined
   */
  implementFrom?: string | null;
  /**
   * @type string | undefined
   */
  summary?: string | null;
  /**
   * @type string | undefined
   */
  remarks?: string | null;
  /**
   * @type string | undefined
   */
  description?: string | null;
  /**
   * @type string | undefined
   */
  displayName?: string | null;
};
