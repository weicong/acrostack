import {
  SignOut20Regular,
  Settings20Regular,
  Desktop20Regular,
  Person20Regular,
} from "@fluentui/react-icons";
import { useTranslation } from "react-i18next";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuItem,
  MenuDivider,
} from "@fluentui/react-components";
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
    <Menu>
      <MenuTrigger>
        <Button
          appearance="subtle"
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
      </MenuTrigger>
      <MenuPopover>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            padding: "0.375rem 0.5rem",
          }}
        >
          {displayFullName && (
            <p style={{ fontSize: "0.875rem", fontWeight: 500 }}>{displayFullName}</p>
          )}
          {displayEmailAddress && (
            <p style={{ fontSize: "0.75rem", color: "var(--colorNeutralForeground3)" }}>
              {displayEmailAddress}
            </p>
          )}
        </div>
        <MenuDivider />
        <MenuItem>
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
        </MenuItem>
        <MenuItem>
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
        </MenuItem>
        <MenuDivider />
        <MenuItem
          style={{ color: "var(--colorPaletteRedForeground3)" }}
          onSelect={(e) => {
            e.preventDefault();
            void logout();
          }}
        >
          <SignOut20Regular />
          {t("AbpAccount::Logout")}
        </MenuItem>
      </MenuPopover>
    </Menu>
  );
}
