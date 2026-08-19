/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { MenuItemPublicGetListStatus200, MenuItemPublicGetListStatus400, MenuItemPublicGetListStatus401, MenuItemPublicGetListStatus403, MenuItemPublicGetListStatus404, MenuItemPublicGetListStatus500, MenuItemPublicGetListStatus501 } from '../../models/menuItemPublic/MenuItemPublicGetList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { menuItemPublicGetList } from '../../clients/menuItemPublic/menuItemPublicGetList'

export const menuItemPublicGetListQueryKey = () => [{ url: '/api/cms-kit-public/menu-items' }] as const

type MenuItemPublicGetListQueryKey = ReturnType<typeof menuItemPublicGetListQueryKey>

export function menuItemPublicGetListQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = menuItemPublicGetListQueryKey()
  return queryOptions<MenuItemPublicGetListStatus200, ResponseErrorConfig<MenuItemPublicGetListStatus400 | MenuItemPublicGetListStatus401 | MenuItemPublicGetListStatus403 | MenuItemPublicGetListStatus404 | MenuItemPublicGetListStatus500 | MenuItemPublicGetListStatus501>, MenuItemPublicGetListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await menuItemPublicGetList({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/menu-items}
 */
export function useMenuItemPublicGetList<TData = MenuItemPublicGetListStatus200, TQueryData = MenuItemPublicGetListStatus200, TQueryKey extends QueryKey = MenuItemPublicGetListQueryKey>(options: {
  query?: Partial<QueryObserverOptions<MenuItemPublicGetListStatus200, ResponseErrorConfig<MenuItemPublicGetListStatus400 | MenuItemPublicGetListStatus401 | MenuItemPublicGetListStatus403 | MenuItemPublicGetListStatus404 | MenuItemPublicGetListStatus500 | MenuItemPublicGetListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? menuItemPublicGetListQueryKey()

  const queryResult = useQuery({
   ...menuItemPublicGetListQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<MenuItemPublicGetListStatus400 | MenuItemPublicGetListStatus401 | MenuItemPublicGetListStatus403 | MenuItemPublicGetListStatus404 | MenuItemPublicGetListStatus500 | MenuItemPublicGetListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
