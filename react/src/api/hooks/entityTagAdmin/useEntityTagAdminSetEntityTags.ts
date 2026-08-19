/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  EntityTagAdminSetEntityTagsOptions,
  EntityTagAdminSetEntityTagsStatus200,
  EntityTagAdminSetEntityTagsStatus204,
  EntityTagAdminSetEntityTagsStatus400,
  EntityTagAdminSetEntityTagsStatus401,
  EntityTagAdminSetEntityTagsStatus403,
  EntityTagAdminSetEntityTagsStatus404,
  EntityTagAdminSetEntityTagsStatus500,
  EntityTagAdminSetEntityTagsStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminSetEntityTags";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { entityTagAdminSetEntityTags } from "../../clients/entityTagAdmin/entityTagAdminSetEntityTags";

export const entityTagAdminSetEntityTagsMutationKey = () =>
  [{ url: "/api/cms-kit-admin/entity-tags" }] as const;

export function entityTagAdminSetEntityTagsMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
  } = {},
) {
  const mutationKey = entityTagAdminSetEntityTagsMutationKey();
  return mutationOptions<
    EntityTagAdminSetEntityTagsStatus200 | EntityTagAdminSetEntityTagsStatus204,
    ResponseErrorConfig<
      | EntityTagAdminSetEntityTagsStatus400
      | EntityTagAdminSetEntityTagsStatus401
      | EntityTagAdminSetEntityTagsStatus403
      | EntityTagAdminSetEntityTagsStatus404
      | EntityTagAdminSetEntityTagsStatus500
      | EntityTagAdminSetEntityTagsStatus501
    >,
    EntityTagAdminSetEntityTagsOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await entityTagAdminSetEntityTags({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export function useEntityTagAdminSetEntityTags<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EntityTagAdminSetEntityTagsStatus200 | EntityTagAdminSetEntityTagsStatus204,
      ResponseErrorConfig<
        | EntityTagAdminSetEntityTagsStatus400
        | EntityTagAdminSetEntityTagsStatus401
        | EntityTagAdminSetEntityTagsStatus403
        | EntityTagAdminSetEntityTagsStatus404
        | EntityTagAdminSetEntityTagsStatus500
        | EntityTagAdminSetEntityTagsStatus501
      >,
      EntityTagAdminSetEntityTagsOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? entityTagAdminSetEntityTagsMutationKey();

  const baseOptions = entityTagAdminSetEntityTagsMutationOptions(config) as UseMutationOptions<
    EntityTagAdminSetEntityTagsStatus200 | EntityTagAdminSetEntityTagsStatus204,
    ResponseErrorConfig<
      | EntityTagAdminSetEntityTagsStatus400
      | EntityTagAdminSetEntityTagsStatus401
      | EntityTagAdminSetEntityTagsStatus403
      | EntityTagAdminSetEntityTagsStatus404
      | EntityTagAdminSetEntityTagsStatus500
      | EntityTagAdminSetEntityTagsStatus501
    >,
    EntityTagAdminSetEntityTagsOptions,
    TContext
  >;

  return useMutation<
    EntityTagAdminSetEntityTagsStatus200 | EntityTagAdminSetEntityTagsStatus204,
    ResponseErrorConfig<
      | EntityTagAdminSetEntityTagsStatus400
      | EntityTagAdminSetEntityTagsStatus401
      | EntityTagAdminSetEntityTagsStatus403
      | EntityTagAdminSetEntityTagsStatus404
      | EntityTagAdminSetEntityTagsStatus500
      | EntityTagAdminSetEntityTagsStatus501
    >,
    EntityTagAdminSetEntityTagsOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EntityTagAdminSetEntityTagsStatus200 | EntityTagAdminSetEntityTagsStatus204,
    ResponseErrorConfig<
      | EntityTagAdminSetEntityTagsStatus400
      | EntityTagAdminSetEntityTagsStatus401
      | EntityTagAdminSetEntityTagsStatus403
      | EntityTagAdminSetEntityTagsStatus404
      | EntityTagAdminSetEntityTagsStatus500
      | EntityTagAdminSetEntityTagsStatus501
    >,
    EntityTagAdminSetEntityTagsOptions,
    TContext
  >;
}
