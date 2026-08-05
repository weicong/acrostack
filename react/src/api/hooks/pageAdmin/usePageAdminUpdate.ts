/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PageAdminUpdateData,
  PageAdminUpdatePathId,
  PageAdminUpdateStatus200,
  PageAdminUpdateStatus400,
  PageAdminUpdateStatus401,
  PageAdminUpdateStatus403,
  PageAdminUpdateStatus404,
  PageAdminUpdateStatus500,
  PageAdminUpdateStatus501,
} from "../../models/pageAdmin/PageAdminUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageAdminUpdate } from "../../clients/pageAdmin/pageAdminUpdate.ts";

export const pageAdminUpdateMutationKey = () => [{ url: "/api/cms-kit-admin/pages/:id" }] as const;

export function pageAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<PageAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = pageAdminUpdateMutationKey();
  return mutationOptions<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    { id: PageAdminUpdatePathId; data?: PageAdminUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return pageAdminUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function usePageAdminUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageAdminUpdateStatus200,
      ResponseErrorConfig<
        | PageAdminUpdateStatus400
        | PageAdminUpdateStatus401
        | PageAdminUpdateStatus403
        | PageAdminUpdateStatus404
        | PageAdminUpdateStatus500
        | PageAdminUpdateStatus501
      >,
      { id: PageAdminUpdatePathId; data?: PageAdminUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PageAdminUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageAdminUpdateMutationKey();

  const baseOptions = pageAdminUpdateMutationOptions(config) as UseMutationOptions<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    { id: PageAdminUpdatePathId; data?: PageAdminUpdateData },
    TContext
  >;

  return useMutation<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    { id: PageAdminUpdatePathId; data?: PageAdminUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    { id: PageAdminUpdatePathId; data?: PageAdminUpdateData },
    TContext
  >;
}
