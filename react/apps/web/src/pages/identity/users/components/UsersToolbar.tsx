/**
 * 用户工具栏：搜索（300ms 防抖）与新建用户。
 * 排布交给共用的 ListToolbar；本文件不含任何自定义样式。
 */
import { useEffect, useState } from "react";
import { Button, SearchBox } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { ListToolbar } from "@/components/ui/ListToolbar";

interface UsersToolbarProps {
  onCreate: () => void;
  /** 搜索防抖后的全局过滤回调（来自表格状态）。 */
  onGlobalFilterChange: (value: string) => void;
}

export function UsersToolbar({ onCreate, onGlobalFilterChange }: UsersToolbarProps) {
  const [searchValue, setSearchValue] = useState("");

  // 搜索防抖：300ms 后同步到表格全局过滤
  useEffect(() => {
    const timer = setTimeout(() => {
      onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue, onGlobalFilterChange]);

  return (
    <ListToolbar
      label="用户筛选与操作"
      search={
        <SearchBox
          placeholder="按用户名或邮箱搜索"
          aria-label="搜索用户"
          appearance="outline"
          value={searchValue}
          onChange={(_event, data) => setSearchValue(data.value)}
        />
      }
      actions={
        <Button appearance="primary" icon={<Add20Regular />} onClick={onCreate}>
          新用户
        </Button>
      }
    />
  );
}
