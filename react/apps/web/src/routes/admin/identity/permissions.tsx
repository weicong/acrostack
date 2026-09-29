import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { createPermissionGuard } from "@workspace/core";

import { PermissionsPage } from "@/pages/identity/permissions/PermissionsPage";

const POLICY = "AbpIdentity.Roles";

export const Route = createFileRoute("/admin/identity/permissions")({
  beforeLoad: createPermissionGuard(POLICY),
  component: PermissionsPage,
  staticData: {
    nav: { label: "权限", group: "系统", icon: Shield, order: 3, requiredPolicy: POLICY },
  },
});
