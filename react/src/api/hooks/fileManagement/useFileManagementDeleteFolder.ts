/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementDeleteFolderPathId,
  FileManagementDeleteFolderStatus200,
} from "../../models/fileManagement/FileManagementDeleteFolder.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementDeleteFolder } from "../../clients/fileManagement/fileManagementDeleteFolder.ts";

export const fileManagementDeleteFolderMutationKey = () =>
  [{ url: "/api/app/file-management/folders/:id" }] as const;

export function fileManagementDeleteFolderMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = fileManagementDeleteFolderMutationKey();
  return mutationOptions<
    FileManagementDeleteFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFolderPathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return fileManagementDeleteFolder(id, config);
    },
  });
}

/**
 * {@link /api/app/file-management/folders/:id}
 */
export function useFileManagementDeleteFolder<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementDeleteFolderStatus200,
      ResponseErrorConfig<Error>,
      { id: FileManagementDeleteFolderPathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementDeleteFolderMutationKey();

  const baseOptions = fileManagementDeleteFolderMutationOptions(config) as UseMutationOptions<
    FileManagementDeleteFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFolderPathId },
    TContext
  >;

  return useMutation<
    FileManagementDeleteFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFolderPathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementDeleteFolderStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFolderPathId },
    TContext
  >;
}
