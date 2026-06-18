import { TableCellLayout, createTableColumn } from "@fluentui/react-components";
import type { TableColumnDefinition } from "@fluentui/react-components";
import { bookTypeOptions, type BookDto } from "@/lib/api/books";

export const columns: TableColumnDefinition<BookDto>[] = [
  createTableColumn<BookDto>({
    columnId: "name",
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => "Name",
    renderCell: (item) => <TableCellLayout truncate>{item.name}</TableCellLayout>,
  }),
  createTableColumn<BookDto>({
    columnId: "type",
    compare: (a, b) => a.type - b.type,
    renderHeaderCell: () => "Type",
    renderCell: (item) => {
      const label = bookTypeOptions.find((o) => o.value === item.type)?.key ?? "";
      return <TableCellLayout truncate>{label}</TableCellLayout>;
    },
  }),
  createTableColumn<BookDto>({
    columnId: "publishDate",
    compare: (a, b) => a.publishDate.localeCompare(b.publishDate),
    renderHeaderCell: () => "Publish Date",
    renderCell: (item) => (
      <TableCellLayout truncate>{item.publishDate?.slice(0, 10)}</TableCellLayout>
    ),
  }),
  createTableColumn<BookDto>({
    columnId: "price",
    compare: (a, b) => a.price - b.price,
    renderHeaderCell: () => "Price",
    renderCell: (item) => <TableCellLayout truncate>{item.price}</TableCellLayout>,
  }),
  createTableColumn<BookDto>({
    columnId: "creationTime",
    compare: (a, b) => a.creationTime.localeCompare(b.creationTime),
    renderHeaderCell: () => "Created",
    renderCell: (item) => (
      <TableCellLayout truncate>{item.creationTime?.slice(0, 10)}</TableCellLayout>
    ),
  }),
];
