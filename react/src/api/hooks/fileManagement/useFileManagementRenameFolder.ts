/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementRenameFolderData,
  FileManagementRenameFolderPathId,
  FileManagementRenameFolderStatus200,
} from "../../models/fileManagement/FileManagementRenameFolder.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementRenameFolder } from "../../clients/fileManagement/fileManagementRenameFolder.ts";

export const fileManagementRenameFolderMutationKey = () =>
  [{ url: "/api/app/file-management/folders/:id/rename" }] as const;

export function fileManagementRenameFolderMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<FileManagementRenameFolderData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = fileManagementRenameFolderMutationKey();
  return mutationOptions<
    FileManagementRenameFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRenameFolderPathId; data?: FileManagementRenameFolderData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return fileManagementRenameFolder(id, data, config);
    },
  });
}

/**
 * {@link /api/app/file-management/folders/:id/rename}
 */
export function useFileManagementRenameFolder<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementRenameFolderStatus200,
      ResponseErrorConfig<Error>,
      { id: FileManagementRenameFolderPathId; data?: FileManagementRenameFolderData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<FileManagementRenameFolderData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementRenameFolderMutationKey();

  const baseOptions = fileManagementRenameFolderMutationOptions(config) as UseMutationOptions<
    FileManagementRenameFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRenameFolderPathId; data?: FileManagementRenameFolderData },
    TContext
  >;

  return useMutation<
    FileManagementRenameFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRenameFolderPathId; data?: FileManagementRenameFolderData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementRenameFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRenameFolderPathId; data?: FileManagementRenameFolderData },
    TContext
  >;
}
