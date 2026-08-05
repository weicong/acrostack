/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagPublicGetAllRelatedTagsPathEntityType,
  TagPublicGetAllRelatedTagsPathEntityId,
  TagPublicGetAllRelatedTagsStatus200,
  TagPublicGetAllRelatedTagsStatus400,
  TagPublicGetAllRelatedTagsStatus401,
  TagPublicGetAllRelatedTagsStatus403,
  TagPublicGetAllRelatedTagsStatus404,
  TagPublicGetAllRelatedTagsStatus500,
  TagPublicGetAllRelatedTagsStatus501,
} from "../../models/tagPublic/TagPublicGetAllRelatedTags.ts";

function getTagPublicGetAllRelatedTagsUrl(
  entityType: TagPublicGetAllRelatedTagsPathEntityType,
  entityId: TagPublicGetAllRelatedTagsPathEntityId,
) {
  const res = { method: "GET", url: `/api/cms-kit-public/tags/${entityType}/${entityId}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/tags/:entityType/:entityId}
 */
export async function tagPublicGetAllRelatedTags(
  entityType: TagPublicGetAllRelatedTagsPathEntityType,
  entityId: TagPublicGetAllRelatedTagsPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TagPublicGetAllRelatedTagsStatus200,
    ResponseErrorConfig<
      | TagPublicGetAllRelatedTagsStatus400
      | TagPublicGetAllRelatedTagsStatus401
      | TagPublicGetAllRelatedTagsStatus403
      | TagPublicGetAllRelatedTagsStatus404
      | TagPublicGetAllRelatedTagsStatus500
      | TagPublicGetAllRelatedTagsStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getTagPublicGetAllRelatedTagsUrl(entityType, entityId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
