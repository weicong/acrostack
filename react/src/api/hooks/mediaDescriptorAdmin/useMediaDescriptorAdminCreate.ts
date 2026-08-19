/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  MediaDescriptorAdminCreateOptions,
  MediaDescriptorAdminCreateStatus200,
  MediaDescriptorAdminCreateStatus400,
  MediaDescriptorAdminCreateStatus401,
  MediaDescriptorAdminCreateStatus403,
  MediaDescriptorAdminCreateStatus404,
  MediaDescriptorAdminCreateStatus500,
  MediaDescriptorAdminCreateStatus501,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { mediaDescriptorAdminCreate } from "../../clients/mediaDescriptorAdmin/mediaDescriptorAdminCreate";

export const mediaDescriptorAdminCreateMutationKey = () =>
  [{ url: "/api/cms-kit-admin/media/:entityType" }] as const;

export function mediaDescriptorAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { response?: "text/plain" | "application/json" | "text/json" };
  } = {},
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
    MediaDescriptorAdminCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, query, body }) => {
      const { data } = await mediaDescriptorAdminCreate({
        ...config,
        path,
        query,
        body,
        throwOnError: true,
      });
      return data;
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
      MediaDescriptorAdminCreateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { response?: "text/plain" | "application/json" | "text/json" };
    };
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
    MediaDescriptorAdminCreateOptions,
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
    MediaDescriptorAdminCreateOptions,
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
    MediaDescriptorAdminCreateOptions,
    TContext
  >;
}
