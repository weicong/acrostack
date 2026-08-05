/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MediaDescriptorAdminDeletePathId,
  MediaDescriptorAdminDeleteStatus200,
  MediaDescriptorAdminDeleteStatus204,
  MediaDescriptorAdminDeleteStatus400,
  MediaDescriptorAdminDeleteStatus401,
  MediaDescriptorAdminDeleteStatus403,
  MediaDescriptorAdminDeleteStatus404,
  MediaDescriptorAdminDeleteStatus500,
  MediaDescriptorAdminDeleteStatus501,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { mediaDescriptorAdminDelete } from "../../clients/mediaDescriptorAdmin/mediaDescriptorAdminDelete.ts";

export const mediaDescriptorAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/media/:id" }] as const;

export function mediaDescriptorAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: MediaDescriptorAdminDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return mediaDescriptorAdminDelete(id, config);
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
      { id: MediaDescriptorAdminDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: MediaDescriptorAdminDeletePathId },
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
    { id: MediaDescriptorAdminDeletePathId },
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
    { id: MediaDescriptorAdminDeletePathId },
    TContext
  >;
}
