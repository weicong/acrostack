/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EntityTagAdminRemoveTagFromEntityQueryTagId,
  EntityTagAdminRemoveTagFromEntityQueryEntityType,
  EntityTagAdminRemoveTagFromEntityQueryEntityId,
  EntityTagAdminRemoveTagFromEntityStatus200,
  EntityTagAdminRemoveTagFromEntityStatus204,
  EntityTagAdminRemoveTagFromEntityStatus400,
  EntityTagAdminRemoveTagFromEntityStatus401,
  EntityTagAdminRemoveTagFromEntityStatus403,
  EntityTagAdminRemoveTagFromEntityStatus404,
  EntityTagAdminRemoveTagFromEntityStatus500,
  EntityTagAdminRemoveTagFromEntityStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminRemoveTagFromEntity.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { entityTagAdminRemoveTagFromEntity } from "../../clients/entityTagAdmin/entityTagAdminRemoveTagFromEntity.ts";

export const entityTagAdminRemoveTagFromEntityMutationKey = () =>
  [{ url: "/api/cms-kit-admin/entity-tags" }] as const;

export function entityTagAdminRemoveTagFromEntityMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    {
      params: {
        TagId: EntityTagAdminRemoveTagFromEntityQueryTagId;
        EntityType: EntityTagAdminRemoveTagFromEntityQueryEntityType;
        EntityId: EntityTagAdminRemoveTagFromEntityQueryEntityId;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ params }) => {
      return entityTagAdminRemoveTagFromEntity(params, config);
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
      {
        params: {
          TagId: EntityTagAdminRemoveTagFromEntityQueryTagId;
          EntityType: EntityTagAdminRemoveTagFromEntityQueryEntityType;
          EntityId: EntityTagAdminRemoveTagFromEntityQueryEntityId;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    {
      params: {
        TagId: EntityTagAdminRemoveTagFromEntityQueryTagId;
        EntityType: EntityTagAdminRemoveTagFromEntityQueryEntityType;
        EntityId: EntityTagAdminRemoveTagFromEntityQueryEntityId;
      };
    },
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
    {
      params: {
        TagId: EntityTagAdminRemoveTagFromEntityQueryTagId;
        EntityType: EntityTagAdminRemoveTagFromEntityQueryEntityType;
        EntityId: EntityTagAdminRemoveTagFromEntityQueryEntityId;
      };
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
    EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminRemoveTagFromEntityStatus400
      | EntityTagAdminRemoveTagFromEntityStatus401
      | EntityTagAdminRemoveTagFromEntityStatus403
      | EntityTagAdminRemoveTagFromEntityStatus404
      | EntityTagAdminRemoveTagFromEntityStatus500
      | EntityTagAdminRemoveTagFromEntityStatus501
    >,
    {
      params: {
        TagId: EntityTagAdminRemoveTagFromEntityQueryTagId;
        EntityType: EntityTagAdminRemoveTagFromEntityQueryEntityType;
        EntityId: EntityTagAdminRemoveTagFromEntityQueryEntityId;
      };
    },
    TContext
  >;
}
