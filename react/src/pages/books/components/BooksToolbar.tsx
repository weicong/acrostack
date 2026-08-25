/**
 * 图书列表工具栏：搜索框、类型筛选、搜索/重置与新增按钮。
 * 输入状态内部化，应用筛选通过 onApplyFilter 写回 URL 查询参数。
 */
import { useState } from "react";
import { Button, SearchBox, Select } from "@fluentui/react-components";
import { Add20Regular, Search20Regular, ArrowReset20Regular } from "@fluentui/react-icons";
import { bookTypeOptions } from "../constants/bookType";
import { useBooksStyles } from "../styles/books";

export interface BooksToolbarProps {
  initialSearch: string;
  initialType?: number;
  onCreate: () => void;
  /** 应用筛选（写入 URL search 参数）。 */
  onApplyFilter: (filter: { q: string; type?: number }) => void;
}

export function BooksToolbar({
  initialSearch,
  initialType,
  onCreate,
  onApplyFilter,
}: BooksToolbarProps) {
  const styles = useBooksStyles();
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [typeFilter, setTypeFilter] = useState<number | undefined>(initialType);

  const isFilterDirty = searchInput !== "" || typeFilter !== undefined;

  function handleSearch() {
    onApplyFilter({ q: searchInput, type: typeFilter });
  }

  function handleReset() {
    setSearchInput("");
    setTypeFilter(undefined);
    onApplyFilter({ q: "", type: undefined });
  }

  return (
    <div className={styles.toolbar}>
      <div className={styles.filters}>
        <SearchBox
          placeholder={"搜索"}
          value={searchInput}
          onChange={(_, data) => setSearchInput(data.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          appearance="outline"
        />
        <Select
          appearance="outline"
          value={typeFilter != null ? String(typeFilter) : ""}
          onChange={(_, data) => setTypeFilter(data.value ? Number(data.value) : undefined)}
        >
          <option value="">{"全部类型"}</option>
          {bookTypeOptions
            .filter((o) => o.value !== 0)
            .map((o) => (
              <option key={o.value} value={String(o.value)}>
                {o.label}
              </option>
            ))}
        </Select>
        <Button appearance="secondary" icon={<Search20Regular />} onClick={handleSearch}>
          {"搜索"}
        </Button>
        {isFilterDirty && (
          <Button appearance="subtle" icon={<ArrowReset20Regular />} onClick={handleReset}>
            {"重置"}
          </Button>
        )}
      </div>
      <div className={styles.actionButtons}>
        <Button appearance="primary" icon={<Add20Regular />} onClick={onCreate}>
          {"新增图书"}
        </Button>
      </div>
    </div>
  );
}
