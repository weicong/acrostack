/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementRevokeShareLinkOptions, FileManagementRevokeShareLinkStatus200 } from '../../models/fileManagement/FileManagementRevokeShareLink'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { fileManagementRevokeShareLink } from '../../clients/fileManagement/fileManagementRevokeShareLink'

export const fileManagementRevokeShareLinkMutationKey = () => [{ url: '/api/app/file-management/share-links/:id' }] as const

export function fileManagementRevokeShareLinkMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = fileManagementRevokeShareLinkMutationKey()
  return mutationOptions<FileManagementRevokeShareLinkStatus200, ResponseErrorConfig<Error>, FileManagementRevokeShareLinkOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await fileManagementRevokeShareLink({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/file-management/share-links/:id}
 */
export function useFileManagementRevokeShareLink<TContext>(options: {
  mutation?: UseMutationOptions<FileManagementRevokeShareLinkStatus200, ResponseErrorConfig<Error>, FileManagementRevokeShareLinkOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? fileManagementRevokeShareLinkMutationKey()

  const baseOptions = fileManagementRevokeShareLinkMutationOptions(config) as UseMutationOptions<FileManagementRevokeShareLinkStatus200, ResponseErrorConfig<Error>, FileManagementRevokeShareLinkOptions, TContext>

  return useMutation<FileManagementRevokeShareLinkStatus200, ResponseErrorConfig<Error>, FileManagementRevokeShareLinkOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<FileManagementRevokeShareLinkStatus200, ResponseErrorConfig<Error>, FileManagementRevokeShareLinkOptions, TContext>
}
