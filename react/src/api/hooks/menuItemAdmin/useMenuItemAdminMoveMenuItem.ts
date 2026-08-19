/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { MenuItemAdminMoveMenuItemOptions, MenuItemAdminMoveMenuItemStatus200, MenuItemAdminMoveMenuItemStatus204, MenuItemAdminMoveMenuItemStatus400, MenuItemAdminMoveMenuItemStatus401, MenuItemAdminMoveMenuItemStatus403, MenuItemAdminMoveMenuItemStatus404, MenuItemAdminMoveMenuItemStatus500, MenuItemAdminMoveMenuItemStatus501 } from '../../models/menuItemAdmin/MenuItemAdminMoveMenuItem'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { menuItemAdminMoveMenuItem } from '../../clients/menuItemAdmin/menuItemAdminMoveMenuItem'

export const menuItemAdminMoveMenuItemMutationKey = () => [{ url: '/api/cms-kit-admin/menu-items/:id/move' }] as const

export function menuItemAdminMoveMenuItemMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } } = {}) {
  const mutationKey = menuItemAdminMoveMenuItemMutationKey()
  return mutationOptions<MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204, ResponseErrorConfig<MenuItemAdminMoveMenuItemStatus400 | MenuItemAdminMoveMenuItemStatus401 | MenuItemAdminMoveMenuItemStatus403 | MenuItemAdminMoveMenuItemStatus404 | MenuItemAdminMoveMenuItemStatus500 | MenuItemAdminMoveMenuItemStatus501>, MenuItemAdminMoveMenuItemOptions, TContext>({
    mutationKey,
    mutationFn: async({ path, body }) => {
      const { data } = await menuItemAdminMoveMenuItem({ ...config, path, body, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id/move}
 */
export function useMenuItemAdminMoveMenuItem<TContext>(options: {
  mutation?: UseMutationOptions<MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204, ResponseErrorConfig<MenuItemAdminMoveMenuItemStatus400 | MenuItemAdminMoveMenuItemStatus401 | MenuItemAdminMoveMenuItemStatus403 | MenuItemAdminMoveMenuItemStatus404 | MenuItemAdminMoveMenuItemStatus500 | MenuItemAdminMoveMenuItemStatus501>, MenuItemAdminMoveMenuItemOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> & { contentType?: { request?: "application/json" | "text/json" | "application/*+json" } },
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? menuItemAdminMoveMenuItemMutationKey()

  const baseOptions = menuItemAdminMoveMenuItemMutationOptions(config) as UseMutationOptions<MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204, ResponseErrorConfig<MenuItemAdminMoveMenuItemStatus400 | MenuItemAdminMoveMenuItemStatus401 | MenuItemAdminMoveMenuItemStatus403 | MenuItemAdminMoveMenuItemStatus404 | MenuItemAdminMoveMenuItemStatus500 | MenuItemAdminMoveMenuItemStatus501>, MenuItemAdminMoveMenuItemOptions, TContext>

  return useMutation<MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204, ResponseErrorConfig<MenuItemAdminMoveMenuItemStatus400 | MenuItemAdminMoveMenuItemStatus401 | MenuItemAdminMoveMenuItemStatus403 | MenuItemAdminMoveMenuItemStatus404 | MenuItemAdminMoveMenuItemStatus500 | MenuItemAdminMoveMenuItemStatus501>, MenuItemAdminMoveMenuItemOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204, ResponseErrorConfig<MenuItemAdminMoveMenuItemStatus400 | MenuItemAdminMoveMenuItemStatus401 | MenuItemAdminMoveMenuItemStatus403 | MenuItemAdminMoveMenuItemStatus404 | MenuItemAdminMoveMenuItemStatus500 | MenuItemAdminMoveMenuItemStatus501>, MenuItemAdminMoveMenuItemOptions, TContext>
}
