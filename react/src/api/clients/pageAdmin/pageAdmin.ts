/* oxlint-disable */

import { pageAdminCreate } from "./pageAdminCreate.ts";
import { pageAdminDelete } from "./pageAdminDelete.ts";
import { pageAdminGet } from "./pageAdminGet.ts";
import { pageAdminGetList } from "./pageAdminGetList.ts";
import { pageAdminSetAsHomePage } from "./pageAdminSetAsHomePage.ts";
import { pageAdminUpdate } from "./pageAdminUpdate.ts";

export function pageAdmin() {
  return {
    pageAdminGet,
    pageAdminUpdate,
    pageAdminDelete,
    pageAdminGetList,
    pageAdminCreate,
    pageAdminSetAsHomePage,
  };
}
