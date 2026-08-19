/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FileManagementCreateShareLinkOptions,
  FileManagementCreateShareLinkStatus200,
} from "../../models/fileManagement/FileManagementCreateShareLink";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementCreateShareLink } from "../../clients/fileManagement/fileManagementCreateShareLink";

export const fileManagementCreateShareLinkMutationKey = () =>
  [{ url: "/api/app/file-management/files/:id/share-links" }] as const;

export function fileManagementCreateShareLinkMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = fileManagementCreateShareLinkMutationKey();
  return mutationOptions<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateShareLinkOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await fileManagementCreateShareLink({
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
 * {@link /api/app/file-management/files/:id/share-links}
 */
export function useFileManagementCreateShareLink<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementCreateShareLinkStatus200,
      ResponseErrorConfig<Error>,
      FileManagementCreateShareLinkOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? fileManagementCreateShareLinkMutationKey();

  const baseOptions = fileManagementCreateShareLinkMutationOptions(config) as UseMutationOptions<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateShareLinkOptions,
    TContext
  >;

  return useMutation<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateShareLinkOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateShareLinkOptions,
    TContext
  >;
}
