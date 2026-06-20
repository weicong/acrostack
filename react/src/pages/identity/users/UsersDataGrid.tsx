import { useTranslation } from "react-i18next";
import {
  Avatar,
  Badge,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableCellLayout,
  createTableColumn,
  Spinner,
} from "@fluentui/react-components";
import type { DataGridProps, TableColumnDefinition } from "@fluentui/react-components";
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

const preserveServerOrder = (_a: UserItem, _b: UserItem) => 0;

function useUserColumns() {
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
      columnId: "name",
      compare: preserveServerOrder,
      renderHeaderCell: () => t("AbpIdentity::Name"),
      renderCell: (item) => `${item.name ?? ""} ${item.surname ?? ""}`.trim() || "-",
    }),
    createTableColumn<UserItem>({
      columnId: "isActive",
      compare: preserveServerOrder,
      renderHeaderCell: () => t("AbpIdentity::Status"),
      renderCell: (item) => <UserStatusBadge isActive={item.isActive} />,
    }),
  ] as TableColumnDefinition<UserItem>[];
}

type UsersDataGridProps = {
  users: UserItem[];
  isLoading: boolean;
  sortState: Parameters<NonNullable<DataGridProps["onSortChange"]>>[1] | undefined;
  onSortChange: NonNullable<DataGridProps["onSortChange"]>;
  ariaLabelledBy?: string;
};

export function UsersDataGrid({
  users,
  isLoading,
  sortState,
  onSortChange,
  ariaLabelledBy,
}: UsersDataGridProps) {
  const { t } = useTranslation();
  const columns = useUserColumns();

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <Spinner size="medium" label={t("AbpAccount::PleaseWait")} />
      </div>
    );
  }

  return (
    <DataGrid
      items={users}
      columns={columns}
      sortable
      sortState={sortState}
      onSortChange={onSortChange}
      getRowId={(item) => item.id ?? ""}
      focusMode="composite"
      aria-labelledby={ariaLabelledBy}
      style={{ minWidth: "600px" }}
    >
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<UserItem>>
        {({ item, rowId }) => (
          <DataGridRow<UserItem> key={rowId}>
            {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
}
