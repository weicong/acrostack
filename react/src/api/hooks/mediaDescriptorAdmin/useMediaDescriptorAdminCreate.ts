/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MediaDescriptorAdminCreateData,
  MediaDescriptorAdminCreatePathEntityType,
  MediaDescriptorAdminCreateQueryName,
  MediaDescriptorAdminCreateStatus200,
  MediaDescriptorAdminCreateStatus400,
  MediaDescriptorAdminCreateStatus401,
  MediaDescriptorAdminCreateStatus403,
  MediaDescriptorAdminCreateStatus404,
  MediaDescriptorAdminCreateStatus500,
  MediaDescriptorAdminCreateStatus501,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { mediaDescriptorAdminCreate } from "../../clients/mediaDescriptorAdmin/mediaDescriptorAdminCreate.ts";

export const mediaDescriptorAdminCreateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/media/:entityType" }] as const;

export function mediaDescriptorAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<MediaDescriptorAdminCreateData>> & { client?: Client } = {},
) {
  const mutationKey = mediaDescriptorAdminCreateMutationKey();
  return mutationOptions<
    MediaDescriptorAdminCreateStatus200,
    ResponseErrorConfig<
      | MediaDescriptorAdminCreateStatus400
      | MediaDescriptorAdminCreateStatus401
      | MediaDescriptorAdminCreateStatus403
      | MediaDescriptorAdminCreateStatus404
      | MediaDescriptorAdminCreateStatus500
      | MediaDescriptorAdminCreateStatus501
    >,
    {
      entityType: MediaDescriptorAdminCreatePathEntityType;
      params: { Name: MediaDescriptorAdminCreateQueryName };
      data?: MediaDescriptorAdminCreateData;
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ entityType, params, data }) => {
      return mediaDescriptorAdminCreate(entityType, params, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/media/:entityType}
 */
export function useMediaDescriptorAdminCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MediaDescriptorAdminCreateStatus200,
      ResponseErrorConfig<
        | MediaDescriptorAdminCreateStatus400
        | MediaDescriptorAdminCreateStatus401
        | MediaDescriptorAdminCreateStatus403
        | MediaDescriptorAdminCreateStatus404
        | MediaDescriptorAdminCreateStatus500
        | MediaDescriptorAdminCreateStatus501
      >,
      {
        entityType: MediaDescriptorAdminCreatePathEntityType;
        params: { Name: MediaDescriptorAdminCreateQueryName };
        data?: MediaDescriptorAdminCreateData;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<MediaDescriptorAdminCreateData>> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? mediaDescriptorAdminCreateMutationKey();

  const baseOptions = mediaDescriptorAdminCreateMutationOptions(config) as UseMutationOptions<
    MediaDescriptorAdminCreateStatus200,
    ResponseErrorConfig<
      | MediaDescriptorAdminCreateStatus400
      | MediaDescriptorAdminCreateStatus401
      | MediaDescriptorAdminCreateStatus403
      | MediaDescriptorAdminCreateStatus404
      | MediaDescriptorAdminCreateStatus500
      | MediaDescriptorAdminCreateStatus501
    >,
    {
      entityType: MediaDescriptorAdminCreatePathEntityType;
      params: { Name: MediaDescriptorAdminCreateQueryName };
      data?: MediaDescriptorAdminCreateData;
    },
    TContext
  >;

  return useMutation<
    MediaDescriptorAdminCreateStatus200,
    ResponseErrorConfig<
      | MediaDescriptorAdminCreateStatus400
      | MediaDescriptorAdminCreateStatus401
      | MediaDescriptorAdminCreateStatus403
      | MediaDescriptorAdminCreateStatus404
      | MediaDescriptorAdminCreateStatus500
      | MediaDescriptorAdminCreateStatus501
    >,
    {
      entityType: MediaDescriptorAdminCreatePathEntityType;
      params: { Name: MediaDescriptorAdminCreateQueryName };
      data?: MediaDescriptorAdminCreateData;
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
    MediaDescriptorAdminCreateStatus200,
    ResponseErrorConfig<
      | MediaDescriptorAdminCreateStatus400
      | MediaDescriptorAdminCreateStatus401
      | MediaDescriptorAdminCreateStatus403
      | MediaDescriptorAdminCreateStatus404
      | MediaDescriptorAdminCreateStatus500
      | MediaDescriptorAdminCreateStatus501
    >,
    {
      entityType: MediaDescriptorAdminCreatePathEntityType;
      params: { Name: MediaDescriptorAdminCreateQueryName };
      data?: MediaDescriptorAdminCreateData;
    },
    TContext
  >;
}
