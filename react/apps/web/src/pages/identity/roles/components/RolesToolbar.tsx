/**
 * 角色工具栏：搜索（300ms 防抖）与新建角色。
 * 排布交给共用的 ListToolbar；本文件不含任何自定义样式。
 */
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@acrostack/ui/components/button";
import { Input } from "@acrostack/ui/components/input";
import { ListToolbar } from "@acrostack/ui/data-table";

interface RolesToolbarProps {
  onCreate: () => void;
  /** 搜索防抖后的全局过滤回调（来自表格状态）。 */
  onGlobalFilterChange: (value: string) => void;
}

export function RolesToolbar({ onCreate, onGlobalFilterChange }: RolesToolbarProps) {
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
      label="角色筛选与操作"
      search={
        <Input
          type="search"
          className="w-full sm:w-64"
          placeholder="按角色名搜索"
          aria-label="搜索角色"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      }
      actions={
        <Button onClick={onCreate}>
          <Plus />
          新角色
        </Button>
      }
    />
  );
}
