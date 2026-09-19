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
  Text,
} from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";
import { useCurrentUser } from "@/lib/auth/permissions";
import { getBackendAccountUrl } from "@/lib/runtimeConfig";

export function UserMenu() {
  const { user, logout } = useAuth();
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

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
          {displayName && <Text>{displayName}</Text>}
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <div>
          {displayFullName && (
            <Text weight="medium" block>
              {displayFullName}
            </Text>
          )}
          {displayEmailAddress && (
            <Text size={200} block>
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
          <a href={getBackendAccountUrl("/account/manage")}>
            <Settings20Regular />
            {"我的账户"}
          </a>
        </MenuItem>
        <MenuItem>
          <a href={getBackendAccountUrl("/account/sessions")}>
            <Desktop20Regular />
            {"登录会话"}
          </a>
        </MenuItem>
        <MenuDivider />
        <MenuItem
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
