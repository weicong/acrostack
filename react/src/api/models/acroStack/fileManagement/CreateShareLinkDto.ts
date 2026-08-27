/* oxlint-disable */

/**
 * @description Input for creating a share link for a file. Both fields are\r\noptional: when omitted, the link never expires / has no download cap.
 * @type object
 */
export type AcroStackFileManagementCreateShareLinkDto = {
  /**
   * @description 可选的分享链接过期时间。校验规则（由服务层 CreateShareLinkAsync 执行）：\r\n必须晚于当前时间（Clock.Now），且距当前时间不超过 30 天；\r\n不满足时抛出 UserFriendlyException。为 null 表示链接永不过期。
   *
   * Format: `date-time`
   * @type string | undefined
   */
  expirationTime?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  maxDownloadCount?: number | null;
};
