import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import {
  ChevronUp20Regular,
  ChevronDown20Regular,
  ChevronUpDown20Regular,
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAppUsers, type AppUserDto, type GetAppUsersInput } from "@/lib/api/appUsers";
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

  const queryParams: GetAppUsersInput = {
    maxResultCount: 100,
    skipCount: 0,
    filter: appliedFilter || undefined,
    sorting: sort ? `${sort.field} ${sort.direction}` : undefined,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["app", "users", queryParams],
    queryFn: () => getAppUsers(queryParams),
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
        <CardHeader>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <Input
              placeholder={t("AbpIdentity::Search")}
              value={searchDraft}
              onChange={(e) => setSearchDraft(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
            <Button variant="outline" size="small" onClick={handleSearch}>
              {t("AbpIdentity::Search")}
            </Button>
            <div style={{ marginLeft: "auto" }}>
              <Button variant="outline" size="small">
                {t("Users::ManageUsersAndRoles")}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p style={{ color: "var(--colorNeutralForeground3)" }}>{t("AbpAccount::PleaseWait")}</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  {SORTABLE_COLUMNS.map(({ field, labelKey }) => (
                    <TableHead key={field} style={{ cursor: "pointer", userSelect: "none" }}>
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
                    </TableHead>
                  ))}
                  <TableHead>{t("AbpIdentity::Status")}</TableHead>
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
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function UserStatusBadge({ user, t }: { user: AppUserDto; t: (key: string) => string }) {
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
