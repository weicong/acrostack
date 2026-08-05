/* oxlint-disable */

import { tagAdminCreate } from "./tagAdminCreate.ts";
import { tagAdminDelete } from "./tagAdminDelete.ts";
import { tagAdminGet } from "./tagAdminGet.ts";
import { tagAdminGetList } from "./tagAdminGetList.ts";
import { tagAdminGetTagDefinitions } from "./tagAdminGetTagDefinitions.ts";
import { tagAdminUpdate } from "./tagAdminUpdate.ts";

export function tagAdmin() {
  return {
    tagAdminCreate,
    tagAdminGetList,
    tagAdminDelete,
    tagAdminGet,
    tagAdminUpdate,
    tagAdminGetTagDefinitions,
  };
}
