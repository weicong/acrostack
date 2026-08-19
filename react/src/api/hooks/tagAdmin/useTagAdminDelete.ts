/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TagAdminDeleteOptions, TagAdminDeleteStatus200, TagAdminDeleteStatus204, TagAdminDeleteStatus400, TagAdminDeleteStatus401, TagAdminDeleteStatus403, TagAdminDeleteStatus404, TagAdminDeleteStatus500, TagAdminDeleteStatus501 } from '../../models/tagAdmin/TagAdminDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { tagAdminDelete } from '../../clients/tagAdmin/tagAdminDelete'

export const tagAdminDeleteMutationKey = () => [{ url: '/api/cms-kit-admin/tags/:id' }] as const

export function tagAdminDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = tagAdminDeleteMutationKey()
  return mutationOptions<TagAdminDeleteStatus200 | TagAdminDeleteStatus204, ResponseErrorConfig<TagAdminDeleteStatus400 | TagAdminDeleteStatus401 | TagAdminDeleteStatus403 | TagAdminDeleteStatus404 | TagAdminDeleteStatus500 | TagAdminDeleteStatus501>, TagAdminDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await tagAdminDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function useTagAdminDelete<TContext>(options: {
  mutation?: UseMutationOptions<TagAdminDeleteStatus200 | TagAdminDeleteStatus204, ResponseErrorConfig<TagAdminDeleteStatus400 | TagAdminDeleteStatus401 | TagAdminDeleteStatus403 | TagAdminDeleteStatus404 | TagAdminDeleteStatus500 | TagAdminDeleteStatus501>, TagAdminDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tagAdminDeleteMutationKey()

  const baseOptions = tagAdminDeleteMutationOptions(config) as UseMutationOptions<TagAdminDeleteStatus200 | TagAdminDeleteStatus204, ResponseErrorConfig<TagAdminDeleteStatus400 | TagAdminDeleteStatus401 | TagAdminDeleteStatus403 | TagAdminDeleteStatus404 | TagAdminDeleteStatus500 | TagAdminDeleteStatus501>, TagAdminDeleteOptions, TContext>

  return useMutation<TagAdminDeleteStatus200 | TagAdminDeleteStatus204, ResponseErrorConfig<TagAdminDeleteStatus400 | TagAdminDeleteStatus401 | TagAdminDeleteStatus403 | TagAdminDeleteStatus404 | TagAdminDeleteStatus500 | TagAdminDeleteStatus501>, TagAdminDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<TagAdminDeleteStatus200 | TagAdminDeleteStatus204, ResponseErrorConfig<TagAdminDeleteStatus400 | TagAdminDeleteStatus401 | TagAdminDeleteStatus403 | TagAdminDeleteStatus404 | TagAdminDeleteStatus500 | TagAdminDeleteStatus501>, TagAdminDeleteOptions, TContext>
}
