/* oxlint-disable */

export type AcroStackOpenIddictManagementOpenIddictApplicationDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  clientId?: string | null;
  displayName?: string | null;
  clientType?: string | null;
  consentType?: string | null;
  /**
   * @description 仅指示是否已配置客户端密钥，不回传密钥本体（密钥在数据库中为哈希值，\r\n不应通过 API 泄露）。
   * @type boolean | undefined
   */
  hasClientSecret?: boolean;
  permissions?: string[] | null;
  redirectUris?: string[] | null;
  postLogoutRedirectUris?: string[] | null;
  requirements?: string[] | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
