import { useTranslation } from "react-i18next";
import { Avatar, Badge, Button } from "@fluentui/react-components";
import { DeleteRegular, EditRegular } from "@fluentui/react-icons";
import type { TableColumn } from "react-data-table-component";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

type UserItem = AcroStackAppUsersAppUserDto;

function UserStatusBadge({ isActive }: { isActive?: boolean }) {
  const { t } = useTranslation();
  if (isActive !== false) {
    return (
      <Badge appearance="filled" color="success" size="small">
        {t("AbpIdentity::Active")}
      </Badge>
    );
  }
  return (
    <Badge appearance="filled" color="danger" size="small">
      {t("AbpIdentity::NotActive")}
    </Badge>
  );
}

export function useUserColumns(
  onDelete?: (user: UserItem) => void,
  onEdit?: (user: UserItem) => void,
): TableColumn<UserItem>[] {
  const { t } = useTranslation();

  const columns: TableColumn<UserItem>[] = [
    {
      id: "userName",
      name: t("AbpIdentity::UserName"),
      sortable: true,
      sortField: "UserName",
      selector: (row) => row.userName ?? "",
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Avatar aria-label={row.userName ?? ""} name={row.userName ?? ""} size={24} />
          <span>{row.userName ?? "-"}</span>
        </div>
      ),
    },
    {
      id: "name",
      name: t("AbpIdentity::DisplayName"),
      sortable: true,
      sortField: "Name",
      selector: (row) => `${row.name ?? ""} ${row.surname ?? ""}`.trim(),
      cell: (row) => `${row.name ?? ""} ${row.surname ?? ""}`.trim() || "-",
    },
    {
      id: "email",
      name: t("AbpIdentity::Email"),
      sortable: true,
      sortField: "Email",
      selector: (row) => row.email ?? "",
      cell: (row) => row.email ?? "-",
    },
    {
      id: "phoneNumber",
      name: t("AbpIdentity::PhoneNumber"),
      sortable: true,
      sortField: "PhoneNumber",
      selector: (row) => row.phoneNumber ?? "",
      cell: (row) => row.phoneNumber ?? "-",
    },
    {
      id: "isActive",
      name: t("AbpIdentity::Status"),
      sortable: true,
      sortField: "IsActive",
      selector: (row) => (row.isActive ? 1 : 0),
      cell: (row) => <UserStatusBadge isActive={row.isActive} />,
    },
  ];

  if (onDelete || onEdit) {
    columns.push({
      id: "actions",
      name: t("AbpIdentity::Actions"),
      button: true,
      cell: (row) => (
        <div style={{ display: "flex", gap: "0.25rem" }}>
          {onEdit && (
            <Button
              appearance="subtle"
              size="small"
              icon={<EditRegular />}
              onClick={() => onEdit(row)}
              aria-label={t("AbpIdentity::Edit")}
            />
          )}
          {onDelete && (
            <Button
              appearance="subtle"
              size="small"
              icon={<DeleteRegular />}
              onClick={() => onDelete(row)}
              aria-label={t("AbpIdentity::Delete")}
            />
          )}
        </div>
      ),
    });
  }

  return columns;
}
