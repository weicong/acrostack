import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
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
    return <ChevronsUpDown className="ml-1 inline h-3.5 w-3.5 opacity-50" />;
  return sort.direction === "asc" ? (
    <ChevronUp className="ml-1 inline h-3.5 w-3.5" />
  ) : (
    <ChevronDown className="ml-1 inline h-3.5 w-3.5" />
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("AbpIdentity::Users")}</h1>
          <p className="mt-1 text-muted-foreground">{t("AbpIdentity::UserDescription")}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex gap-4 items-center flex-wrap">
            <Input
              placeholder={t("AbpIdentity::Search")}
              value={searchDraft}
              onChange={(e) => setSearchDraft(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="max-w-xs"
            />
            <Button variant="outline" size="sm" onClick={handleSearch}>
              {t("AbpIdentity::Search")}
            </Button>
            <div className="ml-auto">
              <Button variant="outline" size="sm">
                {t("Users::ManageUsersAndRoles")}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-muted-foreground">{t("AbpAccount::PleaseWait")}</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  {SORTABLE_COLUMNS.map(({ field, labelKey }) => (
                    <TableHead
                      key={field}
                      className="cursor-pointer select-none"
                      onClick={() => handleSort(field)}
                    >
                      {t(labelKey)}
                      <SortIcon field={field} sort={sort} />
                    </TableHead>
                  ))}
                  <TableHead>{t("AbpIdentity::Status")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.userName}</TableCell>
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
    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
      {t("AbpIdentity::Active")}
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-medium text-red-700">
      {t("AbpIdentity::NotActive")}
    </span>
  );
}
