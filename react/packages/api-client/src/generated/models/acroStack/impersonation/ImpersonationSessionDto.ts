/* oxlint-disable */

/**
 * @description 模拟登录会话的展示模型。
 * @type object
 */
export type AcroStackImpersonationImpersonationSessionDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  creatorId?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  impersonatorUserId?: string;
  impersonatorUserName?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  targetUserId?: string;
  targetUserName?: string | null;
  clientId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  endTime?: string | null;
  isRevoked?: boolean;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  revokedByUserId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  revocationTime?: string | null;
  /**
   * @description 会话是否仍在进行中。
   * @type boolean | undefined
   */
  isActive?: boolean;
};
