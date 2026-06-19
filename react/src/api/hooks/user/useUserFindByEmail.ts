/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserFindByEmailPathEmail,
  UserFindByEmailStatus200,
  UserFindByEmailStatus400,
  UserFindByEmailStatus401,
  UserFindByEmailStatus403,
  UserFindByEmailStatus404,
  UserFindByEmailStatus500,
  UserFindByEmailStatus501,
} from "../../models/user/UserFindByEmail.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userFindByEmail } from "../../clients/user/userFindByEmail.ts";

export const userFindByEmailQueryKey = (email?: UserFindByEmailPathEmail) =>
  [{ url: "/api/identity/users/by-email/:email", params: { email: email } }] as const;

type UserFindByEmailQueryKey = ReturnType<typeof userFindByEmailQueryKey>;

export function userFindByEmailQueryOptions(
  email?: UserFindByEmailPathEmail,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userFindByEmailQueryKey(email);
  return queryOptions<
    UserFindByEmailStatus200,
    ResponseErrorConfig<
      | UserFindByEmailStatus400
      | UserFindByEmailStatus401
      | UserFindByEmailStatus403
      | UserFindByEmailStatus404
      | UserFindByEmailStatus500
      | UserFindByEmailStatus501
    >,
    UserFindByEmailStatus200,
    typeof queryKey
  >({
    enabled: !!email,
    queryKey,
    queryFn: async ({ signal }) => {
      return userFindByEmail(email!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/by-email/:email}
 */
export function useUserFindByEmail<
  TData = UserFindByEmailStatus200,
  TQueryData = UserFindByEmailStatus200,
  TQueryKey extends QueryKey = UserFindByEmailQueryKey,
>(
  email?: UserFindByEmailPathEmail,
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserFindByEmailStatus200,
        ResponseErrorConfig<
          | UserFindByEmailStatus400
          | UserFindByEmailStatus401
          | UserFindByEmailStatus403
          | UserFindByEmailStatus404
          | UserFindByEmailStatus500
          | UserFindByEmailStatus501
        >,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? userFindByEmailQueryKey(email);

  const query = useQuery(
    {
      ...userFindByEmailQueryOptions(email, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserFindByEmailStatus400
      | UserFindByEmailStatus401
      | UserFindByEmailStatus403
      | UserFindByEmailStatus404
      | UserFindByEmailStatus500
      | UserFindByEmailStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
