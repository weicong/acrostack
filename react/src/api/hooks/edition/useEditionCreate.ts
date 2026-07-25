/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EditionCreateData,
  EditionCreateStatus200,
  EditionCreateStatus400,
  EditionCreateStatus401,
  EditionCreateStatus403,
  EditionCreateStatus404,
  EditionCreateStatus500,
  EditionCreateStatus501,
} from "../../models/edition/EditionCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { editionCreate } from "../../clients/edition/editionCreate.ts";

export const editionCreateMutationKey = () => [{ url: "/api/app/edition" }] as const;

export function editionCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<EditionCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = editionCreateMutationKey();
  return mutationOptions<
    EditionCreateStatus200,
    ResponseErrorConfig<
      | EditionCreateStatus400
      | EditionCreateStatus401
      | EditionCreateStatus403
      | EditionCreateStatus404
      | EditionCreateStatus500
      | EditionCreateStatus501
    >,
    { data?: EditionCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return editionCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/edition}
 */
export function useEditionCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EditionCreateStatus200,
      ResponseErrorConfig<
        | EditionCreateStatus400
        | EditionCreateStatus401
        | EditionCreateStatus403
        | EditionCreateStatus404
        | EditionCreateStatus500
        | EditionCreateStatus501
      >,
      { data?: EditionCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<EditionCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? editionCreateMutationKey();

  const baseOptions = editionCreateMutationOptions(config) as UseMutationOptions<
    EditionCreateStatus200,
    ResponseErrorConfig<
      | EditionCreateStatus400
      | EditionCreateStatus401
      | EditionCreateStatus403
      | EditionCreateStatus404
      | EditionCreateStatus500
      | EditionCreateStatus501
    >,
    { data?: EditionCreateData },
    TContext
  >;

  return useMutation<
    EditionCreateStatus200,
    ResponseErrorConfig<
      | EditionCreateStatus400
      | EditionCreateStatus401
      | EditionCreateStatus403
      | EditionCreateStatus404
      | EditionCreateStatus500
      | EditionCreateStatus501
    >,
    { data?: EditionCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EditionCreateStatus200,
    ResponseErrorConfig<
      | EditionCreateStatus400
      | EditionCreateStatus401
      | EditionCreateStatus403
      | EditionCreateStatus404
      | EditionCreateStatus500
      | EditionCreateStatus501
    >,
    { data?: EditionCreateData },
    TContext
  >;
}
