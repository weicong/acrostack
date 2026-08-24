/**
 * 文件夹面包屑导航：点击任一层级跳转回对应目录。
 */
import {
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
} from "@fluentui/react-components";
import { Folder20Regular } from "@fluentui/react-icons";
import type { BreadcrumbCrumb } from "../types/fileManagement";
import { useFileManagementStyles } from "../styles/fileManagement";

interface FolderBreadcrumbsProps {
  crumbs: BreadcrumbCrumb[];
  onNavigate: (index: number) => void;
}

export function FolderBreadcrumbs({ crumbs, onNavigate }: FolderBreadcrumbsProps) {
  const styles = useFileManagementStyles();
  return (
    <Breadcrumb className={styles.breadcrumb} size="medium">
      {crumbs.map((crumb, idx) => (
        <span key={`${crumb.id ?? "root"}-${idx}`}>
          <BreadcrumbItem>
            <BreadcrumbButton
              icon={idx === 0 ? <Folder20Regular /> : undefined}
              onClick={() => onNavigate(idx)}
            >
              {crumb.name}
            </BreadcrumbButton>
          </BreadcrumbItem>
          {idx < crumbs.length - 1 && <BreadcrumbDivider />}
        </span>
      ))}
    </Breadcrumb>
  );
}
