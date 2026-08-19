/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TagAdminCreateOptions, TagAdminCreateStatus200, TagAdminCreateStatus400, TagAdminCreateStatus401, TagAdminCreateStatus403, TagAdminCreateStatus404, TagAdminCreateStatus500, TagAdminCreateStatus501 } from '../../models/tagAdmin/TagAdminCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { tagAdminCreate } from '../../clients/tagAdmin/tagAdminCreate'

export const tagAdminCreateMutationKey = () => [{ url: '/api/cms-kit-admin/tags' }] as const

export function tagAdminCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = tagAdminCreateMutationKey()
  return mutationOptions<TagAdminCreateStatus200, ResponseErrorConfig<TagAdminCreateStatus400 | TagAdminCreateStatus401 | TagAdminCreateStatus403 | TagAdminCreateStatus404 | TagAdminCreateStatus500 | TagAdminCreateStatus501>, TagAdminCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await tagAdminCreate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/tags}
 */
export function useTagAdminCreate<TContext>(options: {
  mutation?: UseMutationOptions<TagAdminCreateStatus200, ResponseErrorConfig<TagAdminCreateStatus400 | TagAdminCreateStatus401 | TagAdminCreateStatus403 | TagAdminCreateStatus404 | TagAdminCreateStatus500 | TagAdminCreateStatus501>, TagAdminCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tagAdminCreateMutationKey()

  const baseOptions = tagAdminCreateMutationOptions(config) as UseMutationOptions<TagAdminCreateStatus200, ResponseErrorConfig<TagAdminCreateStatus400 | TagAdminCreateStatus401 | TagAdminCreateStatus403 | TagAdminCreateStatus404 | TagAdminCreateStatus500 | TagAdminCreateStatus501>, TagAdminCreateOptions, TContext>

  return useMutation<TagAdminCreateStatus200, ResponseErrorConfig<TagAdminCreateStatus400 | TagAdminCreateStatus401 | TagAdminCreateStatus403 | TagAdminCreateStatus404 | TagAdminCreateStatus500 | TagAdminCreateStatus501>, TagAdminCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<TagAdminCreateStatus200, ResponseErrorConfig<TagAdminCreateStatus400 | TagAdminCreateStatus401 | TagAdminCreateStatus403 | TagAdminCreateStatus404 | TagAdminCreateStatus500 | TagAdminCreateStatus501>, TagAdminCreateOptions, TContext>
}
