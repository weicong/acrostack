import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

/**
 * Minimal layout for account pages (login, register, forgot/reset password).
 * Centered card without sidebar.
 */
export function AccountLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">{children}</div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Button variant="link" className="h-auto p-0" asChild>
          <Link to="/">{t("AbpUi::BackToTheApplication")}</Link>
        </Button>
      </p>
    </div>
  );
}
