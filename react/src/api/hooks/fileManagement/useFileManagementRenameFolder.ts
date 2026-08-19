/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementRenameFolderOptions, FileManagementRenameFolderStatus200 } from '../../models/fileManagement/FileManagementRenameFolder'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { fileManagementRenameFolder } from '../../clients/fileManagement/fileManagementRenameFolder'

export const fileManagementRenameFolderMutationKey = () => [{ url: '/api/app/file-management/folders/:id/rename' }] as const

export function fileManagementRenameFolderMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = fileManagementRenameFolderMutationKey()
  return mutationOptions<FileManagementRenameFolderStatus200, ResponseErrorConfig<Error>, FileManagementRenameFolderOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await fileManagementRenameFolder({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/file-management/folders/:id/rename}
 */
export function useFileManagementRenameFolder<TContext>(options: {
  mutation?: UseMutationOptions<FileManagementRenameFolderStatus200, ResponseErrorConfig<Error>, FileManagementRenameFolderOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementRenameFolderMutationKey()

  const baseOptions = fileManagementRenameFolderMutationOptions(config) as UseMutationOptions<FileManagementRenameFolderStatus200, ResponseErrorConfig<Error>, FileManagementRenameFolderOptions, TContext>

  return useMutation<FileManagementRenameFolderStatus200, ResponseErrorConfig<Error>, FileManagementRenameFolderOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<FileManagementRenameFolderStatus200, ResponseErrorConfig<Error>, FileManagementRenameFolderOptions, TContext>
}
