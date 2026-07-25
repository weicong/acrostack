/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EditionUpdateData,
  EditionUpdatePathId,
  EditionUpdateStatus200,
  EditionUpdateStatus400,
  EditionUpdateStatus401,
  EditionUpdateStatus403,
  EditionUpdateStatus404,
  EditionUpdateStatus500,
  EditionUpdateStatus501,
} from "../../models/edition/EditionUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { editionUpdate } from "../../clients/edition/editionUpdate.ts";

export const editionUpdateMutationKey = () => [{ url: "/api/app/edition/:id" }] as const;

export function editionUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<EditionUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = editionUpdateMutationKey();
  return mutationOptions<
    EditionUpdateStatus200,
    ResponseErrorConfig<
      | EditionUpdateStatus400
      | EditionUpdateStatus401
      | EditionUpdateStatus403
      | EditionUpdateStatus404
      | EditionUpdateStatus500
      | EditionUpdateStatus501
    >,
    { id: EditionUpdatePathId; data?: EditionUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return editionUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/edition/:id}
 */
export function useEditionUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EditionUpdateStatus200,
      ResponseErrorConfig<
        | EditionUpdateStatus400
        | EditionUpdateStatus401
        | EditionUpdateStatus403
        | EditionUpdateStatus404
        | EditionUpdateStatus500
        | EditionUpdateStatus501
      >,
      { id: EditionUpdatePathId; data?: EditionUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<EditionUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? editionUpdateMutationKey();

  const baseOptions = editionUpdateMutationOptions(config) as UseMutationOptions<
    EditionUpdateStatus200,
    ResponseErrorConfig<
      | EditionUpdateStatus400
      | EditionUpdateStatus401
      | EditionUpdateStatus403
      | EditionUpdateStatus404
      | EditionUpdateStatus500
      | EditionUpdateStatus501
    >,
    { id: EditionUpdatePathId; data?: EditionUpdateData },
    TContext
  >;

  return useMutation<
    EditionUpdateStatus200,
    ResponseErrorConfig<
      | EditionUpdateStatus400
      | EditionUpdateStatus401
      | EditionUpdateStatus403
      | EditionUpdateStatus404
      | EditionUpdateStatus500
      | EditionUpdateStatus501
    >,
    { id: EditionUpdatePathId; data?: EditionUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EditionUpdateStatus200,
    ResponseErrorConfig<
      | EditionUpdateStatus400
      | EditionUpdateStatus401
      | EditionUpdateStatus403
      | EditionUpdateStatus404
      | EditionUpdateStatus500
      | EditionUpdateStatus501
    >,
    { id: EditionUpdatePathId; data?: EditionUpdateData },
    TContext
  >;
}
