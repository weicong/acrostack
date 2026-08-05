/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PageAdminSetAsHomePagePathId,
  PageAdminSetAsHomePageStatus200,
  PageAdminSetAsHomePageStatus204,
  PageAdminSetAsHomePageStatus400,
  PageAdminSetAsHomePageStatus401,
  PageAdminSetAsHomePageStatus403,
  PageAdminSetAsHomePageStatus404,
  PageAdminSetAsHomePageStatus500,
  PageAdminSetAsHomePageStatus501,
} from "../../models/pageAdmin/PageAdminSetAsHomePage.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageAdminSetAsHomePage } from "../../clients/pageAdmin/pageAdminSetAsHomePage.ts";

export const pageAdminSetAsHomePageMutationKey = () =>
  [{ url: "/api/cms-kit-admin/pages/setashomepage/:id" }] as const;

export function pageAdminSetAsHomePageMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: PageAdminSetAsHomePagePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return pageAdminSetAsHomePage(id, config);
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
      { id: PageAdminSetAsHomePagePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: PageAdminSetAsHomePagePathId },
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
    { id: PageAdminSetAsHomePagePathId },
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
    { id: PageAdminSetAsHomePagePathId },
    TContext
  >;
}
