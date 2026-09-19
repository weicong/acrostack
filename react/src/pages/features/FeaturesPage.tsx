/**
 * 功能页（FeaturesPage）。
 *
 * 本文件只负责编排：功能组卡片列表与底部保存/重置动作；
 * 卡片渲染见 components/FeatureGroupCard，保存/重置动作见 hooks/useFeatureActions，
 * 助手见 utils/features。
 */
import { useEffect, useMemo, useState } from "react";
import { Button, Spinner, Text } from "@fluentui/react-components";
import { PageLayout } from "@/components/layout/PageLayout";
import { useFeaturesGet } from "@/api/hooks/features/useFeaturesGet";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { FeatureGroupCard } from "./components/FeatureGroupCard";
import { useFeatureActions } from "./hooks/useFeatureActions";

export function FeaturesPage() {
  // 宿主级功能（不指定提供者）
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

  const { saveFeatures, resetFeatures, isSaving, isResetting } = useFeatureActions({
    originalMap,
    valueMap,
    onResetSuccess: () => setResetOpen(false),
  });

  return (
    <PageLayout title={"功能"}>
      {featuresQuery.isLoading && <Spinner label={"加载中..."} />}

      {featuresQuery.isError && <Text>{"没有任何可用的功能。"}</Text>}

      {featuresQuery.data && groups.length === 0 && <Text>{"没有任何可用的功能。"}</Text>}

      {featuresQuery.data && groups.length > 0 && (
        <>
          {groups.map((group) => (
            <FeatureGroupCard
              key={group.name}
              group={group}
              valueMap={valueMap}
              onValueChange={handleValueChange}
            />
          ))}

          <Button onClick={() => setResetOpen(true)}>{"重置为默认值"}</Button>
          <Button appearance="primary" onClick={() => void saveFeatures()} disabled={isSaving}>
            {"保存"}
          </Button>
        </>
      )}

      <ConfirmDialog
        open={resetOpen}
        onOpenChange={setResetOpen}
        title={"你确定吗？"}
        description={"您确定要重置为默认设置吗？"}
        confirmLabel={"重置为默认值"}
        variant="destructive"
        onConfirm={() => void resetFeatures()}
        isPending={isResetting}
      />
    </PageLayout>
  );
}
