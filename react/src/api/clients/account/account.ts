/* oxlint-disable */

import { accountRegister } from "./accountRegister.ts";
import { accountResetPassword } from "./accountResetPassword.ts";
import { accountSendPasswordResetCode } from "./accountSendPasswordResetCode.ts";
import { accountVerifyPasswordResetToken } from "./accountVerifyPasswordResetToken.ts";

export function account() {
  return {
    accountRegister,
    accountSendPasswordResetCode,
    accountVerifyPasswordResetToken,
    accountResetPassword,
  };
}
