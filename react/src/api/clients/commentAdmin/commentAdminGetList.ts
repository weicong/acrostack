/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentAdminGetListQueryEntityType,
  CommentAdminGetListQueryText,
  CommentAdminGetListQueryRepliedCommentId,
  CommentAdminGetListQueryAuthor,
  CommentAdminGetListQueryCreationStartDate,
  CommentAdminGetListQueryCreationEndDate,
  CommentAdminGetListQueryCommentApproveState,
  CommentAdminGetListQuerySorting,
  CommentAdminGetListQuerySkipCount,
  CommentAdminGetListQueryMaxResultCount,
  CommentAdminGetListStatus200,
  CommentAdminGetListStatus400,
  CommentAdminGetListStatus401,
  CommentAdminGetListStatus403,
  CommentAdminGetListStatus404,
  CommentAdminGetListStatus500,
  CommentAdminGetListStatus501,
} from "../../models/commentAdmin/CommentAdminGetList.ts";

function getCommentAdminGetListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/comments` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/comments}
 */
export async function commentAdminGetList(
  params?: {
    EntityType?: CommentAdminGetListQueryEntityType;
    Text?: CommentAdminGetListQueryText;
    RepliedCommentId?: CommentAdminGetListQueryRepliedCommentId;
    Author?: CommentAdminGetListQueryAuthor;
    CreationStartDate?: CommentAdminGetListQueryCreationStartDate;
    CreationEndDate?: CommentAdminGetListQueryCreationEndDate;
    CommentApproveState?: CommentAdminGetListQueryCommentApproveState;
    Sorting?: CommentAdminGetListQuerySorting;
    SkipCount?: CommentAdminGetListQuerySkipCount;
    MaxResultCount?: CommentAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentAdminGetListStatus200,
    ResponseErrorConfig<
      | CommentAdminGetListStatus400
      | CommentAdminGetListStatus401
      | CommentAdminGetListStatus403
      | CommentAdminGetListStatus404
      | CommentAdminGetListStatus500
      | CommentAdminGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getCommentAdminGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
