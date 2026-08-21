import {
  SignOut20Regular,
  Settings20Regular,
  Desktop20Regular,
  Person20Regular,
  PersonInfo20Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "@tanstack/react-router";
import {
  Button,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuItem,
  MenuDivider,
  makeStyles,
  tokens,
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
    gap: tokens.spacingVerticalXXS,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalS}`,
  },
  email: {
    color: tokens.colorNeutralForeground3,
  },
  menuLink: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    textDecoration: "none",
    color: "inherit",
  },
  logoutItem: {
    color: tokens.colorPaletteRedForeground3,
  },
});

export function UserMenu() {
  const { user, logout } = useAuth();
  const currentUser = useCurrentUser();
  const navigate = useNavigate();
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
          aria-label={displayName ?? "我的账户"}
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
        <MenuItem
          onClick={() => {
            void navigate({ to: "/admin/profile" });
          }}
        >
          <PersonInfo20Regular />
          {" 个人信息"}
        </MenuItem>
        <MenuItem>
          <a href={getBackendAccountUrl("/account/manage")} className={styles.menuLink}>
            <Settings20Regular />
            {"我的账户"}
          </a>
        </MenuItem>
        <MenuItem>
          <a href={getBackendAccountUrl("/account/sessions")} className={styles.menuLink}>
            <Desktop20Regular />
            {"登录会话"}
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
          {"退出登录"}
        </MenuItem>
      </MenuPopover>
    </Menu>
  );
}
