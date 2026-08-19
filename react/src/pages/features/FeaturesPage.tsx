import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Card,
  Input,
  Spinner,
  Switch,
  Text,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { PageLayout } from "@/components/layout/PageLayout";
import { useFeaturesGet, featuresGetQueryKey } from "@/api/hooks/features/useFeaturesGet";
import { useFeaturesUpdate } from "@/api/hooks/features/useFeaturesUpdate";
import { useFeaturesDelete } from "@/api/hooks/features/useFeaturesDelete";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import type { VoloAbpFeatureManagementFeatureDto } from "@/api/models/volo/abp/featureManagement/FeatureDto";

const useStyles = makeStyles({
  groups: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  groupCard: {
    padding: tokens.spacingHorizontalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  groupTitle: {
    marginBottom: tokens.spacingVerticalXXS,
  },
  featureRow: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalM,
  },
  leftActions: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
});

/**
 * Determine if a feature is boolean by inspecting the valueType name.
 * ABP's ToggleStringValueType uses "TOGGLESTRINGVALUE" as the name.
 */
function isBooleanFeature(feature: VoloAbpFeatureManagementFeatureDto): boolean {
  const name = feature.valueType?.name?.toUpperCase();
  return name === "TOGGLESTRINGVALUE" || name === "BOOLEAN";
}

export function FeaturesPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const updateMutation = useFeaturesUpdate();
  const deleteMutation = useFeaturesDelete();

  // Host-level features (no provider).
  const featuresQuery = useFeaturesGet();

  const [valueMap, setValueMap] = useState<Record<string, string>>({});
  const [resetOpen, setResetOpen] = useState(false);

  useEffect(() => {
    const map: Record<string, string> = {};
    for (const group of featuresQuery.data?.groups ?? []) {
      for (const feature of group.features ?? []) {
        if (feature.name) map[feature.name] = feature.value ?? "";
      }
    }
    setValueMap(map);
  }, [featuresQuery.data]);

  const groups = featuresQuery.data?.groups ?? [];

  const originalMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const group of groups) {
      for (const feature of group.features ?? []) {
        if (feature.name) map[feature.name] = feature.value ?? "";
      }
    }
    return map;
  }, [groups]);

  const handleValueChange = (name: string, value: string) => {
    setValueMap((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const changedFeatures = Object.entries(valueMap)
      .filter(([name, value]) => originalMap[name] !== value)
      .map(([name, value]) => ({ name, value }));

    if (changedFeatures.length === 0) {
      dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "info" });
      return;
    }

    updateMutation.mutate(
      { body: { features: changedFeatures } },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: featuresGetQueryKey() });
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  const handleReset = () => {
    deleteMutation.mutate(
      {},
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: featuresGetQueryKey() });
          setResetOpen(false);
          dispatchToast(t("AbpFeatureManagement::ResetedToDefault"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  return (
    <PageLayout title={t("AbpFeatureManagement::Features")}>
      {featuresQuery.isLoading && <Spinner label={t("AbpUi::LoadingWithThreeDot")} />}

      {featuresQuery.isError && <Text>{t("AbpFeatureManagement::NoFeatureFoundMessage")}</Text>}

      {featuresQuery.data && groups.length === 0 && (
        <Text>{t("AbpFeatureManagement::NoFeatureFoundMessage")}</Text>
      )}

      {featuresQuery.data && groups.length > 0 && (
        <>
          <div className={styles.groups}>
            {groups.map((group) => (
              <Card key={group.name} className={styles.groupCard}>
                <Text as="h2" size={500} weight="semibold" className={styles.groupTitle}>
                  {group.displayName || group.name}
                </Text>
                {(group.features ?? []).map((feature) => {
                  const featureName = feature.name ?? "";
                  const value = valueMap[featureName] ?? "";
                  const isBool = isBooleanFeature(feature);
                  return (
                    <div key={featureName} className={styles.featureRow}>
                      {isBool ? (
                        <Switch
                          checked={value === "true"}
                          onChange={(_, data) =>
                            handleValueChange(featureName, data.checked ? "true" : "false")
                          }
                          label={feature.displayName || featureName}
                        />
                      ) : (
                        <>
                          <Text weight="semibold">{feature.displayName || featureName}</Text>
                          <Input
                            value={value}
                            onChange={(_, data) => handleValueChange(featureName, data.value)}
                          />
                          {feature.description && <Text size={200}>{feature.description}</Text>}
                        </>
                      )}
                    </div>
                  );
                })}
              </Card>
            ))}
          </div>

          <div className={styles.actions}>
            <div className={styles.leftActions}>
              <Button onClick={() => setResetOpen(true)}>
                {t("AbpFeatureManagement::ResetToDefault")}
              </Button>
            </div>
            <Button appearance="primary" onClick={handleSave} disabled={updateMutation.isPending}>
              {t("AbpUi::Save")}
            </Button>
          </div>
        </>
      )}

      <ConfirmDialog
        open={resetOpen}
        onOpenChange={setResetOpen}
        title={t("AbpFeatureManagement::AreYouSure")}
        description={t("AbpFeatureManagement::AreYouSureToResetToDefault")}
        confirmLabel={t("AbpFeatureManagement::ResetToDefault")}
        variant="destructive"
        onConfirm={handleReset}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
