/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementDeleteFilePathId,
  FileManagementDeleteFileStatus200,
} from "../../models/fileManagement/FileManagementDeleteFile.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementDeleteFile } from "../../clients/fileManagement/fileManagementDeleteFile.ts";

export const fileManagementDeleteFileMutationKey = () =>
  [{ url: "/api/app/file-management/files/:id" }] as const;

export function fileManagementDeleteFileMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = fileManagementDeleteFileMutationKey();
  return mutationOptions<
    FileManagementDeleteFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFilePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return fileManagementDeleteFile(id, config);
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id}
 */
export function useFileManagementDeleteFile<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementDeleteFileStatus200,
      ResponseErrorConfig<Error>,
      { id: FileManagementDeleteFilePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementDeleteFileMutationKey();

  const baseOptions = fileManagementDeleteFileMutationOptions(config) as UseMutationOptions<
    FileManagementDeleteFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFilePathId },
    TContext
  >;

  return useMutation<
    FileManagementDeleteFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFilePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementDeleteFileStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementDeleteFilePathId },
    TContext
  >;
}
