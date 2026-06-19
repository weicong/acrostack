/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BookCreateData,
  BookCreateStatus200,
  BookCreateStatus400,
  BookCreateStatus401,
  BookCreateStatus403,
  BookCreateStatus404,
  BookCreateStatus500,
  BookCreateStatus501,
} from "../../models/book/BookCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { bookCreate } from "../../clients/book/bookCreate.ts";

export const bookCreateMutationKey = () => [{ url: "/api/app/book" }] as const;

export function bookCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BookCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = bookCreateMutationKey();
  return mutationOptions<
    BookCreateStatus200,
    ResponseErrorConfig<
      | BookCreateStatus400
      | BookCreateStatus401
      | BookCreateStatus403
      | BookCreateStatus404
      | BookCreateStatus500
      | BookCreateStatus501
    >,
    { data?: BookCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return bookCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/book}
 */
export function useBookCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BookCreateStatus200,
      ResponseErrorConfig<
        | BookCreateStatus400
        | BookCreateStatus401
        | BookCreateStatus403
        | BookCreateStatus404
        | BookCreateStatus500
        | BookCreateStatus501
      >,
      { data?: BookCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BookCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? bookCreateMutationKey();

  const baseOptions = bookCreateMutationOptions(config) as UseMutationOptions<
    BookCreateStatus200,
    ResponseErrorConfig<
      | BookCreateStatus400
      | BookCreateStatus401
      | BookCreateStatus403
      | BookCreateStatus404
      | BookCreateStatus500
      | BookCreateStatus501
    >,
    { data?: BookCreateData },
    TContext
  >;

  return useMutation<
    BookCreateStatus200,
    ResponseErrorConfig<
      | BookCreateStatus400
      | BookCreateStatus401
      | BookCreateStatus403
      | BookCreateStatus404
      | BookCreateStatus500
      | BookCreateStatus501
    >,
    { data?: BookCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BookCreateStatus200,
    ResponseErrorConfig<
      | BookCreateStatus400
      | BookCreateStatus401
      | BookCreateStatus403
      | BookCreateStatus404
      | BookCreateStatus500
      | BookCreateStatus501
    >,
    { data?: BookCreateData },
    TContext
  >;
}
