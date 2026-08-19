/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { PageAdminCreateOptions, PageAdminCreateStatus200, PageAdminCreateStatus400, PageAdminCreateStatus401, PageAdminCreateStatus403, PageAdminCreateStatus404, PageAdminCreateStatus500, PageAdminCreateStatus501 } from '../../models/pageAdmin/PageAdminCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { pageAdminCreate } from '../../clients/pageAdmin/pageAdminCreate'

export const pageAdminCreateMutationKey = () => [{ url: '/api/cms-kit-admin/pages' }] as const

export function pageAdminCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = pageAdminCreateMutationKey()
  return mutationOptions<PageAdminCreateStatus200, ResponseErrorConfig<PageAdminCreateStatus400 | PageAdminCreateStatus401 | PageAdminCreateStatus403 | PageAdminCreateStatus404 | PageAdminCreateStatus500 | PageAdminCreateStatus501>, PageAdminCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await pageAdminCreate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/pages}
 */
export function usePageAdminCreate<TContext>(options: {
  mutation?: UseMutationOptions<PageAdminCreateStatus200, ResponseErrorConfig<PageAdminCreateStatus400 | PageAdminCreateStatus401 | PageAdminCreateStatus403 | PageAdminCreateStatus404 | PageAdminCreateStatus500 | PageAdminCreateStatus501>, PageAdminCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageAdminCreateMutationKey()

  const baseOptions = pageAdminCreateMutationOptions(config) as UseMutationOptions<PageAdminCreateStatus200, ResponseErrorConfig<PageAdminCreateStatus400 | PageAdminCreateStatus401 | PageAdminCreateStatus403 | PageAdminCreateStatus404 | PageAdminCreateStatus500 | PageAdminCreateStatus501>, PageAdminCreateOptions, TContext>

  return useMutation<PageAdminCreateStatus200, ResponseErrorConfig<PageAdminCreateStatus400 | PageAdminCreateStatus401 | PageAdminCreateStatus403 | PageAdminCreateStatus404 | PageAdminCreateStatus500 | PageAdminCreateStatus501>, PageAdminCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<PageAdminCreateStatus200, ResponseErrorConfig<PageAdminCreateStatus400 | PageAdminCreateStatus401 | PageAdminCreateStatus403 | PageAdminCreateStatus404 | PageAdminCreateStatus500 | PageAdminCreateStatus501>, PageAdminCreateOptions, TContext>
}
