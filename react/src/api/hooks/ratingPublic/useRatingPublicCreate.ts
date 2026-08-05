/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  RatingPublicCreateData,
  RatingPublicCreatePathEntityType,
  RatingPublicCreatePathEntityId,
  RatingPublicCreateStatus200,
  RatingPublicCreateStatus400,
  RatingPublicCreateStatus401,
  RatingPublicCreateStatus403,
  RatingPublicCreateStatus404,
  RatingPublicCreateStatus500,
  RatingPublicCreateStatus501,
} from "../../models/ratingPublic/RatingPublicCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { ratingPublicCreate } from "../../clients/ratingPublic/ratingPublicCreate.ts";

export const ratingPublicCreateMutationKey = () =>
  [{ url: "/api/cms-kit-public/ratings/:entityType/:entityId" }] as const;

export function ratingPublicCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<RatingPublicCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    {
      entityType: RatingPublicCreatePathEntityType;
      entityId: RatingPublicCreatePathEntityId;
      data?: RatingPublicCreateData;
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ entityType, entityId, data }) => {
      return ratingPublicCreate(entityType, entityId, data, config);
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
      {
        entityType: RatingPublicCreatePathEntityType;
        entityId: RatingPublicCreatePathEntityId;
        data?: RatingPublicCreateData;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<RatingPublicCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    {
      entityType: RatingPublicCreatePathEntityType;
      entityId: RatingPublicCreatePathEntityId;
      data?: RatingPublicCreateData;
    },
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
    {
      entityType: RatingPublicCreatePathEntityType;
      entityId: RatingPublicCreatePathEntityId;
      data?: RatingPublicCreateData;
    },
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
    {
      entityType: RatingPublicCreatePathEntityType;
      entityId: RatingPublicCreatePathEntityId;
      data?: RatingPublicCreateData;
    },
    TContext
  >;
}
