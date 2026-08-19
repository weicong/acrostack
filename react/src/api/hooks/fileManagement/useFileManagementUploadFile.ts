/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementUploadFileOptions, FileManagementUploadFileStatus200 } from '../../models/fileManagement/FileManagementUploadFile'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { fileManagementUploadFile } from '../../clients/fileManagement/fileManagementUploadFile'

export const fileManagementUploadFileMutationKey = () => [{ url: '/api/app/file-management/files/upload' }] as const

export function fileManagementUploadFileMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = fileManagementUploadFileMutationKey()
  return mutationOptions<FileManagementUploadFileStatus200, ResponseErrorConfig<Error>, FileManagementUploadFileOptions, TContext>({
    mutationKey,
    mutationFn: async({ query, body }) => {
      const { data } = await fileManagementUploadFile({ ...config, query, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/file-management/files/upload}
 */
export function useFileManagementUploadFile<TContext>(options: {
  mutation?: UseMutationOptions<FileManagementUploadFileStatus200, ResponseErrorConfig<Error>, FileManagementUploadFileOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementUploadFileMutationKey()

  const baseOptions = fileManagementUploadFileMutationOptions(config) as UseMutationOptions<FileManagementUploadFileStatus200, ResponseErrorConfig<Error>, FileManagementUploadFileOptions, TContext>

  return useMutation<FileManagementUploadFileStatus200, ResponseErrorConfig<Error>, FileManagementUploadFileOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<FileManagementUploadFileStatus200, ResponseErrorConfig<Error>, FileManagementUploadFileOptions, TContext>
}
