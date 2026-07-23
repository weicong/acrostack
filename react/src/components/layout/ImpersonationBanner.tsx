import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, makeStyles, tokens, Text } from "@fluentui/react-components";
import { PersonArrowBack20Regular } from "@fluentui/react-icons";
import { useImpersonationState, backToMyAccount } from "@/lib/auth/impersonation";
import { useCurrentUser } from "@/lib/auth/permissions";

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
  const { t } = useTranslation();
  const state = useImpersonationState();
  const currentUser = useCurrentUser();
  const [isRestoring, setIsRestoring] = useState(false);
  const styles = useStyles();

  if (!state.isImpersonating) return null;

  const impersonatedAs = currentUser?.userName ?? currentUser?.name ?? t("AbpAccount::User");

  const impersonatorLabel =
    state.impersonatorUserName ??
    (state.impersonatorTenantId ? t("AbpTenantManagement::Tenant") : t("AbpAccount::User"));

  // AbpAccount::BackToMyAccount = "Back to: {0}" — names the impersonator.
  const message = t("AbpAccount::BackToMyAccount", {
    impersonator: impersonatorLabel,
    impersonated: impersonatedAs,
  });

  async function handleBack() {
    setIsRestoring(true);
    try {
      await backToMyAccount();
    } catch (err) {
      console.error("[impersonation] back to my account failed:", err);
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
        {t("AbpAccount::BackToImpersonator")}
      </Button>
    </div>
  );
}
