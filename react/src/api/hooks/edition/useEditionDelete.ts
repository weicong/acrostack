/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  EditionDeletePathId,
  EditionDeleteStatus200,
  EditionDeleteStatus204,
  EditionDeleteStatus400,
  EditionDeleteStatus401,
  EditionDeleteStatus403,
  EditionDeleteStatus404,
  EditionDeleteStatus500,
  EditionDeleteStatus501,
} from "../../models/edition/EditionDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { editionDelete } from "../../clients/edition/editionDelete.ts";

export const editionDeleteMutationKey = () => [{ url: "/api/app/edition/:id" }] as const;

export function editionDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = editionDeleteMutationKey();
  return mutationOptions<
    EditionDeleteStatus200 | EditionDeleteStatus204,
    ResponseErrorConfig<
      | EditionDeleteStatus400
      | EditionDeleteStatus401
      | EditionDeleteStatus403
      | EditionDeleteStatus404
      | EditionDeleteStatus500
      | EditionDeleteStatus501
    >,
    { id: EditionDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return editionDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/edition/:id}
 */
export function useEditionDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      EditionDeleteStatus200 | EditionDeleteStatus204,
      ResponseErrorConfig<
        | EditionDeleteStatus400
        | EditionDeleteStatus401
        | EditionDeleteStatus403
        | EditionDeleteStatus404
        | EditionDeleteStatus500
        | EditionDeleteStatus501
      >,
      { id: EditionDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? editionDeleteMutationKey();

  const baseOptions = editionDeleteMutationOptions(config) as UseMutationOptions<
    EditionDeleteStatus200 | EditionDeleteStatus204,
    ResponseErrorConfig<
      | EditionDeleteStatus400
      | EditionDeleteStatus401
      | EditionDeleteStatus403
      | EditionDeleteStatus404
      | EditionDeleteStatus500
      | EditionDeleteStatus501
    >,
    { id: EditionDeletePathId },
    TContext
  >;

  return useMutation<
    EditionDeleteStatus200 | EditionDeleteStatus204,
    ResponseErrorConfig<
      | EditionDeleteStatus400
      | EditionDeleteStatus401
      | EditionDeleteStatus403
      | EditionDeleteStatus404
      | EditionDeleteStatus500
      | EditionDeleteStatus501
    >,
    { id: EditionDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    EditionDeleteStatus200 | EditionDeleteStatus204,
    ResponseErrorConfig<
      | EditionDeleteStatus400
      | EditionDeleteStatus401
      | EditionDeleteStatus403
      | EditionDeleteStatus404
      | EditionDeleteStatus500
      | EditionDeleteStatus501
    >,
    { id: EditionDeletePathId },
    TContext
  >;
}
