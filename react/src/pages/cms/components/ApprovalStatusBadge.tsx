/**
 * 评论审核状态徽标：按 isApproved 三态渲染不同颜色与文案。
 */
import { Badge } from "@fluentui/react-components";

interface ApprovalStatusBadgeProps {
  /** null/undefined 表示待审核。 */
  isApproved: boolean | null | undefined;
}

export function ApprovalStatusBadge({ isApproved }: ApprovalStatusBadgeProps) {
  if (isApproved === true) {
    return (
      <Badge appearance="filled" color="success">
        {"评论已通过"}
      </Badge>
    );
  }
  if (isApproved === false) {
    return (
      <Badge appearance="filled" color="danger">
        {"评论已拒绝"}
      </Badge>
    );
  }
  return (
    <Badge appearance="filled" color="warning">
      {"评论已标记为等待"}
    </Badge>
  );
}
