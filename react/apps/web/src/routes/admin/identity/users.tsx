import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { createPermissionGuard } from "@workspace/core";

import { UsersPage } from "@/pages/identity/users/UsersPage";

const POLICY = "AbpIdentity.Users";

export const Route = createFileRoute("/admin/identity/users")({
  beforeLoad: createPermissionGuard(POLICY),
  component: UsersPage,
  staticData: {
    nav: { label: "用户", group: "系统", icon: User, order: 1, requiredPolicy: POLICY },
  },
});
