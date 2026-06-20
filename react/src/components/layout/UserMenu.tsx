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
  makeStyles,
  Text,
} from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";
import { useCurrentUser } from "@/lib/auth/permissions";
import { getBackendAccountUrl } from "@/lib/runtimeConfig";

const useStyles = makeStyles({
  userName: {
    maxWidth: "8rem",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    padding: "0.375rem 0.5rem",
  },
  email: {
    color: "var(--colorNeutralForeground3)",
  },
  menuLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    color: "inherit",
  },
  logoutItem: {
    color: "var(--colorPaletteRedForeground3)",
  },
});

export function UserMenu() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const currentUser = useCurrentUser();
  const styles = useStyles();

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
            <Text truncate className={styles.userName}>
              {displayName}
            </Text>
          )}
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <div className={styles.userInfo}>
          {displayFullName && (
            <Text weight="medium" block>
              {displayFullName}
            </Text>
          )}
          {displayEmailAddress && (
            <Text size={200} className={styles.email} block>
              {displayEmailAddress}
            </Text>
          )}
        </div>
        <MenuDivider />
        <MenuItem>
          <a href={getBackendAccountUrl("/account/manage")} className={styles.menuLink}>
            <Settings20Regular />
            {t("AbpAccount::MyAccount")}
          </a>
        </MenuItem>
        <MenuItem>
          <a href={getBackendAccountUrl("/account/sessions")} className={styles.menuLink}>
            <Desktop20Regular />
            {t("AbpAccount::Sessions")}
          </a>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          className={styles.logoutItem}
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
