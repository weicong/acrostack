import { createFileRoute } from "@tanstack/react-router";

import { ForbiddenPage } from "@/pages/forbidden/ForbiddenPage";

export const Route = createFileRoute("/admin/403")({
  component: ForbiddenPage,
  staticData: {
    breadcrumb: { label: "无权访问" },
  },
});
