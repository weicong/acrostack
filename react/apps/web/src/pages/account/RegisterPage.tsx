import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { Alert, AlertDescription } from "@acrostack/ui/components/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acrostack/ui/components/card";
import { accountRegister } from "@acrostack/api-client/clients/account/accountRegister";
import { extractAbpErrorMessage, useAuth } from "@acrostack/core";
import { FormActions, FormStack, useAppForm } from "@acrostack/ui/form";
import { useState } from "react";

const registerSchema = z
  .object({
    userName: z.string().min(1, "此字段为必填项"),
    emailAddress: z.string().email("邮箱地址无效"),
    password: z.string().min(6, "密码长度必须至少为 6 个字符"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次输入的密码不一致",
    path: ["confirmPassword"],
  });

export function RegisterPage() {
  const { login } = useAuth();
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
      userName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: registerSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountRegister({
          body: {
            appName: "React",
            userName: value.userName,
            emailAddress: value.emailAddress,
            password: value.password,
          },
        });
        void login();
      } catch (err) {
        setRootError(extractAbpErrorMessage(err));
      }
    },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>注册</CardTitle>
        <CardDescription>创建新账户</CardDescription>
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
            name="userName"
            children={(field) => (
              <field.TextField label={"用户名"} inputProps={{ autoComplete: "username" }} />
            )}
          />
          <form.AppField
            name="emailAddress"
            children={(field) => (
              <field.TextField
                label={"电子邮件地址"}
                inputProps={{ type: "email", autoComplete: "email" }}
              />
            )}
          />
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
              <form.SubmitButton label={"注册"} />
            </FormActions>
          </form.AppForm>
          <p className="text-sm text-muted-foreground">
            {"已经有账户了？"} <Link to="/account/login">{"登录"}</Link>
          </p>
        </FormStack>
      </CardContent>
    </Card>
  );
}
