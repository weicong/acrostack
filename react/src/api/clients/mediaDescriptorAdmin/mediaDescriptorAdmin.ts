/* oxlint-disable */

import { mediaDescriptorAdminCreate } from "./mediaDescriptorAdminCreate.ts";
import { mediaDescriptorAdminDelete } from "./mediaDescriptorAdminDelete.ts";

export function mediaDescriptorAdmin() {
  return { mediaDescriptorAdminCreate, mediaDescriptorAdminDelete };
}
