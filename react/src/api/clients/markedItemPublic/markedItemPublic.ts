/* oxlint-disable */

import { markedItemPublicGetForUser } from "./markedItemPublicGetForUser.ts";
import { markedItemPublicToggle } from "./markedItemPublicToggle.ts";

export function markedItemPublic() {
  return { markedItemPublicGetForUser, markedItemPublicToggle };
}
