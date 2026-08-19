/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { CommentAdminUpdateSettingsOptions, CommentAdminUpdateSettingsStatus200, CommentAdminUpdateSettingsStatus204, CommentAdminUpdateSettingsStatus400, CommentAdminUpdateSettingsStatus401, CommentAdminUpdateSettingsStatus403, CommentAdminUpdateSettingsStatus404, CommentAdminUpdateSettingsStatus500, CommentAdminUpdateSettingsStatus501 } from '../../models/commentAdmin/CommentAdminUpdateSettings'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { commentAdminUpdateSettings } from '../../clients/commentAdmin/commentAdminUpdateSettings'

export const commentAdminUpdateSettingsMutationKey = () => [{ url: '/api/cms-kit-admin/comments/settings' }] as const

export function commentAdminUpdateSettingsMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = commentAdminUpdateSettingsMutationKey()
  return mutationOptions<CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204, ResponseErrorConfig<CommentAdminUpdateSettingsStatus400 | CommentAdminUpdateSettingsStatus401 | CommentAdminUpdateSettingsStatus403 | CommentAdminUpdateSettingsStatus404 | CommentAdminUpdateSettingsStatus500 | CommentAdminUpdateSettingsStatus501>, CommentAdminUpdateSettingsOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await commentAdminUpdateSettings({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/comments/settings}
 */
export function useCommentAdminUpdateSettings<TContext>(options: {
  mutation?: UseMutationOptions<CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204, ResponseErrorConfig<CommentAdminUpdateSettingsStatus400 | CommentAdminUpdateSettingsStatus401 | CommentAdminUpdateSettingsStatus403 | CommentAdminUpdateSettingsStatus404 | CommentAdminUpdateSettingsStatus500 | CommentAdminUpdateSettingsStatus501>, CommentAdminUpdateSettingsOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentAdminUpdateSettingsMutationKey()

  const baseOptions = commentAdminUpdateSettingsMutationOptions(config) as UseMutationOptions<CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204, ResponseErrorConfig<CommentAdminUpdateSettingsStatus400 | CommentAdminUpdateSettingsStatus401 | CommentAdminUpdateSettingsStatus403 | CommentAdminUpdateSettingsStatus404 | CommentAdminUpdateSettingsStatus500 | CommentAdminUpdateSettingsStatus501>, CommentAdminUpdateSettingsOptions, TContext>

  return useMutation<CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204, ResponseErrorConfig<CommentAdminUpdateSettingsStatus400 | CommentAdminUpdateSettingsStatus401 | CommentAdminUpdateSettingsStatus403 | CommentAdminUpdateSettingsStatus404 | CommentAdminUpdateSettingsStatus500 | CommentAdminUpdateSettingsStatus501>, CommentAdminUpdateSettingsOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204, ResponseErrorConfig<CommentAdminUpdateSettingsStatus400 | CommentAdminUpdateSettingsStatus401 | CommentAdminUpdateSettingsStatus403 | CommentAdminUpdateSettingsStatus404 | CommentAdminUpdateSettingsStatus500 | CommentAdminUpdateSettingsStatus501>, CommentAdminUpdateSettingsOptions, TContext>
}
