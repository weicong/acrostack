/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementUploadFileData,
  FileManagementUploadFileQueryFolderId,
  FileManagementUploadFileStatus200,
} from "../../models/fileManagement/FileManagementUploadFile.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementUploadFile } from "../../clients/fileManagement/fileManagementUploadFile.ts";

export const fileManagementUploadFileMutationKey = () =>
  [{ url: "/api/app/file-management/files/upload" }] as const;

export function fileManagementUploadFileMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<FileManagementUploadFileData>> & { client?: Client } = {},
) {
  const mutationKey = fileManagementUploadFileMutationKey();
  return mutationOptions<
    FileManagementUploadFileStatus200,
    ResponseErrorConfig<Error>,
    {
      data?: FileManagementUploadFileData;
      params?: { folderId?: FileManagementUploadFileQueryFolderId };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data, params }) => {
      return fileManagementUploadFile(data, params, config);
    },
  });
}

/**
 * {@link /api/app/file-management/files/upload}
 */
export function useFileManagementUploadFile<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementUploadFileStatus200,
      ResponseErrorConfig<Error>,
      {
        data?: FileManagementUploadFileData;
        params?: { folderId?: FileManagementUploadFileQueryFolderId };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<FileManagementUploadFileData>> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementUploadFileMutationKey();

  const baseOptions = fileManagementUploadFileMutationOptions(config) as UseMutationOptions<
    FileManagementUploadFileStatus200,
    ResponseErrorConfig<Error>,
    {
      data?: FileManagementUploadFileData;
      params?: { folderId?: FileManagementUploadFileQueryFolderId };
    },
    TContext
  >;

  return useMutation<
    FileManagementUploadFileStatus200,
    ResponseErrorConfig<Error>,
    {
      data?: FileManagementUploadFileData;
      params?: { folderId?: FileManagementUploadFileQueryFolderId };
    },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementUploadFileStatus200,
    ResponseErrorConfig<Error>,
    {
      data?: FileManagementUploadFileData;
      params?: { folderId?: FileManagementUploadFileQueryFolderId };
    },
    TContext
  >;
}
