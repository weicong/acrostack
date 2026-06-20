import {
  Button,
  Input,
  Select,
  Text,
  Tooltip,
  Divider,
  makeStyles,
} from "@fluentui/react-components";
import {
  ChevronLeftRegular,
  ChevronRightRegular,
  ChevronDoubleLeftRegular,
  ChevronDoubleRightRegular,
} from "@fluentui/react-icons";
import { useState } from "react";

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

const useStyles = makeStyles({
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBlock: "var(--spacingVerticalS)",
    userSelect: "none",
  },
  infoGroup: {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacingHorizontalM)",
  },
  mutedText: {
    color: "var(--colorNeutralForeground3)",
  },
  pageSizeSelect: {
    width: "var(--spacingHorizontalXXXL)",
  },
  controlsGroup: {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacingHorizontalXS)",
  },
  ellipsis: {
    paddingInline: "var(--spacingHorizontalXS)",
    color: "var(--colorNeutralForeground3)",
  },
  divider: {
    height: "var(--spacingVerticalL)",
  },
  jumpInput: {
    width: "var(--spacingHorizontalXXL)",
  },
});

type PaginationBarProps = {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  total: number;
  onPageChange: (pageIndex: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
};

function getPageRange(current: number, total: number, window: number = 5): (number | "...")[] {
  if (total <= window + 2) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const pages: (number | "...")[] = [1];
  let start = Math.max(2, current - Math.floor(window / 2));
  const end = Math.min(total - 1, start + window - 1);
  start = Math.max(2, end - window + 1);
  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("...");
  pages.push(total);
  return pages;
}

export function PaginationBar({
  pageIndex,
  pageSize,
  pageCount,
  total,
  onPageChange,
  onPageSizeChange,
}: PaginationBarProps) {
  const canPrevious = pageIndex > 0;
  const canNext = pageIndex < pageCount - 1;
  const currentPage = pageIndex + 1;
  const pages = getPageRange(currentPage, pageCount);
  const [jumpValue, setJumpValue] = useState("");
  const styles = useStyles();

  const startItem = total === 0 ? 0 : pageIndex * pageSize + 1;
  const endItem = Math.min((pageIndex + 1) * pageSize, total);

  return (
    <div className={styles.bar}>
      <div className={styles.infoGroup}>
        <Text size={200} className={styles.mutedText}>
          {startItem}-{endItem} / {total}
        </Text>
        {onPageSizeChange && (
          <Select
            value={String(pageSize)}
            onChange={(_, data) => onPageSizeChange(Number(data.value))}
            size="small"
            className={styles.pageSizeSelect}
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={String(size)}>
                {`${size} 条/页`}
              </option>
            ))}
          </Select>
        )}
      </div>

      <div className={styles.controlsGroup}>
        <Tooltip content="首页" relationship="label">
          <Button
            appearance="subtle"
            size="small"
            disabled={!canPrevious}
            onClick={() => onPageChange(0)}
            icon={<ChevronDoubleLeftRegular />}
          />
        </Tooltip>
        <Tooltip content="上一页" relationship="label">
          <Button
            appearance="subtle"
            size="small"
            disabled={!canPrevious}
            onClick={() => onPageChange(pageIndex - 1)}
            icon={<ChevronLeftRegular />}
          />
        </Tooltip>

        {pages.map((page, i) =>
          page === "..." ? (
            <Text key={`ellipsis-${i}`} size={200} className={styles.ellipsis}>
              ...
            </Text>
          ) : (
            <Button
              key={page}
              appearance={page === currentPage ? "primary" : "subtle"}
              size="small"
              onClick={() => onPageChange(page - 1)}
            >
              {page}
            </Button>
          ),
        )}

        <Tooltip content="下一页" relationship="label">
          <Button
            appearance="subtle"
            size="small"
            disabled={!canNext}
            onClick={() => onPageChange(pageIndex + 1)}
            icon={<ChevronRightRegular />}
          />
        </Tooltip>
        <Tooltip content="末页" relationship="label">
          <Button
            appearance="subtle"
            size="small"
            disabled={!canNext}
            onClick={() => onPageChange(pageCount - 1)}
            icon={<ChevronDoubleRightRegular />}
          />
        </Tooltip>

        {pageCount > 1 && (
          <>
            <Divider vertical className={styles.divider} />
            <Text size={200} className={styles.mutedText}>
              跳至
            </Text>
            <Input
              size="small"
              className={styles.jumpInput}
              value={jumpValue}
              onChange={(_, data) => setJumpValue(data.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const page = Number(jumpValue);
                  if (page >= 1 && page <= pageCount) {
                    onPageChange(page - 1);
                  }
                  setJumpValue("");
                }
              }}
            />
            <Text size={200} className={styles.mutedText}>
              页
            </Text>
          </>
        )}
      </div>
    </div>
  );
}
