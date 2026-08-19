/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BookCreateOptions,
  BookCreateStatus200,
  BookCreateStatus400,
  BookCreateStatus401,
  BookCreateStatus403,
  BookCreateStatus404,
  BookCreateStatus500,
  BookCreateStatus501,
} from "../../models/book/BookCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { bookCreate } from "../../clients/book/bookCreate";

export const bookCreateMutationKey = () => [{ url: "/api/app/book" }] as const;

export function bookCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    BookCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await bookCreate({ ...config, body, throwOnError: true });
      return data;
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
      BookCreateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
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
    BookCreateOptions,
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
    BookCreateOptions,
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
    BookCreateOptions,
    TContext
  >;
}
