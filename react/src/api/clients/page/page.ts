/* oxlint-disable */

import { pageCreate } from "./pageCreate.ts";
import { pageDelete } from "./pageDelete.ts";
import { pageGet } from "./pageGet.ts";
import { pageGetBySlug } from "./pageGetBySlug.ts";
import { pageGetList } from "./pageGetList.ts";
import { pageUpdate } from "./pageUpdate.ts";

export function page() {
  return { pageGetList, pageCreate, pageGet, pageUpdate, pageDelete, pageGetBySlug };
}
