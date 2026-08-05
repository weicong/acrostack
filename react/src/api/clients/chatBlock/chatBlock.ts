/* oxlint-disable */

import { chatBlockBlockUser } from "./chatBlockBlockUser.ts";
import { chatBlockGetBlockedUsers } from "./chatBlockGetBlockedUsers.ts";
import { chatBlockIsUserBlocked } from "./chatBlockIsUserBlocked.ts";
import { chatBlockUnblockUser } from "./chatBlockUnblockUser.ts";

export function chatBlock() {
  return {
    chatBlockBlockUser,
    chatBlockUnblockUser,
    chatBlockGetBlockedUsers,
    chatBlockIsUserBlocked,
  };
}
