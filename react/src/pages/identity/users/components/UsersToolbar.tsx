/**
 * 用户工具栏：搜索框（300ms 防抖）与新建用户按钮。
 * 搜索输入为纯本地 UI 状态，内部化在此组件。
 */
import { useEffect, useState } from "react";
import { Button, SearchBox } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { useUsersStyles } from "../styles/users";

interface UsersToolbarProps {
  onCreate: () => void;
  /** 搜索防抖后的全局过滤回调（来自表格状态）。 */
  onGlobalFilterChange: (value: string) => void;
}

export function UsersToolbar({ onCreate, onGlobalFilterChange }: UsersToolbarProps) {
  const styles = useUsersStyles();
  const [searchValue, setSearchValue] = useState("");

  // 搜索防抖：300ms 后同步到表格全局过滤
  useEffect(() => {
    const timer = setTimeout(() => {
      onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue, onGlobalFilterChange]);

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
      <div className={styles.actionButtons}>
        <Button appearance="primary" icon={<Add20Regular />} onClick={onCreate}>
          {"新用户"}
        </Button>
      </div>
    </div>
  );
}
