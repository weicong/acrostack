/* oxlint-disable */

import { commentPublicCreate } from "./commentPublicCreate.ts";
import { commentPublicDelete } from "./commentPublicDelete.ts";
import { commentPublicGetList } from "./commentPublicGetList.ts";
import { commentPublicUpdate } from "./commentPublicUpdate.ts";

export function commentPublic() {
  return { commentPublicGetList, commentPublicCreate, commentPublicUpdate, commentPublicDelete };
}
