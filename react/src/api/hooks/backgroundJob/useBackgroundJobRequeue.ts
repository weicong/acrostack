/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BackgroundJobRequeueOptions, BackgroundJobRequeueStatus200, BackgroundJobRequeueStatus204, BackgroundJobRequeueStatus400, BackgroundJobRequeueStatus401, BackgroundJobRequeueStatus403, BackgroundJobRequeueStatus404, BackgroundJobRequeueStatus500, BackgroundJobRequeueStatus501 } from '../../models/backgroundJob/BackgroundJobRequeue'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { backgroundJobRequeue } from '../../clients/backgroundJob/backgroundJobRequeue'

export const backgroundJobRequeueMutationKey = () => [{ url: '/api/app/background-job/:id/requeue' }] as const

export function backgroundJobRequeueMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = backgroundJobRequeueMutationKey()
  return mutationOptions<BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204, ResponseErrorConfig<BackgroundJobRequeueStatus400 | BackgroundJobRequeueStatus401 | BackgroundJobRequeueStatus403 | BackgroundJobRequeueStatus404 | BackgroundJobRequeueStatus500 | BackgroundJobRequeueStatus501>, BackgroundJobRequeueOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await backgroundJobRequeue({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/background-job/:id/requeue}
 */
export function useBackgroundJobRequeue<TContext>(options: {
  mutation?: UseMutationOptions<BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204, ResponseErrorConfig<BackgroundJobRequeueStatus400 | BackgroundJobRequeueStatus401 | BackgroundJobRequeueStatus403 | BackgroundJobRequeueStatus404 | BackgroundJobRequeueStatus500 | BackgroundJobRequeueStatus501>, BackgroundJobRequeueOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? backgroundJobRequeueMutationKey()

  const baseOptions = backgroundJobRequeueMutationOptions(config) as UseMutationOptions<BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204, ResponseErrorConfig<BackgroundJobRequeueStatus400 | BackgroundJobRequeueStatus401 | BackgroundJobRequeueStatus403 | BackgroundJobRequeueStatus404 | BackgroundJobRequeueStatus500 | BackgroundJobRequeueStatus501>, BackgroundJobRequeueOptions, TContext>

  return useMutation<BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204, ResponseErrorConfig<BackgroundJobRequeueStatus400 | BackgroundJobRequeueStatus401 | BackgroundJobRequeueStatus403 | BackgroundJobRequeueStatus404 | BackgroundJobRequeueStatus500 | BackgroundJobRequeueStatus501>, BackgroundJobRequeueOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204, ResponseErrorConfig<BackgroundJobRequeueStatus400 | BackgroundJobRequeueStatus401 | BackgroundJobRequeueStatus403 | BackgroundJobRequeueStatus404 | BackgroundJobRequeueStatus500 | BackgroundJobRequeueStatus501>, BackgroundJobRequeueOptions, TContext>
}
