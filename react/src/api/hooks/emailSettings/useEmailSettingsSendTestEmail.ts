/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EmailSettingsSendTestEmailData,
  EmailSettingsSendTestEmailStatus200,
  EmailSettingsSendTestEmailStatus204,
  EmailSettingsSendTestEmailStatus400,
  EmailSettingsSendTestEmailStatus401,
  EmailSettingsSendTestEmailStatus403,
  EmailSettingsSendTestEmailStatus404,
  EmailSettingsSendTestEmailStatus500,
  EmailSettingsSendTestEmailStatus501,
} from "../../models/emailSettings/EmailSettingsSendTestEmail.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { emailSettingsSendTestEmail } from "../../clients/emailSettings/emailSettingsSendTestEmail.ts";

export const emailSettingsSendTestEmailMutationKey = () =>
  [{ url: "/api/setting-management/emailing/send-test-email" }] as const;

export function emailSettingsSendTestEmailMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<EmailSettingsSendTestEmailData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = emailSettingsSendTestEmailMutationKey();
  return mutationOptions<
    EmailSettingsSendTestEmailStatus200 | EmailSettingsSendTestEmailStatus204,
    ResponseErrorConfig<
      | EmailSettingsSendTestEmailStatus400
      | EmailSettingsSendTestEmailStatus401
      | EmailSettingsSendTestEmailStatus403
      | EmailSettingsSendTestEmailStatus404
      | EmailSettingsSendTestEmailStatus500
      | EmailSettingsSendTestEmailStatus501
    >,
    { data?: EmailSettingsSendTestEmailData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return emailSettingsSendTestEmail(data, config);
    },
  });
}

/**
 * {@link /api/setting-management/emailing/send-test-email}
 */
export function useEmailSettingsSendTestEmail<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EmailSettingsSendTestEmailStatus200 | EmailSettingsSendTestEmailStatus204,
      ResponseErrorConfig<
        | EmailSettingsSendTestEmailStatus400
        | EmailSettingsSendTestEmailStatus401
        | EmailSettingsSendTestEmailStatus403
        | EmailSettingsSendTestEmailStatus404
        | EmailSettingsSendTestEmailStatus500
        | EmailSettingsSendTestEmailStatus501
      >,
      { data?: EmailSettingsSendTestEmailData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<EmailSettingsSendTestEmailData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? emailSettingsSendTestEmailMutationKey();

  const baseOptions = emailSettingsSendTestEmailMutationOptions(config) as UseMutationOptions<
    EmailSettingsSendTestEmailStatus200 | EmailSettingsSendTestEmailStatus204,
    ResponseErrorConfig<
      | EmailSettingsSendTestEmailStatus400
      | EmailSettingsSendTestEmailStatus401
      | EmailSettingsSendTestEmailStatus403
      | EmailSettingsSendTestEmailStatus404
      | EmailSettingsSendTestEmailStatus500
      | EmailSettingsSendTestEmailStatus501
    >,
    { data?: EmailSettingsSendTestEmailData },
    TContext
  >;

  return useMutation<
    EmailSettingsSendTestEmailStatus200 | EmailSettingsSendTestEmailStatus204,
    ResponseErrorConfig<
      | EmailSettingsSendTestEmailStatus400
      | EmailSettingsSendTestEmailStatus401
      | EmailSettingsSendTestEmailStatus403
      | EmailSettingsSendTestEmailStatus404
      | EmailSettingsSendTestEmailStatus500
      | EmailSettingsSendTestEmailStatus501
    >,
    { data?: EmailSettingsSendTestEmailData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EmailSettingsSendTestEmailStatus200 | EmailSettingsSendTestEmailStatus204,
    ResponseErrorConfig<
      | EmailSettingsSendTestEmailStatus400
      | EmailSettingsSendTestEmailStatus401
      | EmailSettingsSendTestEmailStatus403
      | EmailSettingsSendTestEmailStatus404
      | EmailSettingsSendTestEmailStatus500
      | EmailSettingsSendTestEmailStatus501
    >,
    { data?: EmailSettingsSendTestEmailData },
    TContext
  >;
}
