/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementCreateShareLinkData,
  FileManagementCreateShareLinkPathId,
  FileManagementCreateShareLinkStatus200,
} from "../../models/fileManagement/FileManagementCreateShareLink.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementCreateShareLink } from "../../clients/fileManagement/fileManagementCreateShareLink.ts";

export const fileManagementCreateShareLinkMutationKey = () =>
  [{ url: "/api/app/file-management/files/:id/share-links" }] as const;

export function fileManagementCreateShareLinkMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<FileManagementCreateShareLinkData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = fileManagementCreateShareLinkMutationKey();
  return mutationOptions<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementCreateShareLinkPathId; data?: FileManagementCreateShareLinkData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return fileManagementCreateShareLink(id, data, config);
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id/share-links}
 */
export function useFileManagementCreateShareLink<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementCreateShareLinkStatus200,
      ResponseErrorConfig<Error>,
      { id: FileManagementCreateShareLinkPathId; data?: FileManagementCreateShareLinkData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<FileManagementCreateShareLinkData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementCreateShareLinkMutationKey();

  const baseOptions = fileManagementCreateShareLinkMutationOptions(config) as UseMutationOptions<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementCreateShareLinkPathId; data?: FileManagementCreateShareLinkData },
    TContext
  >;

  return useMutation<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementCreateShareLinkPathId; data?: FileManagementCreateShareLinkData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementCreateShareLinkPathId; data?: FileManagementCreateShareLinkData },
    TContext
  >;
}
