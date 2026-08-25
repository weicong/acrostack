/**
 * 评论管理筛选栏：实体类型输入、审核状态下拉与全局搜索（含 300ms 防抖）。
 */
import { useEffect, useState } from "react";
import { Button, Dropdown, Input, Option } from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";
import { useCommentsStyles } from "../styles/comments";
import { CommentApproveState } from "../constants/comments";

interface CommentsFilterBarProps {
  /** 实体类型过滤值（受控）。 */
  entityType: string;
  onEntityTypeChange: (value: string) => void;
  /** 审核状态过滤值（受控）；"" 表示全部状态。 */
  approvalState: number | "";
  onApprovalStateChange: (value: number | "") => void;
  /** 实体类型搜索按钮 / 状态切换后回到第一页的回调。 */
  onFilterSubmit: () => void;
  /** 防抖后的搜索值回调（写入表格全局过滤）。 */
  onSearch: (value: string) => void;
}

export function CommentsFilterBar({
  entityType,
  onEntityTypeChange,
  approvalState,
  onApprovalStateChange,
  onFilterSubmit,
  onSearch,
}: CommentsFilterBarProps) {
  const styles = useCommentsStyles();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchValue);
    }, 300);
    return () => clearTimeout(timer);
    // onSearch 来自 useDataTableState 的 useCallback 包装，引用稳定，无需列入依赖数组
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className={styles.toolbar}>
      <div className={styles.field}>
        <label htmlFor="comment-entity-type">{"实体类型"}</label>
        <Input
          id="comment-entity-type"
          className={styles.entityTypeInput}
          value={entityType}
          onChange={(_, data) => onEntityTypeChange(data.value)}
          placeholder={"全部类型"}
          contentAfter={
            <Button
              size="small"
              appearance="subtle"
              icon={<Search20Regular />}
              onClick={onFilterSubmit}
              disabled={!entityType.trim()}
              aria-label={"搜索"}
            />
          }
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="comment-state-filter">{"审核状态"}</label>
        <Dropdown
          id="comment-state-filter"
          className={styles.stateFilter}
          placeholder={"全部状态"}
          value={
            approvalState === CommentApproveState.Approved
              ? "评论已通过"
              : approvalState === CommentApproveState.WaitingForApproval
                ? "评论已标记为等待"
                : ""
          }
          onOptionSelect={(_, data) => {
            const val = data.optionValue;
            onApprovalStateChange(val === "" ? "" : Number(val));
            onFilterSubmit();
          }}
          clearable
        >
          <Option value="">{"全部状态"}</Option>
          <Option value={String(CommentApproveState.Approved)}>{"评论已通过"}</Option>
          <Option value={String(CommentApproveState.WaitingForApproval)}>
            {"评论已标记为等待"}
          </Option>
        </Dropdown>
      </div>
      <div className={styles.field} style={{ flex: 1, minWidth: "200px" }}>
        <label htmlFor="comment-search">{"搜索"}</label>
        <Input
          id="comment-search"
          value={searchValue}
          onChange={(_, data) => setSearchValue(data.value)}
          placeholder={"搜索评论..."}
          contentBefore={<Search20Regular />}
        />
      </div>
    </div>
  );
}
