/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  RatingPublicDeletePathEntityType,
  RatingPublicDeletePathEntityId,
  RatingPublicDeleteStatus200,
  RatingPublicDeleteStatus204,
  RatingPublicDeleteStatus400,
  RatingPublicDeleteStatus401,
  RatingPublicDeleteStatus403,
  RatingPublicDeleteStatus404,
  RatingPublicDeleteStatus500,
  RatingPublicDeleteStatus501,
} from "../../models/ratingPublic/RatingPublicDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { ratingPublicDelete } from "../../clients/ratingPublic/ratingPublicDelete.ts";

export const ratingPublicDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-public/ratings/:entityType/:entityId" }] as const;

export function ratingPublicDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = ratingPublicDeleteMutationKey();
  return mutationOptions<
    RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204,
    ResponseErrorConfig<
      | RatingPublicDeleteStatus400
      | RatingPublicDeleteStatus401
      | RatingPublicDeleteStatus403
      | RatingPublicDeleteStatus404
      | RatingPublicDeleteStatus500
      | RatingPublicDeleteStatus501
    >,
    { entityType: RatingPublicDeletePathEntityType; entityId: RatingPublicDeletePathEntityId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ entityType, entityId }) => {
      return ratingPublicDelete(entityType, entityId, config);
    },
  });
}

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function useRatingPublicDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204,
      ResponseErrorConfig<
        | RatingPublicDeleteStatus400
        | RatingPublicDeleteStatus401
        | RatingPublicDeleteStatus403
        | RatingPublicDeleteStatus404
        | RatingPublicDeleteStatus500
        | RatingPublicDeleteStatus501
      >,
      { entityType: RatingPublicDeletePathEntityType; entityId: RatingPublicDeletePathEntityId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? ratingPublicDeleteMutationKey();

  const baseOptions = ratingPublicDeleteMutationOptions(config) as UseMutationOptions<
    RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204,
    ResponseErrorConfig<
      | RatingPublicDeleteStatus400
      | RatingPublicDeleteStatus401
      | RatingPublicDeleteStatus403
      | RatingPublicDeleteStatus404
      | RatingPublicDeleteStatus500
      | RatingPublicDeleteStatus501
    >,
    { entityType: RatingPublicDeletePathEntityType; entityId: RatingPublicDeletePathEntityId },
    TContext
  >;

  return useMutation<
    RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204,
    ResponseErrorConfig<
      | RatingPublicDeleteStatus400
      | RatingPublicDeleteStatus401
      | RatingPublicDeleteStatus403
      | RatingPublicDeleteStatus404
      | RatingPublicDeleteStatus500
      | RatingPublicDeleteStatus501
    >,
    { entityType: RatingPublicDeletePathEntityType; entityId: RatingPublicDeletePathEntityId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    RatingPublicDeleteStatus200 | RatingPublicDeleteStatus204,
    ResponseErrorConfig<
      | RatingPublicDeleteStatus400
      | RatingPublicDeleteStatus401
      | RatingPublicDeleteStatus403
      | RatingPublicDeleteStatus404
      | RatingPublicDeleteStatus500
      | RatingPublicDeleteStatus501
    >,
    { entityType: RatingPublicDeletePathEntityType; entityId: RatingPublicDeletePathEntityId },
    TContext
  >;
}
