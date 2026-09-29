import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { createPermissionGuard } from "@acrostack/core";

import { RolesPage } from "@/pages/identity/roles/RolesPage";

const POLICY = "AbpIdentity.Roles";

export const Route = createFileRoute("/admin/identity/roles")({
  beforeLoad: createPermissionGuard(POLICY),
  component: RolesPage,
  staticData: {
    nav: { label: "角色", group: "系统", icon: Users, order: 2, requiredPolicy: POLICY },
  },
});
