/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PageUpdateData,
  PageUpdatePathId,
  PageUpdateStatus200,
  PageUpdateStatus400,
  PageUpdateStatus401,
  PageUpdateStatus403,
  PageUpdateStatus404,
  PageUpdateStatus500,
  PageUpdateStatus501,
} from "../../models/page/PageUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageUpdate } from "../../clients/page/pageUpdate.ts";

export const pageUpdateMutationKey = () => [{ url: "/api/app/page/:id" }] as const;

export function pageUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<PageUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = pageUpdateMutationKey();
  return mutationOptions<
    PageUpdateStatus200,
    ResponseErrorConfig<
      | PageUpdateStatus400
      | PageUpdateStatus401
      | PageUpdateStatus403
      | PageUpdateStatus404
      | PageUpdateStatus500
      | PageUpdateStatus501
    >,
    { id: PageUpdatePathId; data?: PageUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return pageUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/page/:id}
 */
export function usePageUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageUpdateStatus200,
      ResponseErrorConfig<
        | PageUpdateStatus400
        | PageUpdateStatus401
        | PageUpdateStatus403
        | PageUpdateStatus404
        | PageUpdateStatus500
        | PageUpdateStatus501
      >,
      { id: PageUpdatePathId; data?: PageUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PageUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageUpdateMutationKey();

  const baseOptions = pageUpdateMutationOptions(config) as UseMutationOptions<
    PageUpdateStatus200,
    ResponseErrorConfig<
      | PageUpdateStatus400
      | PageUpdateStatus401
      | PageUpdateStatus403
      | PageUpdateStatus404
      | PageUpdateStatus500
      | PageUpdateStatus501
    >,
    { id: PageUpdatePathId; data?: PageUpdateData },
    TContext
  >;

  return useMutation<
    PageUpdateStatus200,
    ResponseErrorConfig<
      | PageUpdateStatus400
      | PageUpdateStatus401
      | PageUpdateStatus403
      | PageUpdateStatus404
      | PageUpdateStatus500
      | PageUpdateStatus501
    >,
    { id: PageUpdatePathId; data?: PageUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageUpdateStatus200,
    ResponseErrorConfig<
      | PageUpdateStatus400
      | PageUpdateStatus401
      | PageUpdateStatus403
      | PageUpdateStatus404
      | PageUpdateStatus500
      | PageUpdateStatus501
    >,
    { id: PageUpdatePathId; data?: PageUpdateData },
    TContext
  >;
}
