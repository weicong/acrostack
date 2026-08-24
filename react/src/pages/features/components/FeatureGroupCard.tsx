/**
 * 功能组卡片：渲染单个功能组的特性列表（布尔型用 Switch，其余用文本 Input）。
 * 编辑值统一存放在父级的 valueMap 中，通过 onValueChange 回写，由父级统一保存。
 */
import { Card, Input, Switch, Text } from "@fluentui/react-components";
import type { VoloAbpFeatureManagementFeatureGroupDto as FeatureGroupDto } from "@/api/models/volo/abp/featureManagement/FeatureGroupDto";
import { isBooleanFeature } from "../utils/features";
import { useFeaturesStyles } from "../styles/features";

interface FeatureGroupCardProps {
  /** 功能组数据。 */
  group: FeatureGroupDto;
  /** 特性名到当前编辑值的映射。 */
  valueMap: Record<string, string>;
  /** 值变化回调。 */
  onValueChange: (name: string, value: string) => void;
}

export function FeatureGroupCard({ group, valueMap, onValueChange }: FeatureGroupCardProps) {
  const styles = useFeaturesStyles();

  return (
    <Card className={styles.groupCard}>
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
                onChange={(_, data) => onValueChange(featureName, data.checked ? "true" : "false")}
                label={feature.displayName || featureName}
              />
            ) : (
              <>
                <Text weight="semibold">{feature.displayName || featureName}</Text>
                <Input
                  value={value}
                  onChange={(_, data) => onValueChange(featureName, data.value)}
                />
                {feature.description && <Text size={200}>{feature.description}</Text>}
              </>
            )}
          </div>
        );
      })}
    </Card>
  );
}
