/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ProfileUpdateOptions,
  ProfileUpdateStatus200,
  ProfileUpdateStatus400,
  ProfileUpdateStatus401,
  ProfileUpdateStatus403,
  ProfileUpdateStatus404,
  ProfileUpdateStatus500,
  ProfileUpdateStatus501,
} from "../../models/profile/ProfileUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { profileUpdate } from "../../clients/profile/profileUpdate";

export const profileUpdateMutationKey = () => [{ url: "/api/account/my-profile" }] as const;

export function profileUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = profileUpdateMutationKey();
  return mutationOptions<
    ProfileUpdateStatus200,
    ResponseErrorConfig<
      | ProfileUpdateStatus400
      | ProfileUpdateStatus401
      | ProfileUpdateStatus403
      | ProfileUpdateStatus404
      | ProfileUpdateStatus500
      | ProfileUpdateStatus501
    >,
    ProfileUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await profileUpdate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/account/my-profile}
 */
export function useProfileUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ProfileUpdateStatus200,
      ResponseErrorConfig<
        | ProfileUpdateStatus400
        | ProfileUpdateStatus401
        | ProfileUpdateStatus403
        | ProfileUpdateStatus404
        | ProfileUpdateStatus500
        | ProfileUpdateStatus501
      >,
      ProfileUpdateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? profileUpdateMutationKey();

  const baseOptions = profileUpdateMutationOptions(config) as UseMutationOptions<
    ProfileUpdateStatus200,
    ResponseErrorConfig<
      | ProfileUpdateStatus400
      | ProfileUpdateStatus401
      | ProfileUpdateStatus403
      | ProfileUpdateStatus404
      | ProfileUpdateStatus500
      | ProfileUpdateStatus501
    >,
    ProfileUpdateOptions,
    TContext
  >;

  return useMutation<
    ProfileUpdateStatus200,
    ResponseErrorConfig<
      | ProfileUpdateStatus400
      | ProfileUpdateStatus401
      | ProfileUpdateStatus403
      | ProfileUpdateStatus404
      | ProfileUpdateStatus500
      | ProfileUpdateStatus501
    >,
    ProfileUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ProfileUpdateStatus200,
    ResponseErrorConfig<
      | ProfileUpdateStatus400
      | ProfileUpdateStatus401
      | ProfileUpdateStatus403
      | ProfileUpdateStatus404
      | ProfileUpdateStatus500
      | ProfileUpdateStatus501
    >,
    ProfileUpdateOptions,
    TContext
  >;
}
