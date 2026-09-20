/**
 * 角色工具栏：搜索（300ms 防抖）与新建角色。
 * 排布交给共用的 ListToolbar，保证与其它列表页操作位置一致。
 */
import { useEffect, useState } from "react";
import { Button, SearchBox, makeStyles } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { ListToolbar } from "@/components/ui/ListToolbar";

const useStyles = makeStyles({
  search: {
    width: "100%",
  },
});

interface RolesToolbarProps {
  onCreate: () => void;
  /** 搜索防抖后的全局过滤回调（来自表格状态）。 */
  onGlobalFilterChange: (value: string) => void;
}

export function RolesToolbar({ onCreate, onGlobalFilterChange }: RolesToolbarProps) {
  const styles = useStyles();
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
        <SearchBox
          className={styles.search}
          placeholder="按角色名搜索"
          aria-label="搜索角色"
          appearance="outline"
          value={searchValue}
          onChange={(_event, data) => setSearchValue(data.value)}
        />
      }
      actions={
        <Button appearance="primary" icon={<Add20Regular />} onClick={onCreate}>
          新角色
        </Button>
      }
    />
  );
}
