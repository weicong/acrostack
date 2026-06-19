/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  UserUpdateData,
  UserUpdatePathId,
  UserUpdateStatus200,
  UserUpdateStatus400,
  UserUpdateStatus401,
  UserUpdateStatus403,
  UserUpdateStatus404,
  UserUpdateStatus500,
  UserUpdateStatus501,
} from "../../models/user/UserUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { userUpdate } from "../../clients/user/userUpdate.ts";

export const userUpdateMutationKey = () => [{ url: "/api/identity/users/:id" }] as const;

export function userUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<UserUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = userUpdateMutationKey();
  return mutationOptions<
    UserUpdateStatus200,
    ResponseErrorConfig<
      | UserUpdateStatus400
      | UserUpdateStatus401
      | UserUpdateStatus403
      | UserUpdateStatus404
      | UserUpdateStatus500
      | UserUpdateStatus501
    >,
    { id: UserUpdatePathId; data?: UserUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return userUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/identity/users/:id}
 */
export function useUserUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UserUpdateStatus200,
      ResponseErrorConfig<
        | UserUpdateStatus400
        | UserUpdateStatus401
        | UserUpdateStatus403
        | UserUpdateStatus404
        | UserUpdateStatus500
        | UserUpdateStatus501
      >,
      { id: UserUpdatePathId; data?: UserUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<UserUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? userUpdateMutationKey();

  const baseOptions = userUpdateMutationOptions(config) as UseMutationOptions<
    UserUpdateStatus200,
    ResponseErrorConfig<
      | UserUpdateStatus400
      | UserUpdateStatus401
      | UserUpdateStatus403
      | UserUpdateStatus404
      | UserUpdateStatus500
      | UserUpdateStatus501
    >,
    { id: UserUpdatePathId; data?: UserUpdateData },
    TContext
  >;

  return useMutation<
    UserUpdateStatus200,
    ResponseErrorConfig<
      | UserUpdateStatus400
      | UserUpdateStatus401
      | UserUpdateStatus403
      | UserUpdateStatus404
      | UserUpdateStatus500
      | UserUpdateStatus501
    >,
    { id: UserUpdatePathId; data?: UserUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    UserUpdateStatus200,
    ResponseErrorConfig<
      | UserUpdateStatus400
      | UserUpdateStatus401
      | UserUpdateStatus403
      | UserUpdateStatus404
      | UserUpdateStatus500
      | UserUpdateStatus501
    >,
    { id: UserUpdatePathId; data?: UserUpdateData },
    TContext
  >;
}
