/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagPublicGetPopularTagsPathEntityType,
  TagPublicGetPopularTagsPathMaxCount,
  TagPublicGetPopularTagsStatus200,
  TagPublicGetPopularTagsStatus400,
  TagPublicGetPopularTagsStatus401,
  TagPublicGetPopularTagsStatus403,
  TagPublicGetPopularTagsStatus404,
  TagPublicGetPopularTagsStatus500,
  TagPublicGetPopularTagsStatus501,
} from "../../models/tagPublic/TagPublicGetPopularTags.ts";

function getTagPublicGetPopularTagsUrl(
  entityType: TagPublicGetPopularTagsPathEntityType,
  maxCount: TagPublicGetPopularTagsPathMaxCount,
) {
  const res = {
    method: "GET",
    url: `/api/cms-kit-public/tags/popular/${entityType}/${maxCount}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/tags/popular/:entityType/:maxCount}
 */
export async function tagPublicGetPopularTags(
  entityType: TagPublicGetPopularTagsPathEntityType,
  maxCount: TagPublicGetPopularTagsPathMaxCount,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TagPublicGetPopularTagsStatus200,
    ResponseErrorConfig<
      | TagPublicGetPopularTagsStatus400
      | TagPublicGetPopularTagsStatus401
      | TagPublicGetPopularTagsStatus403
      | TagPublicGetPopularTagsStatus404
      | TagPublicGetPopularTagsStatus500
      | TagPublicGetPopularTagsStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getTagPublicGetPopularTagsUrl(entityType, maxCount).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
