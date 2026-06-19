/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BookDeletePathId,
  BookDeleteStatus200,
  BookDeleteStatus204,
  BookDeleteStatus400,
  BookDeleteStatus401,
  BookDeleteStatus403,
  BookDeleteStatus404,
  BookDeleteStatus500,
  BookDeleteStatus501,
} from "../../models/book/BookDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { bookDelete } from "../../clients/book/bookDelete.ts";

export const bookDeleteMutationKey = () => [{ url: "/api/app/book/:id" }] as const;

export function bookDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = bookDeleteMutationKey();
  return mutationOptions<
    BookDeleteStatus200 | BookDeleteStatus204,
    ResponseErrorConfig<
      | BookDeleteStatus400
      | BookDeleteStatus401
      | BookDeleteStatus403
      | BookDeleteStatus404
      | BookDeleteStatus500
      | BookDeleteStatus501
    >,
    { id: BookDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return bookDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/book/:id}
 */
export function useBookDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BookDeleteStatus200 | BookDeleteStatus204,
      ResponseErrorConfig<
        | BookDeleteStatus400
        | BookDeleteStatus401
        | BookDeleteStatus403
        | BookDeleteStatus404
        | BookDeleteStatus500
        | BookDeleteStatus501
      >,
      { id: BookDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? bookDeleteMutationKey();

  const baseOptions = bookDeleteMutationOptions(config) as UseMutationOptions<
    BookDeleteStatus200 | BookDeleteStatus204,
    ResponseErrorConfig<
      | BookDeleteStatus400
      | BookDeleteStatus401
      | BookDeleteStatus403
      | BookDeleteStatus404
      | BookDeleteStatus500
      | BookDeleteStatus501
    >,
    { id: BookDeletePathId },
    TContext
  >;

  return useMutation<
    BookDeleteStatus200 | BookDeleteStatus204,
    ResponseErrorConfig<
      | BookDeleteStatus400
      | BookDeleteStatus401
      | BookDeleteStatus403
      | BookDeleteStatus404
      | BookDeleteStatus500
      | BookDeleteStatus501
    >,
    { id: BookDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BookDeleteStatus200 | BookDeleteStatus204,
    ResponseErrorConfig<
      | BookDeleteStatus400
      | BookDeleteStatus401
      | BookDeleteStatus403
      | BookDeleteStatus404
      | BookDeleteStatus500
      | BookDeleteStatus501
    >,
    { id: BookDeletePathId },
    TContext
  >;
}
