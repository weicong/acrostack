import { createFileRoute } from "@tanstack/react-router";

import { LoginPage } from "@/pages/account/LoginPage";

export const Route = createFileRoute("/account/login")({
  component: LoginPage,
});
