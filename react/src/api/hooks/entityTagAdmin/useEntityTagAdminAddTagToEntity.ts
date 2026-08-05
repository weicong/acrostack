/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EntityTagAdminAddTagToEntityData,
  EntityTagAdminAddTagToEntityStatus200,
  EntityTagAdminAddTagToEntityStatus204,
  EntityTagAdminAddTagToEntityStatus400,
  EntityTagAdminAddTagToEntityStatus401,
  EntityTagAdminAddTagToEntityStatus403,
  EntityTagAdminAddTagToEntityStatus404,
  EntityTagAdminAddTagToEntityStatus500,
  EntityTagAdminAddTagToEntityStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminAddTagToEntity.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { entityTagAdminAddTagToEntity } from "../../clients/entityTagAdmin/entityTagAdminAddTagToEntity.ts";

export const entityTagAdminAddTagToEntityMutationKey = () =>
  [{ url: "/api/cms-kit-admin/entity-tags" }] as const;

export function entityTagAdminAddTagToEntityMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<EntityTagAdminAddTagToEntityData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = entityTagAdminAddTagToEntityMutationKey();
  return mutationOptions<
    EntityTagAdminAddTagToEntityStatus200 | EntityTagAdminAddTagToEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminAddTagToEntityStatus400
      | EntityTagAdminAddTagToEntityStatus401
      | EntityTagAdminAddTagToEntityStatus403
      | EntityTagAdminAddTagToEntityStatus404
      | EntityTagAdminAddTagToEntityStatus500
      | EntityTagAdminAddTagToEntityStatus501
    >,
    { data?: EntityTagAdminAddTagToEntityData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return entityTagAdminAddTagToEntity(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export function useEntityTagAdminAddTagToEntity<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EntityTagAdminAddTagToEntityStatus200 | EntityTagAdminAddTagToEntityStatus204,
      ResponseErrorConfig<
        | EntityTagAdminAddTagToEntityStatus400
        | EntityTagAdminAddTagToEntityStatus401
        | EntityTagAdminAddTagToEntityStatus403
        | EntityTagAdminAddTagToEntityStatus404
        | EntityTagAdminAddTagToEntityStatus500
        | EntityTagAdminAddTagToEntityStatus501
      >,
      { data?: EntityTagAdminAddTagToEntityData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<EntityTagAdminAddTagToEntityData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? entityTagAdminAddTagToEntityMutationKey();

  const baseOptions = entityTagAdminAddTagToEntityMutationOptions(config) as UseMutationOptions<
    EntityTagAdminAddTagToEntityStatus200 | EntityTagAdminAddTagToEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminAddTagToEntityStatus400
      | EntityTagAdminAddTagToEntityStatus401
      | EntityTagAdminAddTagToEntityStatus403
      | EntityTagAdminAddTagToEntityStatus404
      | EntityTagAdminAddTagToEntityStatus500
      | EntityTagAdminAddTagToEntityStatus501
    >,
    { data?: EntityTagAdminAddTagToEntityData },
    TContext
  >;

  return useMutation<
    EntityTagAdminAddTagToEntityStatus200 | EntityTagAdminAddTagToEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminAddTagToEntityStatus400
      | EntityTagAdminAddTagToEntityStatus401
      | EntityTagAdminAddTagToEntityStatus403
      | EntityTagAdminAddTagToEntityStatus404
      | EntityTagAdminAddTagToEntityStatus500
      | EntityTagAdminAddTagToEntityStatus501
    >,
    { data?: EntityTagAdminAddTagToEntityData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EntityTagAdminAddTagToEntityStatus200 | EntityTagAdminAddTagToEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminAddTagToEntityStatus400
      | EntityTagAdminAddTagToEntityStatus401
      | EntityTagAdminAddTagToEntityStatus403
      | EntityTagAdminAddTagToEntityStatus404
      | EntityTagAdminAddTagToEntityStatus500
      | EntityTagAdminAddTagToEntityStatus501
    >,
    { data?: EntityTagAdminAddTagToEntityData },
    TContext
  >;
}
