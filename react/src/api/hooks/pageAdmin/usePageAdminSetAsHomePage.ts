/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PageAdminSetAsHomePageOptions,
  PageAdminSetAsHomePageStatus200,
  PageAdminSetAsHomePageStatus204,
  PageAdminSetAsHomePageStatus400,
  PageAdminSetAsHomePageStatus401,
  PageAdminSetAsHomePageStatus403,
  PageAdminSetAsHomePageStatus404,
  PageAdminSetAsHomePageStatus500,
  PageAdminSetAsHomePageStatus501,
} from "../../models/pageAdmin/PageAdminSetAsHomePage";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageAdminSetAsHomePage } from "../../clients/pageAdmin/pageAdminSetAsHomePage";

export const pageAdminSetAsHomePageMutationKey = () =>
  [{ url: "/api/cms-kit-admin/pages/setashomepage/:id" }] as const;

export function pageAdminSetAsHomePageMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = pageAdminSetAsHomePageMutationKey();
  return mutationOptions<
    PageAdminSetAsHomePageStatus200 | PageAdminSetAsHomePageStatus204,
    ResponseErrorConfig<
      | PageAdminSetAsHomePageStatus400
      | PageAdminSetAsHomePageStatus401
      | PageAdminSetAsHomePageStatus403
      | PageAdminSetAsHomePageStatus404
      | PageAdminSetAsHomePageStatus500
      | PageAdminSetAsHomePageStatus501
    >,
    PageAdminSetAsHomePageOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await pageAdminSetAsHomePage({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages/setashomepage/:id}
 */
export function usePageAdminSetAsHomePage<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageAdminSetAsHomePageStatus200 | PageAdminSetAsHomePageStatus204,
      ResponseErrorConfig<
        | PageAdminSetAsHomePageStatus400
        | PageAdminSetAsHomePageStatus401
        | PageAdminSetAsHomePageStatus403
        | PageAdminSetAsHomePageStatus404
        | PageAdminSetAsHomePageStatus500
        | PageAdminSetAsHomePageStatus501
      >,
      PageAdminSetAsHomePageOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageAdminSetAsHomePageMutationKey();

  const baseOptions = pageAdminSetAsHomePageMutationOptions(config) as UseMutationOptions<
    PageAdminSetAsHomePageStatus200 | PageAdminSetAsHomePageStatus204,
    ResponseErrorConfig<
      | PageAdminSetAsHomePageStatus400
      | PageAdminSetAsHomePageStatus401
      | PageAdminSetAsHomePageStatus403
      | PageAdminSetAsHomePageStatus404
      | PageAdminSetAsHomePageStatus500
      | PageAdminSetAsHomePageStatus501
    >,
    PageAdminSetAsHomePageOptions,
    TContext
  >;

  return useMutation<
    PageAdminSetAsHomePageStatus200 | PageAdminSetAsHomePageStatus204,
    ResponseErrorConfig<
      | PageAdminSetAsHomePageStatus400
      | PageAdminSetAsHomePageStatus401
      | PageAdminSetAsHomePageStatus403
      | PageAdminSetAsHomePageStatus404
      | PageAdminSetAsHomePageStatus500
      | PageAdminSetAsHomePageStatus501
    >,
    PageAdminSetAsHomePageOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageAdminSetAsHomePageStatus200 | PageAdminSetAsHomePageStatus204,
    ResponseErrorConfig<
      | PageAdminSetAsHomePageStatus400
      | PageAdminSetAsHomePageStatus401
      | PageAdminSetAsHomePageStatus403
      | PageAdminSetAsHomePageStatus404
      | PageAdminSetAsHomePageStatus500
      | PageAdminSetAsHomePageStatus501
    >,
    PageAdminSetAsHomePageOptions,
    TContext
  >;
}
