import { useTranslation } from "react-i18next";
import {
  ChevronUp20Regular,
  ChevronDown20Regular,
  ChevronUpDown20Regular,
} from "@fluentui/react-icons";
import { Button, Card, CardHeader, Input } from "@fluentui/react-components";
import {
  Table as FluentTable,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";
import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";
import { useState } from "react";

type SortDirection = "asc" | "desc";

interface SortState {
  field: string;
  direction: SortDirection;
}

const SORTABLE_COLUMNS: { field: string; labelKey: string }[] = [
  { field: "UserName", labelKey: "AbpIdentity::UserName" },
  { field: "Email", labelKey: "AbpIdentity::Email" },
  { field: "PhoneNumber", labelKey: "AbpIdentity::PhoneNumber" },
  { field: "Name", labelKey: "AbpIdentity::Name" },
];

function SortIcon({ field, sort }: { field: string; sort: SortState | null }) {
  if (!sort || sort.field !== field)
    return <ChevronUpDown20Regular style={{ marginLeft: "0.25rem", opacity: 0.5 }} />;
  return sort.direction === "asc" ? (
    <ChevronUp20Regular style={{ marginLeft: "0.25rem" }} />
  ) : (
    <ChevronDown20Regular style={{ marginLeft: "0.25rem" }} />
  );
}

export function UsersPage() {
  const { t } = useTranslation();

  const [searchDraft, setSearchDraft] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");
  const [sort, setSort] = useState<SortState | null>(null);

  const handleSort = (field: string) => {
    setSort((prev) => {
      if (prev?.field === field) {
        return { field, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { field, direction: "asc" };
    });
  };

  const handleSearch = () => {
    setAppliedFilter(searchDraft);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const { data, isLoading } = useAppUserGetList({
    Filter: appliedFilter || undefined,
    Sorting: sort ? `${sort.field} ${sort.direction}` : undefined,
    SkipCount: 0,
    MaxResultCount: 100,
  });

  const users = data?.items ?? [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: "1.875rem", fontWeight: 700 }}>{t("AbpIdentity::Users")}</h1>
          <p style={{ marginTop: "0.25rem", color: "var(--colorNeutralForeground3)" }}>
            {t("AbpIdentity::UserDescription")}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader
          header={
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
              <Input
                placeholder={t("AbpIdentity::Search")}
                value={searchDraft}
                onChange={(e) => setSearchDraft(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
              <Button appearance="outline" size="small" onClick={handleSearch}>
                {t("AbpIdentity::Search")}
              </Button>
              <div style={{ marginLeft: "auto" }}>
                <Button appearance="outline" size="small">
                  {t("Users::ManageUsersAndRoles")}
                </Button>
              </div>
            </div>
          }
        />
        <div style={{ padding: "0 1.5rem 1.5rem" }}>
          {isLoading ? (
            <p style={{ color: "var(--colorNeutralForeground3)" }}>{t("AbpAccount::PleaseWait")}</p>
          ) : (
            <div style={{ width: "100%", overflowX: "auto" }}>
              <FluentTable>
                <TableHeader>
                  <TableRow>
                    {SORTABLE_COLUMNS.map(({ field, labelKey }) => (
                      <TableHeaderCell
                        key={field}
                        style={{ cursor: "pointer", userSelect: "none" }}
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => handleSort(field)}
                          onKeyDown={(e) => e.key === "Enter" && handleSort(field)}
                          style={{ display: "inline-flex", alignItems: "center" }}
                        >
                          {t(labelKey)}
                          <SortIcon field={field} sort={sort} />
                        </div>
                      </TableHeaderCell>
                    ))}
                    <TableHeaderCell>{t("AbpIdentity::Status")}</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.userName}</TableCell>
                      <TableCell>{user.email ?? "-"}</TableCell>
                      <TableCell>{user.phoneNumber ?? "-"}</TableCell>
                      <TableCell>
                        {`${user.name ?? ""} ${user.surname ?? ""}`.trim() || "-"}
                      </TableCell>
                      <TableCell>
                        <UserStatusBadge user={user} t={t} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </FluentTable>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function UserStatusBadge({
  user,
  t,
}: {
  user: AcroStackAppUsersAppUserDto;
  t: (key: string) => string;
}) {
  return user.isActive !== false ? (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "9999px",
        background: "#dcfce7",
        padding: "0.125rem 0.5rem",
        fontSize: "0.625rem",
        fontWeight: 500,
        color: "#15803d",
      }}
    >
      {t("AbpIdentity::Active")}
    </span>
  ) : (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "9999px",
        background: "#fee2e2",
        padding: "0.125rem 0.5rem",
        fontSize: "0.625rem",
        fontWeight: 500,
        color: "#b91c1c",
      }}
    >
      {t("AbpIdentity::NotActive")}
    </span>
  );
}
