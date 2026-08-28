import { useState } from "react";

import { Button, makeStyles, tokens, Text, useToastController } from "@fluentui/react-components";
import { PersonArrowBack20Regular } from "@fluentui/react-icons";
import { backToMyAccount } from "@/lib/auth/impersonation";
import { useCurrentUser } from "@/lib/auth/permissions";

interface ImpersonationState {
  isImpersonating: boolean;
  impersonatorUserId?: string;
  impersonatorTenantId?: string;
  impersonatorUserName?: string;
}

/**
 * Derives the current impersonation state from the ABP
 * application-configuration currentUser section, which ABP populates from
 * the JWT's impersonator claims on the server side.
 */
function useImpersonationState(): ImpersonationState {
  const currentUser = useCurrentUser();
  if (!currentUser) return { isImpersonating: false };

  const impersonatorUserId = currentUser.impersonatorUserId ?? undefined;
  const impersonatorTenantId = currentUser.impersonatorTenantId ?? undefined;
  if (!impersonatorUserId && !impersonatorTenantId) {
    return { isImpersonating: false };
  }
  return {
    isImpersonating: true,
    impersonatorUserId,
    impersonatorTenantId,
    impersonatorUserName: currentUser.impersonatorUserName ?? undefined,
  };
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalL}`,
    background: tokens.colorPaletteDarkOrangeBackground2,
    color: tokens.colorPaletteDarkOrangeForeground1,
    borderBottom: `1px solid ${tokens.colorPaletteDarkOrangeBorder2}`,
  },
  message: {
    flex: 1,
    minWidth: 0,
  },
});

/**
 * Banner shown across the app while the current session is an impersonated
 * one. Provides a "Back to my account" action that restores the original
 * admin session via {@link backToMyAccount}.
 */
export function ImpersonationBanner() {
  const state = useImpersonationState();
  const { dispatchToast } = useToastController();
  const [isRestoring, setIsRestoring] = useState(false);
  const styles = useStyles();

  if (!state.isImpersonating) return null;

  const impersonatorLabel =
    state.impersonatorUserName ?? (state.impersonatorTenantId ? "租户" : "用户");

  const message = `返回 ${impersonatorLabel} 的账户`;

  async function handleBack() {
    setIsRestoring(true);
    try {
      await backToMyAccount();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[impersonation] back to my account failed:", err);
      dispatchToast(msg, { intent: "error" });
      setIsRestoring(false);
    }
  }

  return (
    <div className={styles.root} role="status" aria-live="polite">
      <Text className={styles.message} size={200}>
        {message}
      </Text>
      <Button
        size="small"
        appearance="primary"
        icon={<PersonArrowBack20Regular />}
        onClick={() => void handleBack()}
        disabled={isRestoring}
      >
        {"返回原账户"}
      </Button>
    </div>
  );
}
