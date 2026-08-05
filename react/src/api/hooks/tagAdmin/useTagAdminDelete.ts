/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TagAdminDeletePathId,
  TagAdminDeleteStatus200,
  TagAdminDeleteStatus204,
  TagAdminDeleteStatus400,
  TagAdminDeleteStatus401,
  TagAdminDeleteStatus403,
  TagAdminDeleteStatus404,
  TagAdminDeleteStatus500,
  TagAdminDeleteStatus501,
} from "../../models/tagAdmin/TagAdminDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tagAdminDelete } from "../../clients/tagAdmin/tagAdminDelete.ts";

export const tagAdminDeleteMutationKey = () => [{ url: "/api/cms-kit-admin/tags/:id" }] as const;

export function tagAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = tagAdminDeleteMutationKey();
  return mutationOptions<
    TagAdminDeleteStatus200 | TagAdminDeleteStatus204,
    ResponseErrorConfig<
      | TagAdminDeleteStatus400
      | TagAdminDeleteStatus401
      | TagAdminDeleteStatus403
      | TagAdminDeleteStatus404
      | TagAdminDeleteStatus500
      | TagAdminDeleteStatus501
    >,
    { id: TagAdminDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return tagAdminDelete(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function useTagAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TagAdminDeleteStatus200 | TagAdminDeleteStatus204,
      ResponseErrorConfig<
        | TagAdminDeleteStatus400
        | TagAdminDeleteStatus401
        | TagAdminDeleteStatus403
        | TagAdminDeleteStatus404
        | TagAdminDeleteStatus500
        | TagAdminDeleteStatus501
      >,
      { id: TagAdminDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tagAdminDeleteMutationKey();

  const baseOptions = tagAdminDeleteMutationOptions(config) as UseMutationOptions<
    TagAdminDeleteStatus200 | TagAdminDeleteStatus204,
    ResponseErrorConfig<
      | TagAdminDeleteStatus400
      | TagAdminDeleteStatus401
      | TagAdminDeleteStatus403
      | TagAdminDeleteStatus404
      | TagAdminDeleteStatus500
      | TagAdminDeleteStatus501
    >,
    { id: TagAdminDeletePathId },
    TContext
  >;

  return useMutation<
    TagAdminDeleteStatus200 | TagAdminDeleteStatus204,
    ResponseErrorConfig<
      | TagAdminDeleteStatus400
      | TagAdminDeleteStatus401
      | TagAdminDeleteStatus403
      | TagAdminDeleteStatus404
      | TagAdminDeleteStatus500
      | TagAdminDeleteStatus501
    >,
    { id: TagAdminDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TagAdminDeleteStatus200 | TagAdminDeleteStatus204,
    ResponseErrorConfig<
      | TagAdminDeleteStatus400
      | TagAdminDeleteStatus401
      | TagAdminDeleteStatus403
      | TagAdminDeleteStatus404
      | TagAdminDeleteStatus500
      | TagAdminDeleteStatus501
    >,
    { id: TagAdminDeletePathId },
    TContext
  >;
}
