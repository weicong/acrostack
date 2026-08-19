/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { MenuItemAdminCreateOptions, MenuItemAdminCreateStatus200, MenuItemAdminCreateStatus400, MenuItemAdminCreateStatus401, MenuItemAdminCreateStatus403, MenuItemAdminCreateStatus404, MenuItemAdminCreateStatus500, MenuItemAdminCreateStatus501 } from '../../models/menuItemAdmin/MenuItemAdminCreate'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { menuItemAdminCreate } from '../../clients/menuItemAdmin/menuItemAdminCreate'

export const menuItemAdminCreateMutationKey = () => [{ url: '/api/cms-kit-admin/menu-items' }] as const

export function menuItemAdminCreateMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } } = {}) {
  const mutationKey = menuItemAdminCreateMutationKey()
  return mutationOptions<MenuItemAdminCreateStatus200, ResponseErrorConfig<MenuItemAdminCreateStatus400 | MenuItemAdminCreateStatus401 | MenuItemAdminCreateStatus403 | MenuItemAdminCreateStatus404 | MenuItemAdminCreateStatus500 | MenuItemAdminCreateStatus501>, MenuItemAdminCreateOptions, TContext>({
    mutationKey,
    mutationFn: async({ body }) => {
      const { data } = await menuItemAdminCreate({ ...config, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export function useMenuItemAdminCreate<TContext>(options: {
  mutation?: UseMutationOptions<MenuItemAdminCreateStatus200, ResponseErrorConfig<MenuItemAdminCreateStatus400 | MenuItemAdminCreateStatus401 | MenuItemAdminCreateStatus403 | MenuItemAdminCreateStatus404 | MenuItemAdminCreateStatus500 | MenuItemAdminCreateStatus501>, MenuItemAdminCreateOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json"; response?: "text/plain" | "application/json" | "text/json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemAdminCreateMutationKey()

  const baseOptions = menuItemAdminCreateMutationOptions(config) as UseMutationOptions<MenuItemAdminCreateStatus200, ResponseErrorConfig<MenuItemAdminCreateStatus400 | MenuItemAdminCreateStatus401 | MenuItemAdminCreateStatus403 | MenuItemAdminCreateStatus404 | MenuItemAdminCreateStatus500 | MenuItemAdminCreateStatus501>, MenuItemAdminCreateOptions, TContext>

  return useMutation<MenuItemAdminCreateStatus200, ResponseErrorConfig<MenuItemAdminCreateStatus400 | MenuItemAdminCreateStatus401 | MenuItemAdminCreateStatus403 | MenuItemAdminCreateStatus404 | MenuItemAdminCreateStatus500 | MenuItemAdminCreateStatus501>, MenuItemAdminCreateOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<MenuItemAdminCreateStatus200, ResponseErrorConfig<MenuItemAdminCreateStatus400 | MenuItemAdminCreateStatus401 | MenuItemAdminCreateStatus403 | MenuItemAdminCreateStatus404 | MenuItemAdminCreateStatus500 | MenuItemAdminCreateStatus501>, MenuItemAdminCreateOptions, TContext>
}
