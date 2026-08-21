/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionPublishStatisticsOptions,
  ClassSessionPublishStatisticsStatus200,
  ClassSessionPublishStatisticsStatus400,
  ClassSessionPublishStatisticsStatus401,
  ClassSessionPublishStatisticsStatus403,
  ClassSessionPublishStatisticsStatus404,
  ClassSessionPublishStatisticsStatus500,
  ClassSessionPublishStatisticsStatus501,
} from "../../models/classSession/ClassSessionPublishStatistics";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionPublishStatistics } from "../../clients/classSession/classSessionPublishStatistics";

export const classSessionPublishStatisticsMutationKey = () =>
  [{ url: "/api/app/class-session/:id/publish-statistics/:questionId" }] as const;

export function classSessionPublishStatisticsMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
) {
  const mutationKey = classSessionPublishStatisticsMutationKey();
  return mutationOptions<
    ClassSessionPublishStatisticsStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishStatisticsStatus400
      | ClassSessionPublishStatisticsStatus401
      | ClassSessionPublishStatisticsStatus403
      | ClassSessionPublishStatisticsStatus404
      | ClassSessionPublishStatisticsStatus500
      | ClassSessionPublishStatisticsStatus501
    >,
    ClassSessionPublishStatisticsOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await classSessionPublishStatistics({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/publish-statistics/:questionId}
 */
export function useClassSessionPublishStatistics<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionPublishStatisticsStatus200,
      ResponseErrorConfig<
        | ClassSessionPublishStatisticsStatus400
        | ClassSessionPublishStatisticsStatus401
        | ClassSessionPublishStatisticsStatus403
        | ClassSessionPublishStatisticsStatus404
        | ClassSessionPublishStatisticsStatus500
        | ClassSessionPublishStatisticsStatus501
      >,
      ClassSessionPublishStatisticsOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? classSessionPublishStatisticsMutationKey();

  const baseOptions = classSessionPublishStatisticsMutationOptions(config) as UseMutationOptions<
    ClassSessionPublishStatisticsStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishStatisticsStatus400
      | ClassSessionPublishStatisticsStatus401
      | ClassSessionPublishStatisticsStatus403
      | ClassSessionPublishStatisticsStatus404
      | ClassSessionPublishStatisticsStatus500
      | ClassSessionPublishStatisticsStatus501
    >,
    ClassSessionPublishStatisticsOptions,
    TContext
  >;

  return useMutation<
    ClassSessionPublishStatisticsStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishStatisticsStatus400
      | ClassSessionPublishStatisticsStatus401
      | ClassSessionPublishStatisticsStatus403
      | ClassSessionPublishStatisticsStatus404
      | ClassSessionPublishStatisticsStatus500
      | ClassSessionPublishStatisticsStatus501
    >,
    ClassSessionPublishStatisticsOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionPublishStatisticsStatus200,
    ResponseErrorConfig<
      | ClassSessionPublishStatisticsStatus400
      | ClassSessionPublishStatisticsStatus401
      | ClassSessionPublishStatisticsStatus403
      | ClassSessionPublishStatisticsStatus404
      | ClassSessionPublishStatisticsStatus500
      | ClassSessionPublishStatisticsStatus501
    >,
    ClassSessionPublishStatisticsOptions,
    TContext
  >;
}
