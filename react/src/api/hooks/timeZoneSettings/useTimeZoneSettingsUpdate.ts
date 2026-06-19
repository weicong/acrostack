/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TimeZoneSettingsUpdateQueryTimezone,
  TimeZoneSettingsUpdateStatus200,
  TimeZoneSettingsUpdateStatus204,
  TimeZoneSettingsUpdateStatus400,
  TimeZoneSettingsUpdateStatus401,
  TimeZoneSettingsUpdateStatus403,
  TimeZoneSettingsUpdateStatus404,
  TimeZoneSettingsUpdateStatus500,
  TimeZoneSettingsUpdateStatus501,
} from "../../models/timeZoneSettings/TimeZoneSettingsUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { timeZoneSettingsUpdate } from "../../clients/timeZoneSettings/timeZoneSettingsUpdate.ts";

export const timeZoneSettingsUpdateMutationKey = () =>
  [{ url: "/api/setting-management/timezone" }] as const;

export function timeZoneSettingsUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = timeZoneSettingsUpdateMutationKey();
  return mutationOptions<
    TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204,
    ResponseErrorConfig<
      | TimeZoneSettingsUpdateStatus400
      | TimeZoneSettingsUpdateStatus401
      | TimeZoneSettingsUpdateStatus403
      | TimeZoneSettingsUpdateStatus404
      | TimeZoneSettingsUpdateStatus500
      | TimeZoneSettingsUpdateStatus501
    >,
    { params?: { timezone?: TimeZoneSettingsUpdateQueryTimezone } },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ params }) => {
      return timeZoneSettingsUpdate(params, config);
    },
  });
}

/**
 * {@link /api/setting-management/timezone}
 */
export function useTimeZoneSettingsUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204,
      ResponseErrorConfig<
        | TimeZoneSettingsUpdateStatus400
        | TimeZoneSettingsUpdateStatus401
        | TimeZoneSettingsUpdateStatus403
        | TimeZoneSettingsUpdateStatus404
        | TimeZoneSettingsUpdateStatus500
        | TimeZoneSettingsUpdateStatus501
      >,
      { params?: { timezone?: TimeZoneSettingsUpdateQueryTimezone } },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? timeZoneSettingsUpdateMutationKey();

  const baseOptions = timeZoneSettingsUpdateMutationOptions(config) as UseMutationOptions<
    TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204,
    ResponseErrorConfig<
      | TimeZoneSettingsUpdateStatus400
      | TimeZoneSettingsUpdateStatus401
      | TimeZoneSettingsUpdateStatus403
      | TimeZoneSettingsUpdateStatus404
      | TimeZoneSettingsUpdateStatus500
      | TimeZoneSettingsUpdateStatus501
    >,
    { params?: { timezone?: TimeZoneSettingsUpdateQueryTimezone } },
    TContext
  >;

  return useMutation<
    TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204,
    ResponseErrorConfig<
      | TimeZoneSettingsUpdateStatus400
      | TimeZoneSettingsUpdateStatus401
      | TimeZoneSettingsUpdateStatus403
      | TimeZoneSettingsUpdateStatus404
      | TimeZoneSettingsUpdateStatus500
      | TimeZoneSettingsUpdateStatus501
    >,
    { params?: { timezone?: TimeZoneSettingsUpdateQueryTimezone } },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204,
    ResponseErrorConfig<
      | TimeZoneSettingsUpdateStatus400
      | TimeZoneSettingsUpdateStatus401
      | TimeZoneSettingsUpdateStatus403
      | TimeZoneSettingsUpdateStatus404
      | TimeZoneSettingsUpdateStatus500
      | TimeZoneSettingsUpdateStatus501
    >,
    { params?: { timezone?: TimeZoneSettingsUpdateQueryTimezone } },
    TContext
  >;
}
