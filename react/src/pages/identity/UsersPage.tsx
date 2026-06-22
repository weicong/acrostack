import { useTranslation } from "react-i18next";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, GetRowIdParams, ICellRendererParams } from "ag-grid-enterprise";
import { Avatar, Badge, makeStyles } from "@fluentui/react-components";
import { appUserGetListQueryOptions } from "@/api/hooks/appUser/useAppUserGetList";
import { agGridTheme, useAgGridDatasource } from "@/components/ag-grid";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

type UserItem = AcroStackAppUsersAppUserDto;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    gap: "var(--spacingHorizontalS)",
    marginBlockEnd: "var(--spacingVerticalS)",
    alignItems: "center",
  },
  spacer: {
    flex: 1,
  },
  gridContainer: {
    height: "600px",
    width: "100%",
  },
  userNameCell: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  actionsCell: {
    display: "flex",
    gap: "0.25rem",
  },
});

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

export function UsersPage() {
  const styles = useStyles();
  const { t } = useTranslation();

  const datasource = useAgGridDatasource(appUserGetListQueryOptions);

  const columnDefs: ColDef<UserItem>[] = [
    {
      colId: "UserName",
      field: "userName",
      headerName: t("AbpIdentity::UserName"),
      cellRenderer: (params: ICellRendererParams<UserItem>) => {
        const userName = params.data?.userName ?? "";
        return (
          <div className={styles.userNameCell}>
            <Avatar aria-label={userName} name={userName} size={24} />
            <span>{userName || "-"}</span>
          </div>
        );
      },
    },
    {
      colId: "Name",
      headerName: t("AbpIdentity::DisplayName"),
      valueGetter: (params) => {
        const data = params.data;
        return `${data?.name ?? ""} ${data?.surname ?? ""}`.trim();
      },
      valueFormatter: (params) => (params.value ? String(params.value) : "-"),
    },
    {
      colId: "Email",
      field: "email",
      headerName: t("AbpIdentity::Email"),
      valueFormatter: (params) => (params.value ? String(params.value) : "-"),
    },
    {
      colId: "PhoneNumber",
      field: "phoneNumber",
      headerName: t("AbpIdentity::PhoneNumber"),
      valueFormatter: (params) => (params.value ? String(params.value) : "-"),
    },
    {
      colId: "IsActive",
      field: "isActive",
      headerName: t("AbpIdentity::Status"),
      cellRenderer: (params: ICellRendererParams<UserItem>) => (
        <UserStatusBadge isActive={params.data?.isActive} />
      ),
    },
  ];

  const defaultColDef: ColDef<UserItem> = {
    sortable: true,
    resizable: true,
    suppressMovable: true,
  };

  const getRowId = (params: GetRowIdParams<UserItem>) => params.data.id ?? "";

  return (
    <div className={styles.gridContainer}>
      <AgGridReact<UserItem>
        theme={agGridTheme}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowModelType="serverSide"
        serverSideDatasource={datasource}
        getRowId={getRowId}
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50, 100]}
        initialState={{
          sort: { sortModel: [{ colId: "UserName", sort: "asc" }] },
        }}
      />
    </div>
  );
}
