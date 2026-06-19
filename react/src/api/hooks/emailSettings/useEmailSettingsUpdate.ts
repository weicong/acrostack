/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EmailSettingsUpdateData,
  EmailSettingsUpdateStatus200,
  EmailSettingsUpdateStatus204,
  EmailSettingsUpdateStatus400,
  EmailSettingsUpdateStatus401,
  EmailSettingsUpdateStatus403,
  EmailSettingsUpdateStatus404,
  EmailSettingsUpdateStatus500,
  EmailSettingsUpdateStatus501,
} from "../../models/emailSettings/EmailSettingsUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { emailSettingsUpdate } from "../../clients/emailSettings/emailSettingsUpdate.ts";

export const emailSettingsUpdateMutationKey = () =>
  [{ url: "/api/setting-management/emailing" }] as const;

export function emailSettingsUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<EmailSettingsUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = emailSettingsUpdateMutationKey();
  return mutationOptions<
    EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204,
    ResponseErrorConfig<
      | EmailSettingsUpdateStatus400
      | EmailSettingsUpdateStatus401
      | EmailSettingsUpdateStatus403
      | EmailSettingsUpdateStatus404
      | EmailSettingsUpdateStatus500
      | EmailSettingsUpdateStatus501
    >,
    { data?: EmailSettingsUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return emailSettingsUpdate(data, config);
    },
  });
}

/**
 * {@link /api/setting-management/emailing}
 */
export function useEmailSettingsUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204,
      ResponseErrorConfig<
        | EmailSettingsUpdateStatus400
        | EmailSettingsUpdateStatus401
        | EmailSettingsUpdateStatus403
        | EmailSettingsUpdateStatus404
        | EmailSettingsUpdateStatus500
        | EmailSettingsUpdateStatus501
      >,
      { data?: EmailSettingsUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<EmailSettingsUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? emailSettingsUpdateMutationKey();

  const baseOptions = emailSettingsUpdateMutationOptions(config) as UseMutationOptions<
    EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204,
    ResponseErrorConfig<
      | EmailSettingsUpdateStatus400
      | EmailSettingsUpdateStatus401
      | EmailSettingsUpdateStatus403
      | EmailSettingsUpdateStatus404
      | EmailSettingsUpdateStatus500
      | EmailSettingsUpdateStatus501
    >,
    { data?: EmailSettingsUpdateData },
    TContext
  >;

  return useMutation<
    EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204,
    ResponseErrorConfig<
      | EmailSettingsUpdateStatus400
      | EmailSettingsUpdateStatus401
      | EmailSettingsUpdateStatus403
      | EmailSettingsUpdateStatus404
      | EmailSettingsUpdateStatus500
      | EmailSettingsUpdateStatus501
    >,
    { data?: EmailSettingsUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204,
    ResponseErrorConfig<
      | EmailSettingsUpdateStatus400
      | EmailSettingsUpdateStatus401
      | EmailSettingsUpdateStatus403
      | EmailSettingsUpdateStatus404
      | EmailSettingsUpdateStatus500
      | EmailSettingsUpdateStatus501
    >,
    { data?: EmailSettingsUpdateData },
    TContext
  >;
}
