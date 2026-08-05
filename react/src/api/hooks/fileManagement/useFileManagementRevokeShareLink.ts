/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementRevokeShareLinkPathId,
  FileManagementRevokeShareLinkStatus200,
} from "../../models/fileManagement/FileManagementRevokeShareLink.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementRevokeShareLink } from "../../clients/fileManagement/fileManagementRevokeShareLink.ts";

export const fileManagementRevokeShareLinkMutationKey = () =>
  [{ url: "/api/app/file-management/share-links/:id" }] as const;

export function fileManagementRevokeShareLinkMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = fileManagementRevokeShareLinkMutationKey();
  return mutationOptions<
    FileManagementRevokeShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRevokeShareLinkPathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return fileManagementRevokeShareLink(id, config);
    },
  });
}

/**
 * {@link /api/app/file-management/share-links/:id}
 */
export function useFileManagementRevokeShareLink<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementRevokeShareLinkStatus200,
      ResponseErrorConfig<Error>,
      { id: FileManagementRevokeShareLinkPathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementRevokeShareLinkMutationKey();

  const baseOptions = fileManagementRevokeShareLinkMutationOptions(config) as UseMutationOptions<
    FileManagementRevokeShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRevokeShareLinkPathId },
    TContext
  >;

  return useMutation<
    FileManagementRevokeShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRevokeShareLinkPathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    FileManagementRevokeShareLinkStatus200,
    ResponseErrorConfig<Error>,
    { id: FileManagementRevokeShareLinkPathId },
    TContext
  >;
}
