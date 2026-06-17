import {
  Table as FluentTable,
  TableHeader as FluentTableHeader,
  TableBody as FluentTableBody,
  TableRow as FluentTableRow,
  TableCell as FluentTableCell,
  TableHeaderCell as FluentTableHeaderCell,
  type TableProps as FluentTableProps,
} from "@fluentui/react-components";
import { forwardRef } from "react";

export const Table = forwardRef<HTMLTableElement, FluentTableProps & { className?: string }>(
  ({ className: _className, ...props }, ref) => (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <FluentTable ref={ref} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

export const TableHeader = FluentTableHeader;
export const TableBody = FluentTableBody;
export const TableRow = FluentTableRow;
export const TableHead = FluentTableHeaderCell;
export const TableCell = FluentTableCell;
