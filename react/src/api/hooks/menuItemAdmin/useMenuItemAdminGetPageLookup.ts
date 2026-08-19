/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { MenuItemAdminGetPageLookupOptions, MenuItemAdminGetPageLookupStatus200, MenuItemAdminGetPageLookupStatus400, MenuItemAdminGetPageLookupStatus401, MenuItemAdminGetPageLookupStatus403, MenuItemAdminGetPageLookupStatus404, MenuItemAdminGetPageLookupStatus500, MenuItemAdminGetPageLookupStatus501 } from '../../models/menuItemAdmin/MenuItemAdminGetPageLookup'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { menuItemAdminGetPageLookup } from '../../clients/menuItemAdmin/menuItemAdminGetPageLookup'

export const menuItemAdminGetPageLookupQueryKey = ({ query }: Omit<MenuItemAdminGetPageLookupOptions, 'headers'> = {}) => [{ url: '/api/cms-kit-admin/menu-items/lookup/pages' }, ...(query ? [query] : [])] as const

type MenuItemAdminGetPageLookupQueryKey = ReturnType<typeof menuItemAdminGetPageLookupQueryKey>

export function menuItemAdminGetPageLookupQueryOptions({ query }: MenuItemAdminGetPageLookupOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = menuItemAdminGetPageLookupQueryKey({ query })
  return queryOptions<MenuItemAdminGetPageLookupStatus200, ResponseErrorConfig<MenuItemAdminGetPageLookupStatus400 | MenuItemAdminGetPageLookupStatus401 | MenuItemAdminGetPageLookupStatus403 | MenuItemAdminGetPageLookupStatus404 | MenuItemAdminGetPageLookupStatus500 | MenuItemAdminGetPageLookupStatus501>, MenuItemAdminGetPageLookupStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await menuItemAdminGetPageLookup({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/pages}
 */
export function useMenuItemAdminGetPageLookup<TData = MenuItemAdminGetPageLookupStatus200, TQueryData = MenuItemAdminGetPageLookupStatus200, TQueryKey extends QueryKey = MenuItemAdminGetPageLookupQueryKey>({ query }: { query?: MenuItemAdminGetPageLookupOptions['query'] | (() => MenuItemAdminGetPageLookupOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<MenuItemAdminGetPageLookupStatus200, ResponseErrorConfig<MenuItemAdminGetPageLookupStatus400 | MenuItemAdminGetPageLookupStatus401 | MenuItemAdminGetPageLookupStatus403 | MenuItemAdminGetPageLookupStatus404 | MenuItemAdminGetPageLookupStatus500 | MenuItemAdminGetPageLookupStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? menuItemAdminGetPageLookupQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...menuItemAdminGetPageLookupQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<MenuItemAdminGetPageLookupStatus400 | MenuItemAdminGetPageLookupStatus401 | MenuItemAdminGetPageLookupStatus403 | MenuItemAdminGetPageLookupStatus404 | MenuItemAdminGetPageLookupStatus500 | MenuItemAdminGetPageLookupStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
