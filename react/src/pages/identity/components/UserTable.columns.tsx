import { useTranslation } from "react-i18next";
import { Avatar, Badge, TableCellLayout, createTableColumn } from "@fluentui/react-components";
import type { TableColumnDefinition } from "@fluentui/react-components";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

type UserItem = AcroStackAppUsersAppUserDto;

const preserveServerOrder = (_a: UserItem, _b: UserItem) => 0;

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

export function useUserColumns() {
  const { t } = useTranslation();

  return [
    createTableColumn<UserItem>({
      columnId: "userName",
      compare: preserveServerOrder,
      renderHeaderCell: () => t("AbpIdentity::UserName"),
      renderCell: (item) => (
        <TableCellLayout
          media={<Avatar aria-label={item.userName ?? ""} name={item.userName ?? ""} size={24} />}
        >
          {item.userName ?? "-"}
        </TableCellLayout>
      ),
    }),
    createTableColumn<UserItem>({
      columnId: "name",
      compare: preserveServerOrder,
      renderHeaderCell: () => t("AbpIdentity::DisplayName"),
      renderCell: (item) => `${item.name ?? ""} ${item.surname ?? ""}`.trim() || "-",
    }),
    createTableColumn<UserItem>({
      columnId: "email",
      compare: preserveServerOrder,
      renderHeaderCell: () => t("AbpIdentity::Email"),
      renderCell: (item) => item.email ?? "-",
    }),
    createTableColumn<UserItem>({
      columnId: "phoneNumber",
      compare: preserveServerOrder,
      renderHeaderCell: () => t("AbpIdentity::PhoneNumber"),
      renderCell: (item) => item.phoneNumber ?? "-",
    }),
    createTableColumn<UserItem>({
      columnId: "isActive",
      compare: preserveServerOrder,
      renderHeaderCell: () => t("AbpIdentity::Status"),
      renderCell: (item) => <UserStatusBadge isActive={item.isActive} />,
    }),
  ] as TableColumnDefinition<UserItem>[];
}
