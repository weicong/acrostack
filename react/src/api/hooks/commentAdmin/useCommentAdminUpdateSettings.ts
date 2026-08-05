/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentAdminUpdateSettingsData,
  CommentAdminUpdateSettingsStatus200,
  CommentAdminUpdateSettingsStatus204,
  CommentAdminUpdateSettingsStatus400,
  CommentAdminUpdateSettingsStatus401,
  CommentAdminUpdateSettingsStatus403,
  CommentAdminUpdateSettingsStatus404,
  CommentAdminUpdateSettingsStatus500,
  CommentAdminUpdateSettingsStatus501,
} from "../../models/commentAdmin/CommentAdminUpdateSettings.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentAdminUpdateSettings } from "../../clients/commentAdmin/commentAdminUpdateSettings.ts";

export const commentAdminUpdateSettingsMutationKey = () =>
  [{ url: "/api/cms-kit-admin/comments/settings" }] as const;

export function commentAdminUpdateSettingsMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<CommentAdminUpdateSettingsData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = commentAdminUpdateSettingsMutationKey();
  return mutationOptions<
    CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateSettingsStatus400
      | CommentAdminUpdateSettingsStatus401
      | CommentAdminUpdateSettingsStatus403
      | CommentAdminUpdateSettingsStatus404
      | CommentAdminUpdateSettingsStatus500
      | CommentAdminUpdateSettingsStatus501
    >,
    { data?: CommentAdminUpdateSettingsData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return commentAdminUpdateSettings(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/comments/settings}
 */
export function useCommentAdminUpdateSettings<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204,
      ResponseErrorConfig<
        | CommentAdminUpdateSettingsStatus400
        | CommentAdminUpdateSettingsStatus401
        | CommentAdminUpdateSettingsStatus403
        | CommentAdminUpdateSettingsStatus404
        | CommentAdminUpdateSettingsStatus500
        | CommentAdminUpdateSettingsStatus501
      >,
      { data?: CommentAdminUpdateSettingsData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<CommentAdminUpdateSettingsData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentAdminUpdateSettingsMutationKey();

  const baseOptions = commentAdminUpdateSettingsMutationOptions(config) as UseMutationOptions<
    CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateSettingsStatus400
      | CommentAdminUpdateSettingsStatus401
      | CommentAdminUpdateSettingsStatus403
      | CommentAdminUpdateSettingsStatus404
      | CommentAdminUpdateSettingsStatus500
      | CommentAdminUpdateSettingsStatus501
    >,
    { data?: CommentAdminUpdateSettingsData },
    TContext
  >;

  return useMutation<
    CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateSettingsStatus400
      | CommentAdminUpdateSettingsStatus401
      | CommentAdminUpdateSettingsStatus403
      | CommentAdminUpdateSettingsStatus404
      | CommentAdminUpdateSettingsStatus500
      | CommentAdminUpdateSettingsStatus501
    >,
    { data?: CommentAdminUpdateSettingsData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateSettingsStatus400
      | CommentAdminUpdateSettingsStatus401
      | CommentAdminUpdateSettingsStatus403
      | CommentAdminUpdateSettingsStatus404
      | CommentAdminUpdateSettingsStatus500
      | CommentAdminUpdateSettingsStatus501
    >,
    { data?: CommentAdminUpdateSettingsData },
    TContext
  >;
}
