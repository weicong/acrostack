/**
 * 文件管理页文件夹导航栈：维护当前文件夹 id 与面包屑，
 * 提供进入子文件夹（压栈）与跳回指定层级（截断）两个动作。
 */
import { useCallback, useState } from "react";
import type { AcroStackFileManagementFileFolderDto as FileFolderDto } from "@/api/models/acroStack/fileManagement/FileFolderDto";
import type { BreadcrumbCrumb } from "../types/fileManagement";

export function useFolderNavigation() {
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbCrumb[]>([{ id: null, name: "根目录" }]);

  /** 进入子文件夹并压入面包屑。 */
  const openFolder = useCallback((folder: FileFolderDto) => {
    const folderId = folder.id ?? null;
    setCurrentFolderId(folderId);
    setBreadcrumbs((prev) => [...prev, { id: folderId, name: folder.name ?? "文件夹" }]);
  }, []);

  /** 跳转回指定层级的面包屑并截断其后层级。 */
  const navigateTo = useCallback(
    (index: number) => {
      const target = breadcrumbs[index];
      if (!target) return;
      setCurrentFolderId(target.id);
      setBreadcrumbs((prev) => prev.slice(0, index + 1));
    },
    [breadcrumbs],
  );

  return { currentFolderId, breadcrumbs, openFolder, navigateTo };
}
