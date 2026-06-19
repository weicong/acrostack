/* oxlint-disable */

import { loginCheckPassword } from "./loginCheckPassword.ts";
import { loginLogin } from "./loginLogin.ts";
import { loginLogout } from "./loginLogout.ts";

export function login() {
  return { loginLogin, loginLogout, loginCheckPassword };
}
