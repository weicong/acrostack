/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementRestoreVersionOptions, FileManagementRestoreVersionStatus200 } from '../../models/fileManagement/FileManagementRestoreVersion'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { fileManagementRestoreVersion } from '../../clients/fileManagement/fileManagementRestoreVersion'

export const fileManagementRestoreVersionMutationKey = () => [{ url: '/api/app/file-management/files/:id/versions/:versionId/restore' }] as const

export function fileManagementRestoreVersionMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = fileManagementRestoreVersionMutationKey()
  return mutationOptions<FileManagementRestoreVersionStatus200, ResponseErrorConfig<Error>, FileManagementRestoreVersionOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await fileManagementRestoreVersion({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/file-management/files/:id/versions/:versionId/restore}
 */
export function useFileManagementRestoreVersion<TContext>(options: {
  mutation?: UseMutationOptions<FileManagementRestoreVersionStatus200, ResponseErrorConfig<Error>, FileManagementRestoreVersionOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementRestoreVersionMutationKey()

  const baseOptions = fileManagementRestoreVersionMutationOptions(config) as UseMutationOptions<FileManagementRestoreVersionStatus200, ResponseErrorConfig<Error>, FileManagementRestoreVersionOptions, TContext>

  return useMutation<FileManagementRestoreVersionStatus200, ResponseErrorConfig<Error>, FileManagementRestoreVersionOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<FileManagementRestoreVersionStatus200, ResponseErrorConfig<Error>, FileManagementRestoreVersionOptions, TContext>
}
