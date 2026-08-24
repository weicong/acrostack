/**
 * 功能页（FeaturesPage）助手函数。
 */
import type { VoloAbpFeatureManagementFeatureDto as FeatureDto } from "@/api/models/volo/abp/featureManagement/FeatureDto";

/**
 * 通过 valueType 名称判断是否布尔型特性。
 * ABP 的开关型（ToggleStringValueType）名称为 "TOGGLESTRINGVALUE"。
 */
export function isBooleanFeature(feature: FeatureDto): boolean {
  const name = feature.valueType?.name?.toUpperCase();
  return name === "TOGGLESTRINGVALUE" || name === "BOOLEAN";
}
