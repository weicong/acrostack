/**
 * GDPR personal data API client.
 *
 * The open-source ABP ships no personal-data export/delete feature.
 * The backend exposes a custom <c>GdprAppService</c> + <c>GdprController</c>
 * at <c>/api/app/gdpr</c>. Hand-written (not Kubb-generated) because this
 * is a project-specific custom service mirroring ABP Commercial GDPR Pro.
 */
import client from "@kubb/plugin-client/clients/axios";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = "/api/app/gdpr";

/**
 * Triggers a download of the current user's personal data as a JSON file.
 * Uses the shared axios client so auth/tenant headers apply. The response
 * is read as a blob and a browser download is triggered via a temporary
 * anchor element.
 */
export async function exportMyData(config: Partial<RequestConfig> = {}): Promise<void> {
  const res = await client<Blob>({
    method: "GET",
    url: `${BASE_URL}/export`,
    responseType: "blob",
    ...config,
  });

  const contentDisposition = res.headers?.["content-disposition"] as string | undefined;
  let fileName = "personal-data.json";
  if (contentDisposition) {
    const match = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
    if (match?.[1]) {
      fileName = match[1].replace(/['"]/g, "");
    }
  }

  const url = window.URL.createObjectURL(res.data);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export function useDeleteMyAccount() {
  return useMutation({
    mutationFn: () =>
      client<void>({
        method: "DELETE",
        url: `${BASE_URL}/account`,
      }).then(() => undefined),
  });
}
