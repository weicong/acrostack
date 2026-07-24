/* oxlint-disable */

import { userCreate } from "./userCreate.ts";
import { userDelete } from "./userDelete.ts";
import { userFindByEmail } from "./userFindByEmail.ts";
import { userFindById } from "./userFindById.ts";
import { userFindByUsername } from "./userFindByUsername.ts";
import { userGet } from "./userGet.ts";
import { userGetAssignableRoles } from "./userGetAssignableRoles.ts";
import { userGetList } from "./userGetList.ts";
import { userGetRoles } from "./userGetRoles.ts";
import { userUpdate } from "./userUpdate.ts";
import { userUpdateRoles } from "./userUpdateRoles.ts";

export function user() {
  return {
    userGet,
    userUpdate,
    userDelete,
    userGetList,
    userCreate,
    userFindById,
    userGetRoles,
    userUpdateRoles,
    userGetAssignableRoles,
    userFindByUsername,
    userFindByEmail,
  };
}
