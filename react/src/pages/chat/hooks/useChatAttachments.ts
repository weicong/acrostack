/**
 * 聊天附件下载聚合 hook：通过 Blob 触发浏览器下载。
 */
import { useCallback } from "react";
import type { useToastController } from "@fluentui/react-components";
import { chatDownloadAttachment } from "@/api/clients/chat/chatDownloadAttachment";
import { extractAbpErrorMessage } from "@/lib/http/error";

interface UseChatAttachmentsOptions {
  dispatchToast: ReturnType<typeof useToastController>["dispatchToast"];
}

export function useChatAttachments({ dispatchToast }: UseChatAttachmentsOptions) {
  const handleDownloadAttachment = useCallback(
    async (messageId: string | undefined, fallbackName?: string | null) => {
      if (!messageId) return;
      try {
        const { data: blob } = await chatDownloadAttachment({
          path: { messageId },
          responseType: "blob",
        });
        const url = window.URL.createObjectURL(blob as Blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fallbackName || `attachment-${messageId}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      }
    },
    [dispatchToast],
  );

  return { handleDownloadAttachment };
}
