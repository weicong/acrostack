/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceValidationErrorInfo } from "./RemoteServiceValidationErrorInfo";

export type VoloAbpHttpRemoteServiceErrorInfo = {
  code?: string | null;
  message?: string | null;
  details?: string | null;
  data?: {
    [key: string]: unknown;
  } | null;
  validationErrors?: VoloAbpHttpRemoteServiceValidationErrorInfo[] | null;
};
