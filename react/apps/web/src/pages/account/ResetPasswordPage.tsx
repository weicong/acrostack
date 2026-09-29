import { Link } from "@tanstack/react-router";

import { z } from "zod";
import { Alert, AlertDescription } from "@acrostack/ui/components/alert";
import { Button } from "@acrostack/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acrostack/ui/components/card";
import { accountResetPassword } from "@acrostack/api-client/clients/account/accountResetPassword";
import { FormActions, FormStack, useAppForm } from "@acrostack/ui/form";
import { extractAbpErrorMessage } from "@acrostack/core";
import { useState } from "react";

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "密码长度必须至少为 6 个字符"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  });

export function ResetPasswordPage() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const userId = params.get("userId") ?? params.get("cid") ?? "";
  const resetToken =
    params.get("resetToken") ?? params.get("token") ?? params.get("resetCode") ?? "";
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: { password: "", confirmPassword: "" },
    validators: {
      onChange: resetPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountResetPassword({
          body: {
            userId,
            resetToken,
            password: value.password,
          },
        });
        window.location.href = "/account/login";
      } catch (err) {
        setRootError(extractAbpErrorMessage(err));
      }
    },
  });

  const isInvalidLink = !userId || !resetToken;

  if (isInvalidLink) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>重置密码</CardTitle>
          <CardDescription>此密码重置链接无效或已过期。</CardDescription>
        </CardHeader>
        <CardContent>
          <Button render={<Link to="/account/forgot-password" />} nativeButton={false}>
            {"发送重置密码邮件"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>重置密码</CardTitle>
        <CardDescription>请输入您的新密码。</CardDescription>
      </CardHeader>
      <CardContent>
        <FormStack
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          {rootError && (
            <Alert variant="destructive">
              <AlertDescription>{rootError}</AlertDescription>
            </Alert>
          )}
          <form.AppField
            name="password"
            children={(field) => (
              <field.TextField
                label={"密码"}
                inputProps={{ type: "password", autoComplete: "new-password" }}
              />
            )}
          />
          <form.AppField
            name="confirmPassword"
            validators={{
              onChangeListenTo: ["password"],
            }}
            children={(field) => (
              <field.TextField
                label={"确认密码"}
                inputProps={{ type: "password", autoComplete: "new-password" }}
              />
            )}
          />
          <form.AppForm>
            <FormActions>
              <form.SubmitButton label={"重置密码"} />
            </FormActions>
          </form.AppForm>
          <p className="text-sm text-muted-foreground">
            <Link to="/account/login">{"登录"}</Link>
          </p>
        </FormStack>
      </CardContent>
    </Card>
  );
}
