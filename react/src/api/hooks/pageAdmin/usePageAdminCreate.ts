/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  PageAdminCreateData,
  PageAdminCreateStatus200,
  PageAdminCreateStatus400,
  PageAdminCreateStatus401,
  PageAdminCreateStatus403,
  PageAdminCreateStatus404,
  PageAdminCreateStatus500,
  PageAdminCreateStatus501,
} from "../../models/pageAdmin/PageAdminCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageAdminCreate } from "../../clients/pageAdmin/pageAdminCreate.ts";

export const pageAdminCreateMutationKey = () => [{ url: "/api/cms-kit-admin/pages" }] as const;

export function pageAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<PageAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = pageAdminCreateMutationKey();
  return mutationOptions<
    PageAdminCreateStatus200,
    ResponseErrorConfig<
      | PageAdminCreateStatus400
      | PageAdminCreateStatus401
      | PageAdminCreateStatus403
      | PageAdminCreateStatus404
      | PageAdminCreateStatus500
      | PageAdminCreateStatus501
    >,
    { data?: PageAdminCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return pageAdminCreate(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages}
 */
export function usePageAdminCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageAdminCreateStatus200,
      ResponseErrorConfig<
        | PageAdminCreateStatus400
        | PageAdminCreateStatus401
        | PageAdminCreateStatus403
        | PageAdminCreateStatus404
        | PageAdminCreateStatus500
        | PageAdminCreateStatus501
      >,
      { data?: PageAdminCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<PageAdminCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageAdminCreateMutationKey();

  const baseOptions = pageAdminCreateMutationOptions(config) as UseMutationOptions<
    PageAdminCreateStatus200,
    ResponseErrorConfig<
      | PageAdminCreateStatus400
      | PageAdminCreateStatus401
      | PageAdminCreateStatus403
      | PageAdminCreateStatus404
      | PageAdminCreateStatus500
      | PageAdminCreateStatus501
    >,
    { data?: PageAdminCreateData },
    TContext
  >;

  return useMutation<
    PageAdminCreateStatus200,
    ResponseErrorConfig<
      | PageAdminCreateStatus400
      | PageAdminCreateStatus401
      | PageAdminCreateStatus403
      | PageAdminCreateStatus404
      | PageAdminCreateStatus500
      | PageAdminCreateStatus501
    >,
    { data?: PageAdminCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageAdminCreateStatus200,
    ResponseErrorConfig<
      | PageAdminCreateStatus400
      | PageAdminCreateStatus401
      | PageAdminCreateStatus403
      | PageAdminCreateStatus404
      | PageAdminCreateStatus500
      | PageAdminCreateStatus501
    >,
    { data?: PageAdminCreateData },
    TContext
  >;
}
