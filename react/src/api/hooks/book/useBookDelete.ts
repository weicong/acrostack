/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BookDeleteOptions,
  BookDeleteStatus200,
  BookDeleteStatus204,
  BookDeleteStatus400,
  BookDeleteStatus401,
  BookDeleteStatus403,
  BookDeleteStatus404,
  BookDeleteStatus500,
  BookDeleteStatus501,
} from "../../models/book/BookDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { bookDelete } from "../../clients/book/bookDelete";

export const bookDeleteMutationKey = () => [{ url: "/api/app/book/:id" }] as const;

export function bookDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    BookDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await bookDelete({ ...config, path, throwOnError: true });
      return data;
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
      BookDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    BookDeleteOptions,
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
    BookDeleteOptions,
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
    BookDeleteOptions,
    TContext
  >;
}
