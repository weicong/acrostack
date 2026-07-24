import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardHeader,
  CardPreview,
  makeStyles,
  Text,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  ArrowDownload20Regular,
  PersonDelete20Regular,
  Document20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { userManager } from "@/lib/auth/userManager";
import { exportMyData, useDeleteMyAccount } from "@/lib/gdpr/gdprApi";

const useStyles = makeStyles({
  card: {
    marginBottom: tokens.spacingVerticalM,
  },
  cardHeader: {
    alignItems: "flex-start",
  },
  description: {
    color: tokens.colorNeutralForeground3,
    marginTop: tokens.spacingVerticalXS,
    display: "block",
  },
  actions: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalS,
  },
});

export function GdprPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const { dispatchToast } = useToastController();
  const deleteMutation = useDeleteMyAccount();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useCallback(async () => {
    setIsExporting(true);
    try {
      await exportMyData();
      dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
    } catch (err) {
      dispatchToast(String(err), { intent: "error" });
    } finally {
      setIsExporting(false);
    }
  }, [dispatchToast, t]);

  const handleDeleteConfirm = useCallback(() => {
    deleteMutation.mutate(undefined, {
      onSuccess: async () => {
        // Sign the user out after account deletion.
        try {
          await userManager.signoutRedirect();
        } catch {
          window.location.replace("/account/login");
        }
      },
      onError: (err) => {
        dispatchToast(String(err), { intent: "error" });
        setConfirmDelete(false);
      },
    });
  }, [deleteMutation, dispatchToast]);

  return (
    <PageLayout title={t("Gdpr:Title")}>
      <Card className={styles.card}>
        <CardPreview>
          <div style={{ padding: tokens.spacingHorizontalM }}>
            <Document20Regular fontSize={28} />
          </div>
        </CardPreview>
        <CardHeader
          header={<Text weight="semibold">{t("Gdpr:ExportMyData")}</Text>}
          description={<span className={styles.description}>{t("Gdpr:ExportDescription")}</span>}
          className={styles.cardHeader}
        />
        <div className={styles.actions}>
          <Button
            appearance="primary"
            icon={<ArrowDownload20Regular />}
            onClick={handleExport}
            disabled={isExporting}
          >
            {t("Gdpr:ExportMyData")}
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <CardPreview>
          <div style={{ padding: tokens.spacingHorizontalM }}>
            <PersonDelete20Regular fontSize={28} />
          </div>
        </CardPreview>
        <CardHeader
          header={<Text weight="semibold">{t("Gdpr:DeleteMyAccount")}</Text>}
          description={<span className={styles.description}>{t("Gdpr:DeleteDescription")}</span>}
          className={styles.cardHeader}
        />
        <div className={styles.actions}>
          <Button
            appearance="primary"
            icon={<PersonDelete20Regular />}
            onClick={() => setConfirmDelete(true)}
          >
            {t("Gdpr:DeleteMyAccount")}
          </Button>
        </div>
      </Card>

      <ConfirmDialog
        open={confirmDelete}
        onOpenChange={setConfirmDelete}
        title={t("Gdpr:DeleteMyAccount")}
        description={t("Gdpr:DeleteConfirmation")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
