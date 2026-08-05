/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  FileManagementRestoreVersionPathId,
  FileManagementRestoreVersionPathVersionId,
  FileManagementRestoreVersionStatus200,
} from "../../models/fileManagement/FileManagementRestoreVersion.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { fileManagementRestoreVersion } from "../../clients/fileManagement/fileManagementRestoreVersion.ts";

export const fileManagementRestoreVersionMutationKey = () =>
  [{ url: "/api/app/file-management/files/:id/versions/:versionId/restore" }] as const;

export function fileManagementRestoreVersionMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = fileManagementRestoreVersionMutationKey();
  return mutationOptions<
    FileManagementRestoreVersionStatus200,
    ResponseErrorConfig<Error>,
    {
      id: FileManagementRestoreVersionPathId;
      versionId: FileManagementRestoreVersionPathVersionId;
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, versionId }) => {
      return fileManagementRestoreVersion(id, versionId, config);
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id/versions/:versionId/restore}
 */
export function useFileManagementRestoreVersion<TContext>(
  options: {
    mutation?: UseMutationOptions<
      FileManagementRestoreVersionStatus200,
      ResponseErrorConfig<Error>,
      {
        id: FileManagementRestoreVersionPathId;
        versionId: FileManagementRestoreVersionPathVersionId;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementRestoreVersionMutationKey();

  const baseOptions = fileManagementRestoreVersionMutationOptions(config) as UseMutationOptions<
    FileManagementRestoreVersionStatus200,
    ResponseErrorConfig<Error>,
    {
      id: FileManagementRestoreVersionPathId;
      versionId: FileManagementRestoreVersionPathVersionId;
    },
    TContext
  >;

  return useMutation<
    FileManagementRestoreVersionStatus200,
    ResponseErrorConfig<Error>,
    {
      id: FileManagementRestoreVersionPathId;
      versionId: FileManagementRestoreVersionPathVersionId;
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
    FileManagementRestoreVersionStatus200,
    ResponseErrorConfig<Error>,
    {
      id: FileManagementRestoreVersionPathId;
      versionId: FileManagementRestoreVersionPathVersionId;
    },
    TContext
  >;
}
