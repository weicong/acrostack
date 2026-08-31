/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ClassSessionPickRandomParticipantOptions,
  ClassSessionPickRandomParticipantStatus200,
  ClassSessionPickRandomParticipantStatus400,
  ClassSessionPickRandomParticipantStatus401,
  ClassSessionPickRandomParticipantStatus403,
  ClassSessionPickRandomParticipantStatus404,
  ClassSessionPickRandomParticipantStatus500,
  ClassSessionPickRandomParticipantStatus501,
} from "../../models/classSession/ClassSessionPickRandomParticipant";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { classSessionPickRandomParticipant } from "../../clients/classSession/classSessionPickRandomParticipant";

export const classSessionPickRandomParticipantMutationKey = () =>
  [{ url: "/api/app/class-session/:id/pick-random-participant" }] as const;

export function classSessionPickRandomParticipantMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = classSessionPickRandomParticipantMutationKey();
  return mutationOptions<
    ClassSessionPickRandomParticipantStatus200,
    ResponseErrorConfig<
      | ClassSessionPickRandomParticipantStatus400
      | ClassSessionPickRandomParticipantStatus401
      | ClassSessionPickRandomParticipantStatus403
      | ClassSessionPickRandomParticipantStatus404
      | ClassSessionPickRandomParticipantStatus500
      | ClassSessionPickRandomParticipantStatus501
    >,
    ClassSessionPickRandomParticipantOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await classSessionPickRandomParticipant({
        ...config,
        path,
        body,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/app/class-session/:id/pick-random-participant}
 */
export function useClassSessionPickRandomParticipant<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ClassSessionPickRandomParticipantStatus200,
      ResponseErrorConfig<
        | ClassSessionPickRandomParticipantStatus400
        | ClassSessionPickRandomParticipantStatus401
        | ClassSessionPickRandomParticipantStatus403
        | ClassSessionPickRandomParticipantStatus404
        | ClassSessionPickRandomParticipantStatus500
        | ClassSessionPickRandomParticipantStatus501
      >,
      ClassSessionPickRandomParticipantOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? classSessionPickRandomParticipantMutationKey();

  const baseOptions = classSessionPickRandomParticipantMutationOptions(
    config,
  ) as UseMutationOptions<
    ClassSessionPickRandomParticipantStatus200,
    ResponseErrorConfig<
      | ClassSessionPickRandomParticipantStatus400
      | ClassSessionPickRandomParticipantStatus401
      | ClassSessionPickRandomParticipantStatus403
      | ClassSessionPickRandomParticipantStatus404
      | ClassSessionPickRandomParticipantStatus500
      | ClassSessionPickRandomParticipantStatus501
    >,
    ClassSessionPickRandomParticipantOptions,
    TContext
  >;

  return useMutation<
    ClassSessionPickRandomParticipantStatus200,
    ResponseErrorConfig<
      | ClassSessionPickRandomParticipantStatus400
      | ClassSessionPickRandomParticipantStatus401
      | ClassSessionPickRandomParticipantStatus403
      | ClassSessionPickRandomParticipantStatus404
      | ClassSessionPickRandomParticipantStatus500
      | ClassSessionPickRandomParticipantStatus501
    >,
    ClassSessionPickRandomParticipantOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ClassSessionPickRandomParticipantStatus200,
    ResponseErrorConfig<
      | ClassSessionPickRandomParticipantStatus400
      | ClassSessionPickRandomParticipantStatus401
      | ClassSessionPickRandomParticipantStatus403
      | ClassSessionPickRandomParticipantStatus404
      | ClassSessionPickRandomParticipantStatus500
      | ClassSessionPickRandomParticipantStatus501
    >,
    ClassSessionPickRandomParticipantOptions,
    TContext
  >;
}
