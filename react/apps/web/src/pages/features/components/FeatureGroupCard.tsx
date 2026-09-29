/**
 * 功能组卡片：渲染单个功能组的特性列表（布尔型用 Switch，其余用文本 Input）。
 * 编辑值统一存放在父级的 valueMap 中，通过 onValueChange 回写，由父级统一保存。
 */
import { Card, CardContent, CardHeader, CardTitle } from "@acrostack/ui/components/card";
import { Field, FieldLabel } from "@acrostack/ui/components/field";
import { Input } from "@acrostack/ui/components/input";
import { Switch } from "@acrostack/ui/components/switch";
import type { VoloAbpFeatureManagementFeatureGroupDto as FeatureGroupDto } from "@acrostack/api-client/models/volo/abp/featureManagement/FeatureGroupDto";
import { isBooleanFeature } from "../utils/features";

interface FeatureGroupCardProps {
  /** 功能组数据。 */
  group: FeatureGroupDto;
  /** 特性名到当前编辑值的映射。 */
  valueMap: Record<string, string>;
  /** 值变化回调。 */
  onValueChange: (name: string, value: string) => void;
}

export function FeatureGroupCard({ group, valueMap, onValueChange }: FeatureGroupCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{group.displayName || group.name || ""}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {(group.features ?? []).map((feature) => {
          const featureName = feature.name ?? "";
          const value = valueMap[featureName] ?? "";
          const isBool = isBooleanFeature(feature);
          const fieldId = `feature-${featureName}`;
          return (
            <div key={featureName}>
              {isBool ? (
                <Field orientation="horizontal">
                  <Switch
                    id={fieldId}
                    checked={value === "true"}
                    onCheckedChange={(checked) =>
                      onValueChange(featureName, checked ? "true" : "false")
                    }
                  />
                  <FieldLabel htmlFor={fieldId}>{feature.displayName || featureName}</FieldLabel>
                </Field>
              ) : (
                <div className="flex flex-col gap-2">
                  <span className="font-medium">{feature.displayName || featureName}</span>
                  <Input
                    value={value}
                    onChange={(e) => onValueChange(featureName, e.target.value)}
                  />
                  {feature.description && (
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
