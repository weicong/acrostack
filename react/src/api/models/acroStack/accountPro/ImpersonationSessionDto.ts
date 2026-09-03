/* oxlint-disable */

/**
 * @description 模拟登录会话的展示模型。
 * @type object
 */
export type AcroStackAccountProImpersonationSessionDto = {
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
   * @description 记录归属租户（模拟者所在租户，host 为 `null`）。
   *
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  impersonatorUserId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  impersonatorTenantId?: string | null;
  impersonatorUserName?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  targetUserId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  targetTenantId?: string | null;
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
