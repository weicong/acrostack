/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  EntityTagAdminRemoveTagFromEntityOptions,
  EntityTagAdminRemoveTagFromEntityStatus200,
  EntityTagAdminRemoveTagFromEntityStatus204,
  EntityTagAdminRemoveTagFromEntityStatus400,
  EntityTagAdminRemoveTagFromEntityStatus401,
  EntityTagAdminRemoveTagFromEntityStatus403,
  EntityTagAdminRemoveTagFromEntityStatus404,
  EntityTagAdminRemoveTagFromEntityStatus500,
  EntityTagAdminRemoveTagFromEntityStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminRemoveTagFromEntity";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { entityTagAdminRemoveTagFromEntity } from "../../clients/entityTagAdmin/entityTagAdminRemoveTagFromEntity";

export const entityTagAdminRemoveTagFromEntityMutationKey = () =>
  [{ url: "/api/cms-kit-admin/entity-tags" }] as const;

export function entityTagAdminRemoveTagFromEntityMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = entityTagAdminRemoveTagFromEntityMutationKey();
  return mutationOptions<
    EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminRemoveTagFromEntityStatus400
      | EntityTagAdminRemoveTagFromEntityStatus401
      | EntityTagAdminRemoveTagFromEntityStatus403
      | EntityTagAdminRemoveTagFromEntityStatus404
      | EntityTagAdminRemoveTagFromEntityStatus500
      | EntityTagAdminRemoveTagFromEntityStatus501
    >,
    EntityTagAdminRemoveTagFromEntityOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ query }) => {
      const { data } = await entityTagAdminRemoveTagFromEntity({
        ...config,
        query,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export function useEntityTagAdminRemoveTagFromEntity<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204,
      ResponseErrorConfig<
        | EntityTagAdminRemoveTagFromEntityStatus400
        | EntityTagAdminRemoveTagFromEntityStatus401
        | EntityTagAdminRemoveTagFromEntityStatus403
        | EntityTagAdminRemoveTagFromEntityStatus404
        | EntityTagAdminRemoveTagFromEntityStatus500
        | EntityTagAdminRemoveTagFromEntityStatus501
      >,
      EntityTagAdminRemoveTagFromEntityOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? entityTagAdminRemoveTagFromEntityMutationKey();

  const baseOptions = entityTagAdminRemoveTagFromEntityMutationOptions(
    config,
  ) as UseMutationOptions<
    EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminRemoveTagFromEntityStatus400
      | EntityTagAdminRemoveTagFromEntityStatus401
      | EntityTagAdminRemoveTagFromEntityStatus403
      | EntityTagAdminRemoveTagFromEntityStatus404
      | EntityTagAdminRemoveTagFromEntityStatus500
      | EntityTagAdminRemoveTagFromEntityStatus501
    >,
    EntityTagAdminRemoveTagFromEntityOptions,
    TContext
  >;

  return useMutation<
    EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminRemoveTagFromEntityStatus400
      | EntityTagAdminRemoveTagFromEntityStatus401
      | EntityTagAdminRemoveTagFromEntityStatus403
      | EntityTagAdminRemoveTagFromEntityStatus404
      | EntityTagAdminRemoveTagFromEntityStatus500
      | EntityTagAdminRemoveTagFromEntityStatus501
    >,
    EntityTagAdminRemoveTagFromEntityOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminRemoveTagFromEntityStatus400
      | EntityTagAdminRemoveTagFromEntityStatus401
      | EntityTagAdminRemoveTagFromEntityStatus403
      | EntityTagAdminRemoveTagFromEntityStatus404
      | EntityTagAdminRemoveTagFromEntityStatus500
      | EntityTagAdminRemoveTagFromEntityStatus501
    >,
    EntityTagAdminRemoveTagFromEntityOptions,
    TContext
  >;
}
