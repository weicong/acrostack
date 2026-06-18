import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  Spinner,
} from "@fluentui/react-components";
import type { BookDto } from "@/lib/api/books";
import { columns } from "./columns";

interface BookDataGridProps {
  items: BookDto[];
  isLoading: boolean;
}

export function BookDataGrid({ items, isLoading }: BookDataGridProps) {
  if (isLoading) {
    return <Spinner style={{ margin: "2rem auto" }} />;
  }

  return (
    <DataGrid
      items={items}
      columns={columns}
      sortable
      getRowId={(item) => item.id}
      selectionMode="multiselect"
      style={{ minWidth: "600px" }}
    >
      <DataGridHeader>
        <DataGridRow selectionCell={{ checkboxIndicator: { "aria-label": "Select all" } }}>
          {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<BookDto>>
        {({ item, rowId }) => (
          <DataGridRow<BookDto>
            key={rowId}
            selectionCell={{ checkboxIndicator: { "aria-label": "Select row" } }}
          >
            {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
}
