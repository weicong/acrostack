/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsGetResourceByProviderQueryResourceName,
  PermissionsGetResourceByProviderQueryResourceKey,
  PermissionsGetResourceByProviderQueryProviderName,
  PermissionsGetResourceByProviderQueryProviderKey,
  PermissionsGetResourceByProviderStatus200,
  PermissionsGetResourceByProviderStatus400,
  PermissionsGetResourceByProviderStatus401,
  PermissionsGetResourceByProviderStatus403,
  PermissionsGetResourceByProviderStatus404,
  PermissionsGetResourceByProviderStatus500,
  PermissionsGetResourceByProviderStatus501,
} from "../../models/permissions/PermissionsGetResourceByProvider.ts";

function getPermissionsGetResourceByProviderUrl() {
  const res = {
    method: "GET",
    url: `/api/permission-management/permissions/resource/by-provider` as const,
  };

  return res;
}

/**
 * {@link /api/permission-management/permissions/resource/by-provider}
 */
export async function permissionsGetResourceByProvider(
  params?: {
    resourceName?: PermissionsGetResourceByProviderQueryResourceName;
    resourceKey?: PermissionsGetResourceByProviderQueryResourceKey;
    providerName?: PermissionsGetResourceByProviderQueryProviderName;
    providerKey?: PermissionsGetResourceByProviderQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsGetResourceByProviderStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceByProviderStatus400
      | PermissionsGetResourceByProviderStatus401
      | PermissionsGetResourceByProviderStatus403
      | PermissionsGetResourceByProviderStatus404
      | PermissionsGetResourceByProviderStatus500
      | PermissionsGetResourceByProviderStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getPermissionsGetResourceByProviderUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
