/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementMoveFileData,
  FileManagementMoveFilePathId,
  FileManagementMoveFileStatus200,
} from "../../models/fileManagement/FileManagementMoveFile.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementMoveFile } from "../../clients/fileManagement/fileManagementMoveFile.ts";

export const fileManagementMoveFileMutationKey = () =>
  [{ url: "/api/app/file-management/files/:id/move" }] as const;

export function fileManagementMoveFileMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<FileManagementMoveFileData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = fileManagementMoveFileMutationKey();
  return mutationOptions<
    FileManagementMoveFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFilePathId; data?: FileManagementMoveFileData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return fileManagementMoveFile(id, data, config);
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id/move}
 */
export function useFileManagementMoveFile<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementMoveFileStatus200,
      ResponseErrorConfig<Error>,
      { id: FileManagementMoveFilePathId; data?: FileManagementMoveFileData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<FileManagementMoveFileData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementMoveFileMutationKey();

  const baseOptions = fileManagementMoveFileMutationOptions(config) as UseMutationOptions<
    FileManagementMoveFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFilePathId; data?: FileManagementMoveFileData },
    TContext
  >;

  return useMutation<
    FileManagementMoveFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFilePathId; data?: FileManagementMoveFileData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementMoveFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFilePathId; data?: FileManagementMoveFileData },
    TContext
  >;
}
