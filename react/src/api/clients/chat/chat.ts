/* oxlint-disable */

import { chatDownloadAttachment } from "./chatDownloadAttachment.ts";
import { chatSendMessageWithAttachment } from "./chatSendMessageWithAttachment.ts";

export function chat() {
  return { chatSendMessageWithAttachment, chatDownloadAttachment };
}
