import { createFileRoute } from "@tanstack/react-router";
import { UserX } from "lucide-react";
import { createPermissionGuard } from "@workspace/core";

import { ImpersonationSessionsPage } from "@/pages/identity/impersonation-sessions/ImpersonationSessionsPage";

const POLICY = "AbpIdentity.Users.ManageImpersonationSessions";

export const Route = createFileRoute("/admin/identity/impersonation-sessions")({
  beforeLoad: createPermissionGuard(POLICY),
  component: ImpersonationSessionsPage,
  staticData: {
    nav: { label: "模拟登录记录", group: "系统", icon: UserX, order: 4, requiredPolicy: POLICY },
  },
});
