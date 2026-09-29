import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/account/")({
  beforeLoad: () => redirect({ to: "/account/login" }),
  component: () => null,
});
