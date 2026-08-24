/**
 * 博客文章工具栏：搜索框（300ms 防抖）、博客筛选下拉与新建按钮。
 * 搜索输入为纯本地 UI 状态，内部化在此组件。
 */
import { useEffect, useState } from "react";
import { Button, Dropdown, Option, SearchBox } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import type { VoloCmsKitAdminBlogsBlogDto as BlogOption } from "@/api/models/volo/cmsKit/admin/blogs/BlogDto";
import { useBlogPostsStyles } from "../styles/blogPosts";

interface BlogPostsToolbarProps {
  /** 下拉可选博客列表。 */
  blogs: BlogOption[];
  /** 当前选中博客 Id（"" 表示全部）。 */
  selectedBlogId: string;
  onSelectBlog: (blogId: string) => void;
  canCreate: boolean;
  onCreate: () => void;
  /** 搜索防抖后的全局过滤回调（来自表格状态）。 */
  onGlobalFilterChange: (value: string) => void;
}

export function BlogPostsToolbar({
  blogs,
  selectedBlogId,
  onSelectBlog,
  canCreate,
  onCreate,
  onGlobalFilterChange,
}: BlogPostsToolbarProps) {
  const styles = useBlogPostsStyles();
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
          className={styles.search}
          placeholder={"搜索"}
          value={searchValue}
          onChange={(_, data) => setSearchValue(data.value)}
          appearance="outline"
        />
        <Dropdown
          className={styles.blogFilter}
          placeholder={"全部博客"}
          value={blogs.find((b) => b.id === selectedBlogId)?.name ?? ""}
          onOptionSelect={(_, data) =>
            onSelectBlog(data.optionValue === "" ? "" : String(data.optionValue))
          }
          clearable
        >
          <Option value="">{"全部博客"}</Option>
          {blogs.map((b) => (
            <Option key={b.id} value={b.id ?? ""}>
              {b.name ?? ""}
            </Option>
          ))}
        </Dropdown>
      </div>
      {canCreate && (
        <div className={styles.actionButtons}>
          <Button appearance="primary" icon={<Add20Regular />} onClick={onCreate}>
            {"新建博客文章"}
          </Button>
        </div>
      )}
    </div>
  );
}
