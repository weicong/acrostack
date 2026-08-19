/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BookUpdateOptions, BookUpdateStatus200, BookUpdateStatus400, BookUpdateStatus401, BookUpdateStatus403, BookUpdateStatus404, BookUpdateStatus500, BookUpdateStatus501 } from '../../models/book/BookUpdate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { bookUpdate } from '../../clients/book/bookUpdate'

export const bookUpdateMutationKey = () => [{ url: '/api/app/book/:id' }] as const

export function bookUpdateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = bookUpdateMutationKey()
  return mutationOptions<BookUpdateStatus200, ResponseErrorConfig<BookUpdateStatus400 | BookUpdateStatus401 | BookUpdateStatus403 | BookUpdateStatus404 | BookUpdateStatus500 | BookUpdateStatus501>, BookUpdateOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await bookUpdate({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/book/:id}
 */
export function useBookUpdate<TContext>(options: {
  mutation?: UseMutationOptions<BookUpdateStatus200, ResponseErrorConfig<BookUpdateStatus400 | BookUpdateStatus401 | BookUpdateStatus403 | BookUpdateStatus404 | BookUpdateStatus500 | BookUpdateStatus501>, BookUpdateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? bookUpdateMutationKey()

  const baseOptions = bookUpdateMutationOptions(config) as UseMutationOptions<BookUpdateStatus200, ResponseErrorConfig<BookUpdateStatus400 | BookUpdateStatus401 | BookUpdateStatus403 | BookUpdateStatus404 | BookUpdateStatus500 | BookUpdateStatus501>, BookUpdateOptions, TContext>

  return useMutation<BookUpdateStatus200, ResponseErrorConfig<BookUpdateStatus400 | BookUpdateStatus401 | BookUpdateStatus403 | BookUpdateStatus404 | BookUpdateStatus500 | BookUpdateStatus501>, BookUpdateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<BookUpdateStatus200, ResponseErrorConfig<BookUpdateStatus400 | BookUpdateStatus401 | BookUpdateStatus403 | BookUpdateStatus404 | BookUpdateStatus500 | BookUpdateStatus501>, BookUpdateOptions, TContext>
}
