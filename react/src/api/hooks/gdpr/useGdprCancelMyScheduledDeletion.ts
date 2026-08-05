/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { GdprCancelMyScheduledDeletionStatus200 } from "../../models/gdpr/GdprCancelMyScheduledDeletion.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { gdprCancelMyScheduledDeletion } from "../../clients/gdpr/gdprCancelMyScheduledDeletion.ts";

export const gdprCancelMyScheduledDeletionMutationKey = () =>
  [{ url: "/api/app/gdpr/scheduled-deletion" }] as const;

export function gdprCancelMyScheduledDeletionMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = gdprCancelMyScheduledDeletionMutationKey();
  return mutationOptions<
    GdprCancelMyScheduledDeletionStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >({
    mutationKey,
    mutationFn: async (_) => {
      return gdprCancelMyScheduledDeletion(config);
    },
  });
}

/**
 * {@link /api/app/gdpr/scheduled-deletion}
 */
export function useGdprCancelMyScheduledDeletion<TContext>(
  options: {
    mutation?: UseMutationOptions<
      GdprCancelMyScheduledDeletionStatus200,
      ResponseErrorConfig<Error>,
      undefined,
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? gdprCancelMyScheduledDeletionMutationKey();

  const baseOptions = gdprCancelMyScheduledDeletionMutationOptions(config) as UseMutationOptions<
    GdprCancelMyScheduledDeletionStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >;

  return useMutation<
    GdprCancelMyScheduledDeletionStatus200,
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
    GdprCancelMyScheduledDeletionStatus200,
    ResponseErrorConfig<Error>,
    undefined,
    TContext
  >;
}
