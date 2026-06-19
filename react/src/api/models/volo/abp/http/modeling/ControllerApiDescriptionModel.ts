/* oxlint-disable */

import type { VoloAbpHttpModelingActionApiDescriptionModel } from "./ActionApiDescriptionModel.ts";
import type { VoloAbpHttpModelingControllerInterfaceApiDescriptionModel } from "./ControllerInterfaceApiDescriptionModel.ts";

/**
 * @type object
 */
export type VoloAbpHttpModelingControllerApiDescriptionModel = {
  /**
   * @type string | undefined
   */
  controllerName?: string | null;
  /**
   * @type string | undefined
   */
  controllerGroupName?: string | null;
  /**
   * @type boolean | undefined
   */
  isRemoteService?: boolean;
  /**
   * @type boolean | undefined
   */
  isIntegrationService?: boolean;
  /**
   * @type string | undefined
   */
  apiVersion?: string | null;
  /**
   * @type string | undefined
   */
  type?: string | null;
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
  /**
   * @type array | undefined
   */
  interfaces?: VoloAbpHttpModelingControllerInterfaceApiDescriptionModel[] | null;
  /**
   * @type object | undefined
   */
  actions?: {
    [key: string]: VoloAbpHttpModelingActionApiDescriptionModel;
  } | null;
};
