/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  EntityTagAdminAddTagToEntityOptions,
  EntityTagAdminAddTagToEntityStatus200,
  EntityTagAdminAddTagToEntityStatus204,
  EntityTagAdminAddTagToEntityStatus400,
  EntityTagAdminAddTagToEntityStatus401,
  EntityTagAdminAddTagToEntityStatus403,
  EntityTagAdminAddTagToEntityStatus404,
  EntityTagAdminAddTagToEntityStatus500,
  EntityTagAdminAddTagToEntityStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminAddTagToEntity";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { entityTagAdminAddTagToEntity } from "../../clients/entityTagAdmin/entityTagAdminAddTagToEntity";

export const entityTagAdminAddTagToEntityMutationKey = () =>
  [{ url: "/api/cms-kit-admin/entity-tags" }] as const;

export function entityTagAdminAddTagToEntityMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
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
    EntityTagAdminAddTagToEntityOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await entityTagAdminAddTagToEntity({ ...config, body, throwOnError: true });
      return data;
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
      EntityTagAdminAddTagToEntityOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
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
    EntityTagAdminAddTagToEntityOptions,
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
    EntityTagAdminAddTagToEntityOptions,
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
    EntityTagAdminAddTagToEntityOptions,
    TContext
  >;
}
