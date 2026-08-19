/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementDeleteFolderOptions, FileManagementDeleteFolderStatus200 } from '../../models/fileManagement/FileManagementDeleteFolder'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { fileManagementDeleteFolder } from '../../clients/fileManagement/fileManagementDeleteFolder'

export const fileManagementDeleteFolderMutationKey = () => [{ url: '/api/app/file-management/folders/:id' }] as const

export function fileManagementDeleteFolderMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = fileManagementDeleteFolderMutationKey()
  return mutationOptions<FileManagementDeleteFolderStatus200, ResponseErrorConfig<Error>, FileManagementDeleteFolderOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await fileManagementDeleteFolder({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/file-management/folders/:id}
 */
export function useFileManagementDeleteFolder<TContext>(options: {
  mutation?: UseMutationOptions<FileManagementDeleteFolderStatus200, ResponseErrorConfig<Error>, FileManagementDeleteFolderOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementDeleteFolderMutationKey()

  const baseOptions = fileManagementDeleteFolderMutationOptions(config) as UseMutationOptions<FileManagementDeleteFolderStatus200, ResponseErrorConfig<Error>, FileManagementDeleteFolderOptions, TContext>

  return useMutation<FileManagementDeleteFolderStatus200, ResponseErrorConfig<Error>, FileManagementDeleteFolderOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<FileManagementDeleteFolderStatus200, ResponseErrorConfig<Error>, FileManagementDeleteFolderOptions, TContext>
}
