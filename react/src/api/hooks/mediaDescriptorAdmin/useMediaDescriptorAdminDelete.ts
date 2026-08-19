/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MediaDescriptorAdminDeleteOptions,
  MediaDescriptorAdminDeleteStatus200,
  MediaDescriptorAdminDeleteStatus204,
  MediaDescriptorAdminDeleteStatus400,
  MediaDescriptorAdminDeleteStatus401,
  MediaDescriptorAdminDeleteStatus403,
  MediaDescriptorAdminDeleteStatus404,
  MediaDescriptorAdminDeleteStatus500,
  MediaDescriptorAdminDeleteStatus501,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { mediaDescriptorAdminDelete } from "../../clients/mediaDescriptorAdmin/mediaDescriptorAdminDelete";

export const mediaDescriptorAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/media/:id" }] as const;

export function mediaDescriptorAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = mediaDescriptorAdminDeleteMutationKey();
  return mutationOptions<
    MediaDescriptorAdminDeleteStatus200 | MediaDescriptorAdminDeleteStatus204,
    ResponseErrorConfig<
      | MediaDescriptorAdminDeleteStatus400
      | MediaDescriptorAdminDeleteStatus401
      | MediaDescriptorAdminDeleteStatus403
      | MediaDescriptorAdminDeleteStatus404
      | MediaDescriptorAdminDeleteStatus500
      | MediaDescriptorAdminDeleteStatus501
    >,
    MediaDescriptorAdminDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await mediaDescriptorAdminDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/media/:id}
 */
export function useMediaDescriptorAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MediaDescriptorAdminDeleteStatus200 | MediaDescriptorAdminDeleteStatus204,
      ResponseErrorConfig<
        | MediaDescriptorAdminDeleteStatus400
        | MediaDescriptorAdminDeleteStatus401
        | MediaDescriptorAdminDeleteStatus403
        | MediaDescriptorAdminDeleteStatus404
        | MediaDescriptorAdminDeleteStatus500
        | MediaDescriptorAdminDeleteStatus501
      >,
      MediaDescriptorAdminDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? mediaDescriptorAdminDeleteMutationKey();

  const baseOptions = mediaDescriptorAdminDeleteMutationOptions(config) as UseMutationOptions<
    MediaDescriptorAdminDeleteStatus200 | MediaDescriptorAdminDeleteStatus204,
    ResponseErrorConfig<
      | MediaDescriptorAdminDeleteStatus400
      | MediaDescriptorAdminDeleteStatus401
      | MediaDescriptorAdminDeleteStatus403
      | MediaDescriptorAdminDeleteStatus404
      | MediaDescriptorAdminDeleteStatus500
      | MediaDescriptorAdminDeleteStatus501
    >,
    MediaDescriptorAdminDeleteOptions,
    TContext
  >;

  return useMutation<
    MediaDescriptorAdminDeleteStatus200 | MediaDescriptorAdminDeleteStatus204,
    ResponseErrorConfig<
      | MediaDescriptorAdminDeleteStatus400
      | MediaDescriptorAdminDeleteStatus401
      | MediaDescriptorAdminDeleteStatus403
      | MediaDescriptorAdminDeleteStatus404
      | MediaDescriptorAdminDeleteStatus500
      | MediaDescriptorAdminDeleteStatus501
    >,
    MediaDescriptorAdminDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MediaDescriptorAdminDeleteStatus200 | MediaDescriptorAdminDeleteStatus204,
    ResponseErrorConfig<
      | MediaDescriptorAdminDeleteStatus400
      | MediaDescriptorAdminDeleteStatus401
      | MediaDescriptorAdminDeleteStatus403
      | MediaDescriptorAdminDeleteStatus404
      | MediaDescriptorAdminDeleteStatus500
      | MediaDescriptorAdminDeleteStatus501
    >,
    MediaDescriptorAdminDeleteOptions,
    TContext
  >;
}
