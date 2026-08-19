/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { MenuItemAdminGetPermissionLookupOptions, MenuItemAdminGetPermissionLookupStatus200, MenuItemAdminGetPermissionLookupStatus400, MenuItemAdminGetPermissionLookupStatus401, MenuItemAdminGetPermissionLookupStatus403, MenuItemAdminGetPermissionLookupStatus404, MenuItemAdminGetPermissionLookupStatus500, MenuItemAdminGetPermissionLookupStatus501 } from '../../models/menuItemAdmin/MenuItemAdminGetPermissionLookup'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { menuItemAdminGetPermissionLookup } from '../../clients/menuItemAdmin/menuItemAdminGetPermissionLookup'

export const menuItemAdminGetPermissionLookupQueryKey = ({ query }: Omit<MenuItemAdminGetPermissionLookupOptions, 'headers'> = {}) => [{ url: '/api/cms-kit-admin/menu-items/lookup/permissions' }, ...(query ? [query] : [])] as const

type MenuItemAdminGetPermissionLookupQueryKey = ReturnType<typeof menuItemAdminGetPermissionLookupQueryKey>

export function menuItemAdminGetPermissionLookupQueryOptions({ query }: MenuItemAdminGetPermissionLookupOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = menuItemAdminGetPermissionLookupQueryKey({ query })
  return queryOptions<MenuItemAdminGetPermissionLookupStatus200, ResponseErrorConfig<MenuItemAdminGetPermissionLookupStatus400 | MenuItemAdminGetPermissionLookupStatus401 | MenuItemAdminGetPermissionLookupStatus403 | MenuItemAdminGetPermissionLookupStatus404 | MenuItemAdminGetPermissionLookupStatus500 | MenuItemAdminGetPermissionLookupStatus501>, MenuItemAdminGetPermissionLookupStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await menuItemAdminGetPermissionLookup({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/permissions}
 */
export function useMenuItemAdminGetPermissionLookup<TData = MenuItemAdminGetPermissionLookupStatus200, TQueryData = MenuItemAdminGetPermissionLookupStatus200, TQueryKey extends QueryKey = MenuItemAdminGetPermissionLookupQueryKey>({ query }: { query?: MenuItemAdminGetPermissionLookupOptions['query'] | (() => MenuItemAdminGetPermissionLookupOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<MenuItemAdminGetPermissionLookupStatus200, ResponseErrorConfig<MenuItemAdminGetPermissionLookupStatus400 | MenuItemAdminGetPermissionLookupStatus401 | MenuItemAdminGetPermissionLookupStatus403 | MenuItemAdminGetPermissionLookupStatus404 | MenuItemAdminGetPermissionLookupStatus500 | MenuItemAdminGetPermissionLookupStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetPermissionLookupQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...menuItemAdminGetPermissionLookupQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<MenuItemAdminGetPermissionLookupStatus400 | MenuItemAdminGetPermissionLookupStatus401 | MenuItemAdminGetPermissionLookupStatus403 | MenuItemAdminGetPermissionLookupStatus404 | MenuItemAdminGetPermissionLookupStatus500 | MenuItemAdminGetPermissionLookupStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
