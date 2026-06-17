import {
  SignOut20Regular,
  Settings20Regular,
  Desktop20Regular,
  Person20Regular,
} from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/AuthContext";
import { useCurrentUser } from "@/lib/auth/permissions";
import { getBackendAccountUrl } from "@/lib/runtimeConfig";

export function UserMenu() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const currentUser = useCurrentUser();

  const displayName =
    currentUser?.userName ??
    currentUser?.name ??
    user?.userName ??
    user?.name ??
    user?.email ??
    null;
  const displayFullName = currentUser?.name ?? user?.name ?? displayName;
  const displayEmailAddress = currentUser?.email ?? user?.email;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="subtle"
          icon={<Person20Regular />}
          aria-label={displayName ?? t("AbpAccount::MyAccount")}
        >
          {displayName && (
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "8rem",
                fontSize: "0.875rem",
              }}
            >
              {displayName}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {displayFullName && (
              <p style={{ fontSize: "0.875rem", fontWeight: 500 }}>{displayFullName}</p>
            )}
            {displayEmailAddress && (
              <p style={{ fontSize: "0.75rem", color: "var(--colorNeutralForeground3)" }}>
                {displayEmailAddress}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a
            href={getBackendAccountUrl("/account/manage")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Settings20Regular />
            {t("AbpAccount::MyAccount")}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href={getBackendAccountUrl("/account/sessions")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Desktop20Regular />
            {t("AbpAccount::Sessions")}
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          style={{ color: "var(--colorPaletteRedForeground3)" }}
          onSelect={(e) => {
            e.preventDefault();
            void logout();
          }}
        >
          <SignOut20Regular />
          {t("AbpAccount::Logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
