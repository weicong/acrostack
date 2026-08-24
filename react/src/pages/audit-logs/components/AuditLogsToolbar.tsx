/**
 * 审计日志筛选栏：全局搜索框，输入经 300ms 防抖后回传。
 */
import { useEffect, useState } from "react";
import { SearchBox } from "@fluentui/react-components";
import { useAuditLogsStyles } from "../styles/auditLogs";

interface AuditLogsToolbarProps {
  /** 防抖后的搜索值回调（写入表格全局过滤）。 */
  onSearch: (value: string) => void;
}

export function AuditLogsToolbar({ onSearch }: AuditLogsToolbarProps) {
  const styles = useAuditLogsStyles();
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
      <div className={styles.filters}>
        <SearchBox
          placeholder={"搜索"}
          value={searchValue}
          onChange={(_, data) => setSearchValue(data.value)}
          appearance="outline"
        />
      </div>
    </div>
  );
}
