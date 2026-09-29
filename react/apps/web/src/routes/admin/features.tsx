import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { createPermissionGuard } from "@acrostack/core";

import { FeaturesPage } from "@/pages/features/FeaturesPage";

const POLICY = "AbpFeatureManagement.ManageHostFeatures";

export const Route = createFileRoute("/admin/features")({
  beforeLoad: createPermissionGuard(POLICY),
  component: FeaturesPage,
  staticData: {
    nav: { label: "功能", group: "系统", icon: Sparkles, order: 130, requiredPolicy: POLICY },
  },
});
