/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementMoveFileOptions, FileManagementMoveFileStatus200 } from '../../models/fileManagement/FileManagementMoveFile'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { fileManagementMoveFile } from '../../clients/fileManagement/fileManagementMoveFile'

export const fileManagementMoveFileMutationKey = () => [{ url: '/api/app/file-management/files/:id/move' }] as const

export function fileManagementMoveFileMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = fileManagementMoveFileMutationKey()
  return mutationOptions<FileManagementMoveFileStatus200, ResponseErrorConfig<Error>, FileManagementMoveFileOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await fileManagementMoveFile({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/file-management/files/:id/move}
 */
export function useFileManagementMoveFile<TContext>(options: {
  mutation?: UseMutationOptions<FileManagementMoveFileStatus200, ResponseErrorConfig<Error>, FileManagementMoveFileOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementMoveFileMutationKey()

  const baseOptions = fileManagementMoveFileMutationOptions(config) as UseMutationOptions<FileManagementMoveFileStatus200, ResponseErrorConfig<Error>, FileManagementMoveFileOptions, TContext>

  return useMutation<FileManagementMoveFileStatus200, ResponseErrorConfig<Error>, FileManagementMoveFileOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<FileManagementMoveFileStatus200, ResponseErrorConfig<Error>, FileManagementMoveFileOptions, TContext>
}
