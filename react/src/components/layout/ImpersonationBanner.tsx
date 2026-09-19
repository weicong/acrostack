import { useState } from "react";

import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  Text,
  useToastController,
} from "@fluentui/react-components";
import { PersonArrowBack20Regular } from "@fluentui/react-icons";
import { backToMyAccount } from "@/lib/auth/impersonation";
import { useCurrentUser } from "@/lib/auth/permissions";

interface ImpersonationState {
  isImpersonating: boolean;
  impersonatorUserName?: string;
}

/**
 * Derives the current impersonation state from the ABP
 * application-configuration currentUser section, which ABP populates from
 * the JWT's impersonator claims on the server side.
 */
function useImpersonationState(): ImpersonationState {
  const currentUser = useCurrentUser();
  if (!currentUser?.impersonatorUserId) {
    return { isImpersonating: false };
  }

  return {
    isImpersonating: true,
    impersonatorUserName: currentUser.impersonatorUserName ?? undefined,
  };
}

/**
 * Banner shown across the app while the current session is an impersonated
 * one. Provides a "Back to my account" action that restores the original
 * admin session via {@link backToMyAccount}.
 */
export function ImpersonationBanner() {
  const state = useImpersonationState();
  const { dispatchToast } = useToastController();
  const [isRestoring, setIsRestoring] = useState(false);

  if (!state.isImpersonating) return null;

  const impersonatorLabel = state.impersonatorUserName ?? "管理员";
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
    <MessageBar intent="warning">
      <MessageBarBody>
        <Text>{message}</Text>
      </MessageBarBody>
      <MessageBarActions>
        <Button
          size="small"
          appearance="primary"
          icon={<PersonArrowBack20Regular />}
          onClick={() => void handleBack()}
          disabled={isRestoring}
        >
          {"返回原账户"}
        </Button>
      </MessageBarActions>
    </MessageBar>
  );
}
