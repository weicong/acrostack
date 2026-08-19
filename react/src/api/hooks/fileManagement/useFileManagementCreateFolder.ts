/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FileManagementCreateFolderOptions,
  FileManagementCreateFolderStatus200,
} from "../../models/fileManagement/FileManagementCreateFolder";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementCreateFolder } from "../../clients/fileManagement/fileManagementCreateFolder";

export const fileManagementCreateFolderMutationKey = () =>
  [{ url: "/api/app/file-management/folders" }] as const;

export function fileManagementCreateFolderMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = fileManagementCreateFolderMutationKey();
  return mutationOptions<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateFolderOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await fileManagementCreateFolder({ ...config, body, throwOnError: true });
      return data;
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
      FileManagementCreateFolderOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementCreateFolderMutationKey();

  const baseOptions = fileManagementCreateFolderMutationOptions(config) as UseMutationOptions<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateFolderOptions,
    TContext
  >;

  return useMutation<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateFolderOptions,
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
    FileManagementCreateFolderOptions,
    TContext
  >;
}
