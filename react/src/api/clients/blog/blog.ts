/* oxlint-disable */

import { blogCreate } from "./blogCreate.ts";
import { blogDelete } from "./blogDelete.ts";
import { blogGet } from "./blogGet.ts";
import { blogGetBySlug } from "./blogGetBySlug.ts";
import { blogGetList } from "./blogGetList.ts";
import { blogUpdate } from "./blogUpdate.ts";

export function blog() {
  return { blogGetList, blogCreate, blogGet, blogUpdate, blogDelete, blogGetBySlug };
}
