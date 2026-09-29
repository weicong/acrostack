import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { createPermissionGuard } from "@acrostack/core";

import { SettingsPage } from "@/pages/settings/SettingsPage";

const POLICY = "AbpSettingManagement.Emailing";

export const Route = createFileRoute("/admin/settings")({
  beforeLoad: createPermissionGuard(POLICY),
  component: SettingsPage,
  staticData: {
    nav: { label: "设置", group: "系统", icon: Settings, order: 160, requiredPolicy: POLICY },
  },
});
