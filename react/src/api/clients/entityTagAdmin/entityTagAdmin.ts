/* oxlint-disable */

import { entityTagAdminAddTagToEntity } from "./entityTagAdminAddTagToEntity.ts";
import { entityTagAdminRemoveTagFromEntity } from "./entityTagAdminRemoveTagFromEntity.ts";
import { entityTagAdminSetEntityTags } from "./entityTagAdminSetEntityTags.ts";

export function entityTagAdmin() {
  return {
    entityTagAdminAddTagToEntity,
    entityTagAdminRemoveTagFromEntity,
    entityTagAdminSetEntityTags,
  };
}
