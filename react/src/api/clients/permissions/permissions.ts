/* oxlint-disable */

import { permissionsDeleteResource } from "./permissionsDeleteResource.ts";
import { permissionsGet } from "./permissionsGet.ts";
import { permissionsGetByGroup } from "./permissionsGetByGroup.ts";
import { permissionsGetResource } from "./permissionsGetResource.ts";
import { permissionsGetResourceByProvider } from "./permissionsGetResourceByProvider.ts";
import { permissionsGetResourceDefinitions } from "./permissionsGetResourceDefinitions.ts";
import { permissionsGetResourceProviderKeyLookupServices } from "./permissionsGetResourceProviderKeyLookupServices.ts";
import { permissionsSearchResourceProviderKey } from "./permissionsSearchResourceProviderKey.ts";
import { permissionsUpdate } from "./permissionsUpdate.ts";
import { permissionsUpdateResource } from "./permissionsUpdateResource.ts";

export function permissions() {
  return {
    permissionsGet,
    permissionsUpdate,
    permissionsGetByGroup,
    permissionsGetResourceProviderKeyLookupServices,
    permissionsSearchResourceProviderKey,
    permissionsGetResourceDefinitions,
    permissionsGetResource,
    permissionsUpdateResource,
    permissionsDeleteResource,
    permissionsGetResourceByProvider,
  };
}
