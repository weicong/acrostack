/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FileManagementDeleteFileOptions,
  FileManagementDeleteFileStatus200,
} from "../../models/fileManagement/FileManagementDeleteFile";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementDeleteFile } from "../../clients/fileManagement/fileManagementDeleteFile";

export const fileManagementDeleteFileMutationKey = () =>
  [{ url: "/api/app/file-management/files/:id" }] as const;

export function fileManagementDeleteFileMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = fileManagementDeleteFileMutationKey();
  return mutationOptions<
    FileManagementDeleteFileStatus200,
    ResponseErrorConfig<Error>,
    FileManagementDeleteFileOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await fileManagementDeleteFile({ ...config, path, throwOnError: true });
      return data;
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
      FileManagementDeleteFileOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementDeleteFileMutationKey();

  const baseOptions = fileManagementDeleteFileMutationOptions(config) as UseMutationOptions<
    FileManagementDeleteFileStatus200,
    ResponseErrorConfig<Error>,
    FileManagementDeleteFileOptions,
    TContext
  >;

  return useMutation<
    FileManagementDeleteFileStatus200,
    ResponseErrorConfig<Error>,
    FileManagementDeleteFileOptions,
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
    FileManagementDeleteFileOptions,
    TContext
  >;
}
