import { useState } from "react";
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
import { accountSendPasswordResetCode } from "@acrostack/api-client/clients/account/accountSendPasswordResetCode";
import { FormActions, FormStack, useAppForm } from "@acrostack/ui/form";
import { extractAbpErrorMessage } from "@acrostack/core";

const forgotPasswordSchema = z.object({
  email: z.string().email("AbpAccount::InvalidEmailAddress"),
});

export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: { email: "" },
    validators: {
      onChange: forgotPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountSendPasswordResetCode({ body: { appName: "React", email: value.email } });
        setSent(true);
      } catch (err) {
        setRootError(extractAbpErrorMessage(err));
      }
    },
  });

  if (sent) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>忘记密码？</CardTitle>
          <CardDescription>如果该邮箱地址存在，我们已发送密码重置链接。</CardDescription>
        </CardHeader>
        <CardContent>
          <Button render={<Link to="/account/login" />} nativeButton={false}>
            {"登录"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>忘记密码？</CardTitle>
        <CardDescription>输入您的邮箱地址，我们将向您发送重置密码的链接。</CardDescription>
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
            name="email"
            children={(field) => (
              <field.TextField
                label={"电子邮件地址"}
                inputProps={{ type: "email", autoComplete: "email" }}
              />
            )}
          />
          <form.AppForm>
            <FormActions>
              <form.SubmitButton label={"提交"} />
            </FormActions>
          </form.AppForm>
          <p className="text-sm text-muted-foreground">
            <Link to="/account/login">{"返回应用"}</Link>
          </p>
        </FormStack>
      </CardContent>
    </Card>
  );
}
