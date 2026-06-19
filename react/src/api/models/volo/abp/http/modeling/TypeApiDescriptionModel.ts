/* oxlint-disable */

import type { VoloAbpHttpModelingPropertyApiDescriptionModel } from "./PropertyApiDescriptionModel.ts";

/**
 * @type object
 */
export type VoloAbpHttpModelingTypeApiDescriptionModel = {
  /**
   * @type string | undefined
   */
  baseType?: string | null;
  /**
   * @type boolean | undefined
   */
  isEnum?: boolean;
  /**
   * @type array | undefined
   */
  enumNames?: string[] | null;
  /**
   * @type array | undefined
   */
  enumValues?: any[] | null;
  /**
   * @type array | undefined
   */
  genericArguments?: string[] | null;
  /**
   * @type array | undefined
   */
  properties?: VoloAbpHttpModelingPropertyApiDescriptionModel[] | null;
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
