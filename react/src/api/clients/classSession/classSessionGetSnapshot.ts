/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionGetSnapshotOptions,
  ClassSessionGetSnapshotResponses,
} from "../../models/classSession/ClassSessionGetSnapshot";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/snapshot}
 */
export function classSessionGetSnapshot<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionGetSnapshotOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionGetSnapshotResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/class-session/{id}/snapshot",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionGetSnapshotResponses, ThrowOnError>>;
}
