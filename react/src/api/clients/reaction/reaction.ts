/* oxlint-disable */

import { reactionDelete } from "./reactionDelete.ts";
import { reactionGetForEntity } from "./reactionGetForEntity.ts";
import { reactionToggle } from "./reactionToggle.ts";

export function reaction() {
  return { reactionGetForEntity, reactionToggle, reactionDelete };
}
