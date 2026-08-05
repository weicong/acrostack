/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  MarkedItemPublicTogglePathEntityType,
  MarkedItemPublicTogglePathEntityId,
  MarkedItemPublicToggleStatus200,
  MarkedItemPublicToggleStatus400,
  MarkedItemPublicToggleStatus401,
  MarkedItemPublicToggleStatus403,
  MarkedItemPublicToggleStatus404,
  MarkedItemPublicToggleStatus500,
  MarkedItemPublicToggleStatus501,
} from "../../models/markedItemPublic/MarkedItemPublicToggle.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { markedItemPublicToggle } from "../../clients/markedItemPublic/markedItemPublicToggle.ts";

export const markedItemPublicToggleMutationKey = () =>
  [{ url: "/api/cms-kit-public/marked-items/:entityType/:entityId" }] as const;

export function markedItemPublicToggleMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = markedItemPublicToggleMutationKey();
  return mutationOptions<
    MarkedItemPublicToggleStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicToggleStatus400
      | MarkedItemPublicToggleStatus401
      | MarkedItemPublicToggleStatus403
      | MarkedItemPublicToggleStatus404
      | MarkedItemPublicToggleStatus500
      | MarkedItemPublicToggleStatus501
    >,
    {
      entityType: MarkedItemPublicTogglePathEntityType;
      entityId: MarkedItemPublicTogglePathEntityId;
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ entityType, entityId }) => {
      return markedItemPublicToggle(entityType, entityId, config);
    },
  });
}

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function useMarkedItemPublicToggle<TContext>(
  options: {
    mutation?: UseMutationOptions<
      MarkedItemPublicToggleStatus200,
      ResponseErrorConfig<
        | MarkedItemPublicToggleStatus400
        | MarkedItemPublicToggleStatus401
        | MarkedItemPublicToggleStatus403
        | MarkedItemPublicToggleStatus404
        | MarkedItemPublicToggleStatus500
        | MarkedItemPublicToggleStatus501
      >,
      {
        entityType: MarkedItemPublicTogglePathEntityType;
        entityId: MarkedItemPublicTogglePathEntityId;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? markedItemPublicToggleMutationKey();

  const baseOptions = markedItemPublicToggleMutationOptions(config) as UseMutationOptions<
    MarkedItemPublicToggleStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicToggleStatus400
      | MarkedItemPublicToggleStatus401
      | MarkedItemPublicToggleStatus403
      | MarkedItemPublicToggleStatus404
      | MarkedItemPublicToggleStatus500
      | MarkedItemPublicToggleStatus501
    >,
    {
      entityType: MarkedItemPublicTogglePathEntityType;
      entityId: MarkedItemPublicTogglePathEntityId;
    },
    TContext
  >;

  return useMutation<
    MarkedItemPublicToggleStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicToggleStatus400
      | MarkedItemPublicToggleStatus401
      | MarkedItemPublicToggleStatus403
      | MarkedItemPublicToggleStatus404
      | MarkedItemPublicToggleStatus500
      | MarkedItemPublicToggleStatus501
    >,
    {
      entityType: MarkedItemPublicTogglePathEntityType;
      entityId: MarkedItemPublicTogglePathEntityId;
    },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    MarkedItemPublicToggleStatus200,
    ResponseErrorConfig<
      | MarkedItemPublicToggleStatus400
      | MarkedItemPublicToggleStatus401
      | MarkedItemPublicToggleStatus403
      | MarkedItemPublicToggleStatus404
      | MarkedItemPublicToggleStatus500
      | MarkedItemPublicToggleStatus501
    >,
    {
      entityType: MarkedItemPublicTogglePathEntityType;
      entityId: MarkedItemPublicTogglePathEntityId;
    },
    TContext
  >;
}
