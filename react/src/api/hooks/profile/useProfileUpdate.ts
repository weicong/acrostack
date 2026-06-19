/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ProfileUpdateData,
  ProfileUpdateStatus200,
  ProfileUpdateStatus400,
  ProfileUpdateStatus401,
  ProfileUpdateStatus403,
  ProfileUpdateStatus404,
  ProfileUpdateStatus500,
  ProfileUpdateStatus501,
} from "../../models/profile/ProfileUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { profileUpdate } from "../../clients/profile/profileUpdate.ts";

export const profileUpdateMutationKey = () => [{ url: "/api/account/my-profile" }] as const;

export function profileUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ProfileUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: ProfileUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return profileUpdate(data, config);
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
      { data?: ProfileUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ProfileUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: ProfileUpdateData },
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
    { data?: ProfileUpdateData },
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
    { data?: ProfileUpdateData },
    TContext
  >;
}
