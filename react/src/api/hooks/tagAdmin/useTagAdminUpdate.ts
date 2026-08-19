/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TagAdminUpdateOptions, TagAdminUpdateStatus200, TagAdminUpdateStatus400, TagAdminUpdateStatus401, TagAdminUpdateStatus403, TagAdminUpdateStatus404, TagAdminUpdateStatus500, TagAdminUpdateStatus501 } from '../../models/tagAdmin/TagAdminUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { tagAdminUpdate } from '../../clients/tagAdmin/tagAdminUpdate'

export const tagAdminUpdateMutationKey = () => [{ url: '/api/cms-kit-admin/tags/:id' }] as const

export function tagAdminUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = tagAdminUpdateMutationKey()
  return mutationOptions<TagAdminUpdateStatus200, ResponseErrorConfig<TagAdminUpdateStatus400 | TagAdminUpdateStatus401 | TagAdminUpdateStatus403 | TagAdminUpdateStatus404 | TagAdminUpdateStatus500 | TagAdminUpdateStatus501>, TagAdminUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await tagAdminUpdate({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function useTagAdminUpdate<TContext>(options: {
  mutation?: UseMutationOptions<TagAdminUpdateStatus200, ResponseErrorConfig<TagAdminUpdateStatus400 | TagAdminUpdateStatus401 | TagAdminUpdateStatus403 | TagAdminUpdateStatus404 | TagAdminUpdateStatus500 | TagAdminUpdateStatus501>, TagAdminUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tagAdminUpdateMutationKey()

  const baseOptions = tagAdminUpdateMutationOptions(config) as UseMutationOptions<TagAdminUpdateStatus200, ResponseErrorConfig<TagAdminUpdateStatus400 | TagAdminUpdateStatus401 | TagAdminUpdateStatus403 | TagAdminUpdateStatus404 | TagAdminUpdateStatus500 | TagAdminUpdateStatus501>, TagAdminUpdateOptions, TContext>

  return useMutation<TagAdminUpdateStatus200, ResponseErrorConfig<TagAdminUpdateStatus400 | TagAdminUpdateStatus401 | TagAdminUpdateStatus403 | TagAdminUpdateStatus404 | TagAdminUpdateStatus500 | TagAdminUpdateStatus501>, TagAdminUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<TagAdminUpdateStatus200, ResponseErrorConfig<TagAdminUpdateStatus400 | TagAdminUpdateStatus401 | TagAdminUpdateStatus403 | TagAdminUpdateStatus404 | TagAdminUpdateStatus500 | TagAdminUpdateStatus501>, TagAdminUpdateOptions, TContext>
}
