import {
  Desktop20Regular,
  PersonInfo20Regular,
  Settings20Regular,
  SignOut20Regular,
} from "@fluentui/react-icons";
import { useNavigate } from "@tanstack/react-router";
import {
  Avatar,
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";
import { useCurrentUser } from "@/lib/auth/permissions";
import { getBackendAccountUrl } from "@/lib/runtimeConfig";

const useStyles = makeStyles({
  // 用户名过长时截断，避免把顶栏撑开
  triggerText: {
    maxWidth: "180px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  // 菜单顶部的身份区：与菜单项左内边距对齐
  account: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXS),
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalM),
  },
});

/** 账户菜单：展示当前身份，并提供个人信息、账户安全、登录会话与退出登录。 */
export function UserMenu() {
  const styles = useStyles();
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
  const displayFullName = currentUser?.name ?? user?.name ?? displayName ?? "用户";
  const displayEmailAddress = currentUser?.email ?? user?.email;

  return (
    <Menu>
      <MenuTrigger>
        <Button appearance="subtle" aria-label={`账户菜单：${displayFullName}`}>
          <Avatar name={displayFullName} size={24} color="colorful" />
          {displayName && (
            <Text className={styles.triggerText} weight="medium">
              {displayName}
            </Text>
          )}
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <div className={styles.account}>
            <Text weight="semibold">{displayFullName}</Text>
            {displayEmailAddress && displayEmailAddress !== displayFullName && (
              <Text size={200}>{displayEmailAddress}</Text>
            )}
          </div>
          <MenuDivider />
          <MenuItem
            icon={<PersonInfo20Regular />}
            onClick={() => void navigate({ to: "/admin/profile" })}
          >
            个人信息
          </MenuItem>
          <MenuItem
            icon={<Settings20Regular />}
            onClick={() => window.location.assign(getBackendAccountUrl("/account/manage"))}
          >
            账户安全
          </MenuItem>
          <MenuItem
            icon={<Desktop20Regular />}
            onClick={() => window.location.assign(getBackendAccountUrl("/account/sessions"))}
          >
            登录会话
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<SignOut20Regular />} onClick={() => void logout()}>
            退出登录
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
