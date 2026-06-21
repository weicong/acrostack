import DataTable, { type TableColumn, type SortOrder } from "react-data-table-component";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";
import { useUserColumns } from "./UserTable.columns";

type UserItem = AcroStackAppUsersAppUserDto;

type UserTableProps = {
  users: UserItem[];
  loading: boolean;
  totalRows: number;
  resetPage: boolean;
  defaultSortFieldId: string;
  defaultSortAsc: boolean;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number, page: number) => void;
  onSort: (column: TableColumn<UserItem>, sortDirection: SortOrder) => void;
  onDelete?: (user: UserItem) => void;
  onEdit?: (user: UserItem) => void;
};

export function UserTable({
  users,
  loading,
  totalRows,
  resetPage,
  defaultSortFieldId,
  defaultSortAsc,
  onPageChange,
  onPerPageChange,
  onSort,
  onDelete,
  onEdit,
}: UserTableProps) {
  const columns = useUserColumns(onDelete, onEdit);

  return (
    <DataTable
      columns={columns}
      data={users}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      paginationResetDefaultPage={resetPage}
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 50, 100]}
      onChangePage={onPageChange}
      onChangeRowsPerPage={onPerPageChange}
      sortServer
      defaultSortFieldId={defaultSortFieldId}
      defaultSortAsc={defaultSortAsc}
      onSort={onSort}
      highlightOnHover
    />
  );
}
