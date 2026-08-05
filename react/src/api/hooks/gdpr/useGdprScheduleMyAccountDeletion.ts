/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { GdprScheduleMyAccountDeletionStatus200 } from "../../models/gdpr/GdprScheduleMyAccountDeletion.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { gdprScheduleMyAccountDeletion } from "../../clients/gdpr/gdprScheduleMyAccountDeletion.ts";

export const gdprScheduleMyAccountDeletionMutationKey = () =>
  [{ url: "/api/app/gdpr/scheduled-deletion" }] as const;

export function gdprScheduleMyAccountDeletionMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = gdprScheduleMyAccountDeletionMutationKey();
  return mutationOptions<
    GdprScheduleMyAccountDeletionStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >({
    mutationKey,
    mutationFn: async (_) => {
      return gdprScheduleMyAccountDeletion(config);
    },
  });
}

/**
 * {@link /api/app/gdpr/scheduled-deletion}
 */
export function useGdprScheduleMyAccountDeletion<TContext>(
  options: {
    mutation?: UseMutationOptions<
      GdprScheduleMyAccountDeletionStatus200,
      ResponseErrorConfig<Error>,
      undefined,
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? gdprScheduleMyAccountDeletionMutationKey();

  const baseOptions = gdprScheduleMyAccountDeletionMutationOptions(config) as UseMutationOptions<
    GdprScheduleMyAccountDeletionStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >;

  return useMutation<
    GdprScheduleMyAccountDeletionStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    GdprScheduleMyAccountDeletionStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >;
}
