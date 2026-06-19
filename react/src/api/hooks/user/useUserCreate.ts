/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  UserCreateData,
  UserCreateStatus200,
  UserCreateStatus400,
  UserCreateStatus401,
  UserCreateStatus403,
  UserCreateStatus404,
  UserCreateStatus500,
  UserCreateStatus501,
} from "../../models/user/UserCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { userCreate } from "../../clients/user/userCreate.ts";

export const userCreateMutationKey = () => [{ url: "/api/identity/users" }] as const;

export function userCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<UserCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = userCreateMutationKey();
  return mutationOptions<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    { data?: UserCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return userCreate(data, config);
    },
  });
}

/**
 * {@link /api/identity/users}
 */
export function useUserCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UserCreateStatus200,
      ResponseErrorConfig<
        | UserCreateStatus400
        | UserCreateStatus401
        | UserCreateStatus403
        | UserCreateStatus404
        | UserCreateStatus500
        | UserCreateStatus501
      >,
      { data?: UserCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<UserCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? userCreateMutationKey();

  const baseOptions = userCreateMutationOptions(config) as UseMutationOptions<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    { data?: UserCreateData },
    TContext
  >;

  return useMutation<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    { data?: UserCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    { data?: UserCreateData },
    TContext
  >;
}
