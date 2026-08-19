/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  UserUpdateOptions,
  UserUpdateStatus200,
  UserUpdateStatus400,
  UserUpdateStatus401,
  UserUpdateStatus403,
  UserUpdateStatus404,
  UserUpdateStatus500,
  UserUpdateStatus501,
} from "../../models/user/UserUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { userUpdate } from "../../clients/user/userUpdate";

export const userUpdateMutationKey = () => [{ url: "/api/identity/users/:id" }] as const;

export function userUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    UserUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await userUpdate({ ...config, path, body, throwOnError: true });
      return data;
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
      UserUpdateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
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
    UserUpdateOptions,
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
    UserUpdateOptions,
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
    UserUpdateOptions,
    TContext
  >;
}
