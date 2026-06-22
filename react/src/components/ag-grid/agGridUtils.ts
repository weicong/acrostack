import type { FilterModel, SortModelItem } from "ag-grid-enterprise";

type SortDirection = "asc" | "desc";

function buildSortingString(sortModel: SortModelItem[]): string {
  return sortModel
    .map((item) => {
      const dir = item.sort === "asc" ? "asc" : "desc";
      return `${item.colId} ${dir}`;
    })
    .join(", ");
}

function buildFilterString(filterModel: FilterModel | null): string | undefined {
  if (!filterModel || Object.keys(filterModel).length === 0) return undefined;
  const parts: string[] = [];
  for (const [colId, filter] of Object.entries(filterModel)) {
    if (!filter) continue;
    if ("filterType" in filter && filter.filterType === "text") {
      const textFilter = filter;
      if (textFilter.type === "contains" && textFilter.filter) {
        parts.push(`${colId} contains "${textFilter.filter}"`);
        continue;
      }
      if (textFilter.type === "startsWith" && textFilter.filter) {
        parts.push(`${colId} startsWith "${textFilter.filter}"`);
        continue;
      }
      if (textFilter.type === "equals" && textFilter.filter) {
        parts.push(`${colId} == "${textFilter.filter}"`);
        continue;
      }
    }
    if ("filterType" in filter && filter.filterType === "number") {
      const numFilter = filter;
      if (numFilter.type === "equals" && numFilter.filter != null) {
        parts.push(`${colId} == ${numFilter.filter}`);
        continue;
      }
      if (numFilter.type === "greaterThan" && numFilter.filter != null) {
        parts.push(`${colId} > ${numFilter.filter}`);
        continue;
      }
      if (numFilter.type === "lessThan" && numFilter.filter != null) {
        parts.push(`${colId} < ${numFilter.filter}`);
        continue;
      }
    }
    if ("filterType" in filter && filter.filterType === "date") {
      const dateFilter = filter;
      if (dateFilter.dateFrom) {
        parts.push(`${colId} >= ${dateFilter.dateFrom}`);
      }
      if (dateFilter.dateTo) {
        parts.push(`${colId} <= ${dateFilter.dateTo}`);
      }
    }
  }
  return parts.length > 0 ? parts.join(" ") : undefined;
}

export { buildSortingString, buildFilterString };
export type { SortDirection };
