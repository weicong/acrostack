/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TagAdminUpdateData,
  TagAdminUpdatePathId,
  TagAdminUpdateStatus200,
  TagAdminUpdateStatus400,
  TagAdminUpdateStatus401,
  TagAdminUpdateStatus403,
  TagAdminUpdateStatus404,
  TagAdminUpdateStatus500,
  TagAdminUpdateStatus501,
} from "../../models/tagAdmin/TagAdminUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tagAdminUpdate } from "../../clients/tagAdmin/tagAdminUpdate.ts";

export const tagAdminUpdateMutationKey = () => [{ url: "/api/cms-kit-admin/tags/:id" }] as const;

export function tagAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<TagAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = tagAdminUpdateMutationKey();
  return mutationOptions<
    TagAdminUpdateStatus200,
    ResponseErrorConfig<
      | TagAdminUpdateStatus400
      | TagAdminUpdateStatus401
      | TagAdminUpdateStatus403
      | TagAdminUpdateStatus404
      | TagAdminUpdateStatus500
      | TagAdminUpdateStatus501
    >,
    { id: TagAdminUpdatePathId; data?: TagAdminUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return tagAdminUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function useTagAdminUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TagAdminUpdateStatus200,
      ResponseErrorConfig<
        | TagAdminUpdateStatus400
        | TagAdminUpdateStatus401
        | TagAdminUpdateStatus403
        | TagAdminUpdateStatus404
        | TagAdminUpdateStatus500
        | TagAdminUpdateStatus501
      >,
      { id: TagAdminUpdatePathId; data?: TagAdminUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<TagAdminUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tagAdminUpdateMutationKey();

  const baseOptions = tagAdminUpdateMutationOptions(config) as UseMutationOptions<
    TagAdminUpdateStatus200,
    ResponseErrorConfig<
      | TagAdminUpdateStatus400
      | TagAdminUpdateStatus401
      | TagAdminUpdateStatus403
      | TagAdminUpdateStatus404
      | TagAdminUpdateStatus500
      | TagAdminUpdateStatus501
    >,
    { id: TagAdminUpdatePathId; data?: TagAdminUpdateData },
    TContext
  >;

  return useMutation<
    TagAdminUpdateStatus200,
    ResponseErrorConfig<
      | TagAdminUpdateStatus400
      | TagAdminUpdateStatus401
      | TagAdminUpdateStatus403
      | TagAdminUpdateStatus404
      | TagAdminUpdateStatus500
      | TagAdminUpdateStatus501
    >,
    { id: TagAdminUpdatePathId; data?: TagAdminUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TagAdminUpdateStatus200,
    ResponseErrorConfig<
      | TagAdminUpdateStatus400
      | TagAdminUpdateStatus401
      | TagAdminUpdateStatus403
      | TagAdminUpdateStatus404
      | TagAdminUpdateStatus500
      | TagAdminUpdateStatus501
    >,
    { id: TagAdminUpdatePathId; data?: TagAdminUpdateData },
    TContext
  >;
}
