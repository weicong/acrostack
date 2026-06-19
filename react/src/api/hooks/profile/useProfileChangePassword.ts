/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ProfileChangePasswordData,
  ProfileChangePasswordStatus200,
  ProfileChangePasswordStatus204,
  ProfileChangePasswordStatus400,
  ProfileChangePasswordStatus401,
  ProfileChangePasswordStatus403,
  ProfileChangePasswordStatus404,
  ProfileChangePasswordStatus500,
  ProfileChangePasswordStatus501,
} from "../../models/profile/ProfileChangePassword.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { profileChangePassword } from "../../clients/profile/profileChangePassword.ts";

export const profileChangePasswordMutationKey = () =>
  [{ url: "/api/account/my-profile/change-password" }] as const;

export function profileChangePasswordMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ProfileChangePasswordData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = profileChangePasswordMutationKey();
  return mutationOptions<
    ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204,
    ResponseErrorConfig<
      | ProfileChangePasswordStatus400
      | ProfileChangePasswordStatus401
      | ProfileChangePasswordStatus403
      | ProfileChangePasswordStatus404
      | ProfileChangePasswordStatus500
      | ProfileChangePasswordStatus501
    >,
    { data?: ProfileChangePasswordData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return profileChangePassword(data, config);
    },
  });
}

/**
 * {@link /api/account/my-profile/change-password}
 */
export function useProfileChangePassword<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204,
      ResponseErrorConfig<
        | ProfileChangePasswordStatus400
        | ProfileChangePasswordStatus401
        | ProfileChangePasswordStatus403
        | ProfileChangePasswordStatus404
        | ProfileChangePasswordStatus500
        | ProfileChangePasswordStatus501
      >,
      { data?: ProfileChangePasswordData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ProfileChangePasswordData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? profileChangePasswordMutationKey();

  const baseOptions = profileChangePasswordMutationOptions(config) as UseMutationOptions<
    ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204,
    ResponseErrorConfig<
      | ProfileChangePasswordStatus400
      | ProfileChangePasswordStatus401
      | ProfileChangePasswordStatus403
      | ProfileChangePasswordStatus404
      | ProfileChangePasswordStatus500
      | ProfileChangePasswordStatus501
    >,
    { data?: ProfileChangePasswordData },
    TContext
  >;

  return useMutation<
    ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204,
    ResponseErrorConfig<
      | ProfileChangePasswordStatus400
      | ProfileChangePasswordStatus401
      | ProfileChangePasswordStatus403
      | ProfileChangePasswordStatus404
      | ProfileChangePasswordStatus500
      | ProfileChangePasswordStatus501
    >,
    { data?: ProfileChangePasswordData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204,
    ResponseErrorConfig<
      | ProfileChangePasswordStatus400
      | ProfileChangePasswordStatus401
      | ProfileChangePasswordStatus403
      | ProfileChangePasswordStatus404
      | ProfileChangePasswordStatus500
      | ProfileChangePasswordStatus501
    >,
    { data?: ProfileChangePasswordData },
    TContext
  >;
}
