/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminCreateData,
  MenuItemAdminCreateStatus200,
  MenuItemAdminCreateStatus400,
  MenuItemAdminCreateStatus401,
  MenuItemAdminCreateStatus403,
  MenuItemAdminCreateStatus404,
  MenuItemAdminCreateStatus500,
  MenuItemAdminCreateStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminCreate.ts";

function getMenuItemAdminCreateUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/menu-items` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export async function menuItemAdminCreate(
  data?: MenuItemAdminCreateData,
  config: Partial<RequestConfig<MenuItemAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    MenuItemAdminCreateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminCreateStatus400
      | MenuItemAdminCreateStatus401
      | MenuItemAdminCreateStatus403
      | MenuItemAdminCreateStatus404
      | MenuItemAdminCreateStatus500
      | MenuItemAdminCreateStatus501
    >,
    MenuItemAdminCreateData
  >({
    method: "POST",
    url: getMenuItemAdminCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
