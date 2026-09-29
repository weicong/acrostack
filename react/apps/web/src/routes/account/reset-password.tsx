import { createFileRoute } from "@tanstack/react-router";

import { ResetPasswordPage } from "@/pages/account/ResetPasswordPage";

export const Route = createFileRoute("/account/reset-password")({
  component: ResetPasswordPage,
});
