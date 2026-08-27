/* oxlint-disable */

/**
 * @description Input for editing an existing chat message\'s text.
 * @type object
 */
export type AcroStackChatEditMessageInput = {
  /**
   * @description 新的消息文本。限制最长 4000 字符，与 ChatMessage.Text 的数据库列宽\r\n（见 ChatEfCoreDbContextExtensions.MaxMessageTextLength）一致，\r\n避免超长文本穿透到数据库层才抛异常。
   * @minLength 0
   * @maxLength 4000
   * @type string | undefined
   */
  text?: string | null;
};
