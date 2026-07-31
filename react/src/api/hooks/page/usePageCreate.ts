/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PageCreateData,
  PageCreateStatus200,
  PageCreateStatus400,
  PageCreateStatus401,
  PageCreateStatus403,
  PageCreateStatus404,
  PageCreateStatus500,
  PageCreateStatus501,
} from "../../models/page/PageCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageCreate } from "../../clients/page/pageCreate.ts";

export const pageCreateMutationKey = () => [{ url: "/api/app/page" }] as const;

export function pageCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<PageCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = pageCreateMutationKey();
  return mutationOptions<
    PageCreateStatus200,
    ResponseErrorConfig<
      | PageCreateStatus400
      | PageCreateStatus401
      | PageCreateStatus403
      | PageCreateStatus404
      | PageCreateStatus500
      | PageCreateStatus501
    >,
    { data?: PageCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return pageCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/page}
 */
export function usePageCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageCreateStatus200,
      ResponseErrorConfig<
        | PageCreateStatus400
        | PageCreateStatus401
        | PageCreateStatus403
        | PageCreateStatus404
        | PageCreateStatus500
        | PageCreateStatus501
      >,
      { data?: PageCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PageCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageCreateMutationKey();

  const baseOptions = pageCreateMutationOptions(config) as UseMutationOptions<
    PageCreateStatus200,
    ResponseErrorConfig<
      | PageCreateStatus400
      | PageCreateStatus401
      | PageCreateStatus403
      | PageCreateStatus404
      | PageCreateStatus500
      | PageCreateStatus501
    >,
    { data?: PageCreateData },
    TContext
  >;

  return useMutation<
    PageCreateStatus200,
    ResponseErrorConfig<
      | PageCreateStatus400
      | PageCreateStatus401
      | PageCreateStatus403
      | PageCreateStatus404
      | PageCreateStatus500
      | PageCreateStatus501
    >,
    { data?: PageCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageCreateStatus200,
    ResponseErrorConfig<
      | PageCreateStatus400
      | PageCreateStatus401
      | PageCreateStatus403
      | PageCreateStatus404
      | PageCreateStatus500
      | PageCreateStatus501
    >,
    { data?: PageCreateData },
    TContext
  >;
}
