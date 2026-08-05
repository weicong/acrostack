/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementMoveFolderData,
  FileManagementMoveFolderPathId,
  FileManagementMoveFolderStatus200,
} from "../../models/fileManagement/FileManagementMoveFolder.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementMoveFolder } from "../../clients/fileManagement/fileManagementMoveFolder.ts";

export const fileManagementMoveFolderMutationKey = () =>
  [{ url: "/api/app/file-management/folders/:id/move" }] as const;

export function fileManagementMoveFolderMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<FileManagementMoveFolderData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = fileManagementMoveFolderMutationKey();
  return mutationOptions<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFolderPathId; data?: FileManagementMoveFolderData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return fileManagementMoveFolder(id, data, config);
    },
  });
}

/**
 * {@link /api/app/file-management/folders/:id/move}
 */
export function useFileManagementMoveFolder<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementMoveFolderStatus200,
      ResponseErrorConfig<Error>,
      { id: FileManagementMoveFolderPathId; data?: FileManagementMoveFolderData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<FileManagementMoveFolderData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementMoveFolderMutationKey();

  const baseOptions = fileManagementMoveFolderMutationOptions(config) as UseMutationOptions<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFolderPathId; data?: FileManagementMoveFolderData },
    TContext
  >;

  return useMutation<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFolderPathId; data?: FileManagementMoveFolderData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementMoveFolderPathId; data?: FileManagementMoveFolderData },
    TContext
  >;
}
