/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  UserDeletePathId,
  UserDeleteStatus200,
  UserDeleteStatus204,
  UserDeleteStatus400,
  UserDeleteStatus401,
  UserDeleteStatus403,
  UserDeleteStatus404,
  UserDeleteStatus500,
  UserDeleteStatus501,
} from "../../models/user/UserDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { userDelete } from "../../clients/user/userDelete.ts";

export const userDeleteMutationKey = () => [{ url: "/api/identity/users/:id" }] as const;

export function userDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = userDeleteMutationKey();
  return mutationOptions<
    UserDeleteStatus200 | UserDeleteStatus204,
    ResponseErrorConfig<
      | UserDeleteStatus400
      | UserDeleteStatus401
      | UserDeleteStatus403
      | UserDeleteStatus404
      | UserDeleteStatus500
      | UserDeleteStatus501
    >,
    { id: UserDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return userDelete(id, config);
    },
  });
}

/**
 * {@link /api/identity/users/:id}
 */
export function useUserDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UserDeleteStatus200 | UserDeleteStatus204,
      ResponseErrorConfig<
        | UserDeleteStatus400
        | UserDeleteStatus401
        | UserDeleteStatus403
        | UserDeleteStatus404
        | UserDeleteStatus500
        | UserDeleteStatus501
      >,
      { id: UserDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? userDeleteMutationKey();

  const baseOptions = userDeleteMutationOptions(config) as UseMutationOptions<
    UserDeleteStatus200 | UserDeleteStatus204,
    ResponseErrorConfig<
      | UserDeleteStatus400
      | UserDeleteStatus401
      | UserDeleteStatus403
      | UserDeleteStatus404
      | UserDeleteStatus500
      | UserDeleteStatus501
    >,
    { id: UserDeletePathId },
    TContext
  >;

  return useMutation<
    UserDeleteStatus200 | UserDeleteStatus204,
    ResponseErrorConfig<
      | UserDeleteStatus400
      | UserDeleteStatus401
      | UserDeleteStatus403
      | UserDeleteStatus404
      | UserDeleteStatus500
      | UserDeleteStatus501
    >,
    { id: UserDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    UserDeleteStatus200 | UserDeleteStatus204,
    ResponseErrorConfig<
      | UserDeleteStatus400
      | UserDeleteStatus401
      | UserDeleteStatus403
      | UserDeleteStatus404
      | UserDeleteStatus500
      | UserDeleteStatus501
    >,
    { id: UserDeletePathId },
    TContext
  >;
}
