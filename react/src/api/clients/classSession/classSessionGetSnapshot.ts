/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionGetSnapshotOptions,
  ClassSessionGetSnapshotResponses,
} from "../../models/classSession/ClassSessionGetSnapshot";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/snapshot}
 */
export function classSessionGetSnapshot<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionGetSnapshotOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionGetSnapshotResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/class-session/{id}/snapshot",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionGetSnapshotResponses, ThrowOnError>>,
  );
}
