/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BookUpdateData,
  BookUpdatePathId,
  BookUpdateStatus200,
  BookUpdateStatus400,
  BookUpdateStatus401,
  BookUpdateStatus403,
  BookUpdateStatus404,
  BookUpdateStatus500,
  BookUpdateStatus501,
} from "../../models/book/BookUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { bookUpdate } from "../../clients/book/bookUpdate.ts";

export const bookUpdateMutationKey = () => [{ url: "/api/app/book/:id" }] as const;

export function bookUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BookUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = bookUpdateMutationKey();
  return mutationOptions<
    BookUpdateStatus200,
    ResponseErrorConfig<
      | BookUpdateStatus400
      | BookUpdateStatus401
      | BookUpdateStatus403
      | BookUpdateStatus404
      | BookUpdateStatus500
      | BookUpdateStatus501
    >,
    { id: BookUpdatePathId; data?: BookUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return bookUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/book/:id}
 */
export function useBookUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BookUpdateStatus200,
      ResponseErrorConfig<
        | BookUpdateStatus400
        | BookUpdateStatus401
        | BookUpdateStatus403
        | BookUpdateStatus404
        | BookUpdateStatus500
        | BookUpdateStatus501
      >,
      { id: BookUpdatePathId; data?: BookUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BookUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? bookUpdateMutationKey();

  const baseOptions = bookUpdateMutationOptions(config) as UseMutationOptions<
    BookUpdateStatus200,
    ResponseErrorConfig<
      | BookUpdateStatus400
      | BookUpdateStatus401
      | BookUpdateStatus403
      | BookUpdateStatus404
      | BookUpdateStatus500
      | BookUpdateStatus501
    >,
    { id: BookUpdatePathId; data?: BookUpdateData },
    TContext
  >;

  return useMutation<
    BookUpdateStatus200,
    ResponseErrorConfig<
      | BookUpdateStatus400
      | BookUpdateStatus401
      | BookUpdateStatus403
      | BookUpdateStatus404
      | BookUpdateStatus500
      | BookUpdateStatus501
    >,
    { id: BookUpdatePathId; data?: BookUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BookUpdateStatus200,
    ResponseErrorConfig<
      | BookUpdateStatus400
      | BookUpdateStatus401
      | BookUpdateStatus403
      | BookUpdateStatus404
      | BookUpdateStatus500
      | BookUpdateStatus501
    >,
    { id: BookUpdatePathId; data?: BookUpdateData },
    TContext
  >;
}
