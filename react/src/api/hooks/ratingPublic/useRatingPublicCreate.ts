/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  RatingPublicCreateOptions,
  RatingPublicCreateStatus200,
  RatingPublicCreateStatus400,
  RatingPublicCreateStatus401,
  RatingPublicCreateStatus403,
  RatingPublicCreateStatus404,
  RatingPublicCreateStatus500,
  RatingPublicCreateStatus501,
} from "../../models/ratingPublic/RatingPublicCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { ratingPublicCreate } from "../../clients/ratingPublic/ratingPublicCreate";

export const ratingPublicCreateMutationKey = () =>
  [{ url: "/api/cms-kit-public/ratings/:entityType/:entityId" }] as const;

export function ratingPublicCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = ratingPublicCreateMutationKey();
  return mutationOptions<
    RatingPublicCreateStatus200,
    ResponseErrorConfig<
      | RatingPublicCreateStatus400
      | RatingPublicCreateStatus401
      | RatingPublicCreateStatus403
      | RatingPublicCreateStatus404
      | RatingPublicCreateStatus500
      | RatingPublicCreateStatus501
    >,
    RatingPublicCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await ratingPublicCreate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function useRatingPublicCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      RatingPublicCreateStatus200,
      ResponseErrorConfig<
        | RatingPublicCreateStatus400
        | RatingPublicCreateStatus401
        | RatingPublicCreateStatus403
        | RatingPublicCreateStatus404
        | RatingPublicCreateStatus500
        | RatingPublicCreateStatus501
      >,
      RatingPublicCreateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? ratingPublicCreateMutationKey();

  const baseOptions = ratingPublicCreateMutationOptions(config) as UseMutationOptions<
    RatingPublicCreateStatus200,
    ResponseErrorConfig<
      | RatingPublicCreateStatus400
      | RatingPublicCreateStatus401
      | RatingPublicCreateStatus403
      | RatingPublicCreateStatus404
      | RatingPublicCreateStatus500
      | RatingPublicCreateStatus501
    >,
    RatingPublicCreateOptions,
    TContext
  >;

  return useMutation<
    RatingPublicCreateStatus200,
    ResponseErrorConfig<
      | RatingPublicCreateStatus400
      | RatingPublicCreateStatus401
      | RatingPublicCreateStatus403
      | RatingPublicCreateStatus404
      | RatingPublicCreateStatus500
      | RatingPublicCreateStatus501
    >,
    RatingPublicCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    RatingPublicCreateStatus200,
    ResponseErrorConfig<
      | RatingPublicCreateStatus400
      | RatingPublicCreateStatus401
      | RatingPublicCreateStatus403
      | RatingPublicCreateStatus404
      | RatingPublicCreateStatus500
      | RatingPublicCreateStatus501
    >,
    RatingPublicCreateOptions,
    TContext
  >;
}
