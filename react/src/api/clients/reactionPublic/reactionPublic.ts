/* oxlint-disable */

import { reactionPublicCreate } from "./reactionPublicCreate.ts";
import { reactionPublicDelete } from "./reactionPublicDelete.ts";
import { reactionPublicGetForSelection } from "./reactionPublicGetForSelection.ts";

export function reactionPublic() {
  return { reactionPublicGetForSelection, reactionPublicCreate, reactionPublicDelete };
}
