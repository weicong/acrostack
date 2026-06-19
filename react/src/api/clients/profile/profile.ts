/* oxlint-disable */

import { profileChangePassword } from "./profileChangePassword.ts";
import { profileGet } from "./profileGet.ts";
import { profileUpdate } from "./profileUpdate.ts";

export function profile() {
  return { profileGet, profileUpdate, profileChangePassword };
}
