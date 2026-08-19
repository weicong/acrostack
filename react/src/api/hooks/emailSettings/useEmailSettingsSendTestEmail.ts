/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  EmailSettingsSendTestEmailOptions,
  EmailSettingsSendTestEmailStatus200,
  EmailSettingsSendTestEmailStatus204,
  EmailSettingsSendTestEmailStatus400,
  EmailSettingsSendTestEmailStatus401,
  EmailSettingsSendTestEmailStatus403,
  EmailSettingsSendTestEmailStatus404,
  EmailSettingsSendTestEmailStatus500,
  EmailSettingsSendTestEmailStatus501,
} from "../../models/emailSettings/EmailSettingsSendTestEmail";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { emailSettingsSendTestEmail } from "../../clients/emailSettings/emailSettingsSendTestEmail";

export const emailSettingsSendTestEmailMutationKey = () =>
  [{ url: "/api/setting-management/emailing/send-test-email" }] as const;

export function emailSettingsSendTestEmailMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
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
    EmailSettingsSendTestEmailOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await emailSettingsSendTestEmail({ ...config, body, throwOnError: true });
      return data;
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
      EmailSettingsSendTestEmailOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
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
    EmailSettingsSendTestEmailOptions,
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
    EmailSettingsSendTestEmailOptions,
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
    EmailSettingsSendTestEmailOptions,
    TContext
  >;
}
