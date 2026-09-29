import { createFileRoute, redirect } from "@tanstack/react-router";

/** `/admin/identity` 落到第一个子页（用户）。 */
export const Route = createFileRoute("/admin/identity/")({
  beforeLoad: () => redirect({ to: "/admin/identity/users" }),
  component: () => null,
});
