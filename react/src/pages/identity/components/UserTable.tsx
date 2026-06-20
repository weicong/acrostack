import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
} from "@fluentui/react-components";
import type { DataGridProps } from "@fluentui/react-components";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";
import { useUserColumns } from "./UserTable.columns";

type UserItem = AcroStackAppUsersAppUserDto;

type UserTableProps = {
  users: UserItem[];
  sortState: Parameters<NonNullable<DataGridProps["onSortChange"]>>[1];
  onSortChange: DataGridProps["onSortChange"];
  ariaLabelledBy?: string;
};

export function UserTable({ users, sortState, onSortChange, ariaLabelledBy }: UserTableProps) {
  const columns = useUserColumns();

  return (
    <DataGrid
      items={users}
      columns={columns}
      sortable
      sortState={sortState}
      onSortChange={onSortChange}
      getRowId={(item) => item.id ?? ""}
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
