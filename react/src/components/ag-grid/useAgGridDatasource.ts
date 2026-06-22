import { useMemo, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { IServerSideDatasource, IServerSideGetRowsParams } from "ag-grid-enterprise";
import { buildSortingString } from "./agGridUtils";

interface AbpGridParams {
  Filter?: string;
  Sorting?: string;
  SkipCount?: number;
  MaxResultCount?: number;
}

function useAgGridDatasource<TParams extends AbpGridParams>(
  queryOptions: (params?: TParams, config?: any) => any,
  extraParams?: Partial<TParams>,
): IServerSideDatasource {
  const queryClient = useQueryClient();
  const extraParamsRef = useRef(extraParams);
  extraParamsRef.current = extraParams;

  return useMemo<IServerSideDatasource>(
    () => ({
      getRows: async (gridParams: IServerSideGetRowsParams) => {
        try {
          const params = {
            ...extraParamsRef.current,
            Sorting: buildSortingString(gridParams.request.sortModel),
            SkipCount: gridParams.request.startRow ?? 0,
            MaxResultCount: (gridParams.request.endRow ?? 0) - (gridParams.request.startRow ?? 0),
          } as TParams;

          const options = queryOptions(params);
          const data: any = await queryClient.fetchQuery(options);
          gridParams.success({
            rowData: data.items ?? [],
            rowCount: Number(data.totalCount ?? 0n),
          });
        } catch {
          gridParams.fail();
        }
      },
    }),
    [queryClient, queryOptions],
  );
}

export { useAgGridDatasource };
export type { AbpGridParams };
