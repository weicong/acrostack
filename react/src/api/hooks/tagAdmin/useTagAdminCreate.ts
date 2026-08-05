/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TagAdminCreateData,
  TagAdminCreateStatus200,
  TagAdminCreateStatus400,
  TagAdminCreateStatus401,
  TagAdminCreateStatus403,
  TagAdminCreateStatus404,
  TagAdminCreateStatus500,
  TagAdminCreateStatus501,
} from "../../models/tagAdmin/TagAdminCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tagAdminCreate } from "../../clients/tagAdmin/tagAdminCreate.ts";

export const tagAdminCreateMutationKey = () => [{ url: "/api/cms-kit-admin/tags" }] as const;

export function tagAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<TagAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = tagAdminCreateMutationKey();
  return mutationOptions<
    TagAdminCreateStatus200,
    ResponseErrorConfig<
      | TagAdminCreateStatus400
      | TagAdminCreateStatus401
      | TagAdminCreateStatus403
      | TagAdminCreateStatus404
      | TagAdminCreateStatus500
      | TagAdminCreateStatus501
    >,
    { data?: TagAdminCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return tagAdminCreate(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/tags}
 */
export function useTagAdminCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TagAdminCreateStatus200,
      ResponseErrorConfig<
        | TagAdminCreateStatus400
        | TagAdminCreateStatus401
        | TagAdminCreateStatus403
        | TagAdminCreateStatus404
        | TagAdminCreateStatus500
        | TagAdminCreateStatus501
      >,
      { data?: TagAdminCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<TagAdminCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tagAdminCreateMutationKey();

  const baseOptions = tagAdminCreateMutationOptions(config) as UseMutationOptions<
    TagAdminCreateStatus200,
    ResponseErrorConfig<
      | TagAdminCreateStatus400
      | TagAdminCreateStatus401
      | TagAdminCreateStatus403
      | TagAdminCreateStatus404
      | TagAdminCreateStatus500
      | TagAdminCreateStatus501
    >,
    { data?: TagAdminCreateData },
    TContext
  >;

  return useMutation<
    TagAdminCreateStatus200,
    ResponseErrorConfig<
      | TagAdminCreateStatus400
      | TagAdminCreateStatus401
      | TagAdminCreateStatus403
      | TagAdminCreateStatus404
      | TagAdminCreateStatus500
      | TagAdminCreateStatus501
    >,
    { data?: TagAdminCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TagAdminCreateStatus200,
    ResponseErrorConfig<
      | TagAdminCreateStatus400
      | TagAdminCreateStatus401
      | TagAdminCreateStatus403
      | TagAdminCreateStatus404
      | TagAdminCreateStatus500
      | TagAdminCreateStatus501
    >,
    { data?: TagAdminCreateData },
    TContext
  >;
}
