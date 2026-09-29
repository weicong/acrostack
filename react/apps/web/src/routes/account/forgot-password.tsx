import { createFileRoute } from "@tanstack/react-router";

import { ForgotPasswordPage } from "@/pages/account/ForgotPasswordPage";

export const Route = createFileRoute("/account/forgot-password")({
  component: ForgotPasswordPage,
});
