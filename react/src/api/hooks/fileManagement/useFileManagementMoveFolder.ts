/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FileManagementMoveFolderOptions,
  FileManagementMoveFolderStatus200,
} from "../../models/fileManagement/FileManagementMoveFolder";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementMoveFolder } from "../../clients/fileManagement/fileManagementMoveFolder";

export const fileManagementMoveFolderMutationKey = () =>
  [{ url: "/api/app/file-management/folders/:id/move" }] as const;

export function fileManagementMoveFolderMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = fileManagementMoveFolderMutationKey();
  return mutationOptions<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementMoveFolderOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await fileManagementMoveFolder({
        ...config,
        path,
        body,
        throwOnError: true,
      });
      return data;
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
      FileManagementMoveFolderOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? fileManagementMoveFolderMutationKey();

  const baseOptions = fileManagementMoveFolderMutationOptions(config) as UseMutationOptions<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementMoveFolderOptions,
    TContext
  >;

  return useMutation<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementMoveFolderOptions,
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
    FileManagementMoveFolderOptions,
    TContext
  >;
}
