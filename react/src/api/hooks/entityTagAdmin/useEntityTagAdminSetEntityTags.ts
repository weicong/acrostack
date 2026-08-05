/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EntityTagAdminSetEntityTagsData,
  EntityTagAdminSetEntityTagsStatus200,
  EntityTagAdminSetEntityTagsStatus204,
  EntityTagAdminSetEntityTagsStatus400,
  EntityTagAdminSetEntityTagsStatus401,
  EntityTagAdminSetEntityTagsStatus403,
  EntityTagAdminSetEntityTagsStatus404,
  EntityTagAdminSetEntityTagsStatus500,
  EntityTagAdminSetEntityTagsStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminSetEntityTags.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { entityTagAdminSetEntityTags } from "../../clients/entityTagAdmin/entityTagAdminSetEntityTags.ts";

export const entityTagAdminSetEntityTagsMutationKey = () =>
  [{ url: "/api/cms-kit-admin/entity-tags" }] as const;

export function entityTagAdminSetEntityTagsMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<EntityTagAdminSetEntityTagsData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: EntityTagAdminSetEntityTagsData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return entityTagAdminSetEntityTags(data, config);
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
      { data?: EntityTagAdminSetEntityTagsData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<EntityTagAdminSetEntityTagsData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { data?: EntityTagAdminSetEntityTagsData },
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
    { data?: EntityTagAdminSetEntityTagsData },
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
    { data?: EntityTagAdminSetEntityTagsData },
    TContext
  >;
}
