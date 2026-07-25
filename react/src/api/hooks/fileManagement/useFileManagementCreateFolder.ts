/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementCreateFolderData,
  FileManagementCreateFolderStatus200,
} from "../../models/fileManagement/FileManagementCreateFolder.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementCreateFolder } from "../../clients/fileManagement/fileManagementCreateFolder.ts";

export const fileManagementCreateFolderMutationKey = () =>
  [{ url: "/api/app/file-management/folders" }] as const;

export function fileManagementCreateFolderMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<FileManagementCreateFolderData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = fileManagementCreateFolderMutationKey();
  return mutationOptions<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    { data?: FileManagementCreateFolderData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return fileManagementCreateFolder(data, config);
    },
  });
}

/**
 * {@link /api/app/file-management/folders}
 */
export function useFileManagementCreateFolder<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementCreateFolderStatus200,
      ResponseErrorConfig<Error>,
      { data?: FileManagementCreateFolderData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<FileManagementCreateFolderData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementCreateFolderMutationKey();

  const baseOptions = fileManagementCreateFolderMutationOptions(config) as UseMutationOptions<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    { data?: FileManagementCreateFolderData },
    TContext
  >;

  return useMutation<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    { data?: FileManagementCreateFolderData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    { data?: FileManagementCreateFolderData },
    TContext
  >;
}
