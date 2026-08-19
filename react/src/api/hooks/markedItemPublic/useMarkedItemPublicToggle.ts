/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { MarkedItemPublicToggleOptions, MarkedItemPublicToggleStatus200, MarkedItemPublicToggleStatus400, MarkedItemPublicToggleStatus401, MarkedItemPublicToggleStatus403, MarkedItemPublicToggleStatus404, MarkedItemPublicToggleStatus500, MarkedItemPublicToggleStatus501 } from '../../models/markedItemPublic/MarkedItemPublicToggle'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { markedItemPublicToggle } from '../../clients/markedItemPublic/markedItemPublicToggle'

export const markedItemPublicToggleMutationKey = () => [{ url: '/api/cms-kit-public/marked-items/:entityType/:entityId' }] as const

export function markedItemPublicToggleMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = markedItemPublicToggleMutationKey()
  return mutationOptions<MarkedItemPublicToggleStatus200, ResponseErrorConfig<MarkedItemPublicToggleStatus400 | MarkedItemPublicToggleStatus401 | MarkedItemPublicToggleStatus403 | MarkedItemPublicToggleStatus404 | MarkedItemPublicToggleStatus500 | MarkedItemPublicToggleStatus501>, MarkedItemPublicToggleOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await markedItemPublicToggle({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function useMarkedItemPublicToggle<TContext>(options: {
  mutation?: UseMutationOptions<MarkedItemPublicToggleStatus200, ResponseErrorConfig<MarkedItemPublicToggleStatus400 | MarkedItemPublicToggleStatus401 | MarkedItemPublicToggleStatus403 | MarkedItemPublicToggleStatus404 | MarkedItemPublicToggleStatus500 | MarkedItemPublicToggleStatus501>, MarkedItemPublicToggleOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? markedItemPublicToggleMutationKey()

  const baseOptions = markedItemPublicToggleMutationOptions(config) as UseMutationOptions<MarkedItemPublicToggleStatus200, ResponseErrorConfig<MarkedItemPublicToggleStatus400 | MarkedItemPublicToggleStatus401 | MarkedItemPublicToggleStatus403 | MarkedItemPublicToggleStatus404 | MarkedItemPublicToggleStatus500 | MarkedItemPublicToggleStatus501>, MarkedItemPublicToggleOptions, TContext>

  return useMutation<MarkedItemPublicToggleStatus200, ResponseErrorConfig<MarkedItemPublicToggleStatus400 | MarkedItemPublicToggleStatus401 | MarkedItemPublicToggleStatus403 | MarkedItemPublicToggleStatus404 | MarkedItemPublicToggleStatus500 | MarkedItemPublicToggleStatus501>, MarkedItemPublicToggleOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<MarkedItemPublicToggleStatus200, ResponseErrorConfig<MarkedItemPublicToggleStatus400 | MarkedItemPublicToggleStatus401 | MarkedItemPublicToggleStatus403 | MarkedItemPublicToggleStatus404 | MarkedItemPublicToggleStatus500 | MarkedItemPublicToggleStatus501>, MarkedItemPublicToggleOptions, TContext>
}
