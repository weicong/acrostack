import { Link } from "@tanstack/react-router";

import { z } from "zod";
import { Button, Card, CardHeader, makeStyles, tokens, Text } from "@fluentui/react-components";
import { accountResetPassword } from "@/api/clients/account/accountResetPassword";
import { useAppForm } from "@/components/form";
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

const useStyles = makeStyles({
  body: {
    padding: `0 ${tokens.spacingHorizontalL} ${tokens.spacingVerticalL}`,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  errorAlert: {
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorPaletteRedBackground1,
    padding: tokens.spacingVerticalS,
    fontSize: "0.875rem",
    color: tokens.colorPaletteRedForeground3,
  },
  fullWidthButton: {
    width: "100%",
  },
  link: {
    fontWeight: 500,
    color: tokens.colorBrandForegroundLink,
  },
});

export function ResetPasswordPage() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const userId = params.get("userId") ?? params.get("cid") ?? "";
  const resetToken =
    params.get("resetToken") ?? params.get("token") ?? params.get("resetCode") ?? "";
  const [rootError, setRootError] = useState<string | null>(null);
  const styles = useStyles();

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
      } catch (err: unknown) {
        const msg =
          err && typeof err === "object" && "response" in err
            ? (err as { response?: { data?: { error?: { message?: string } } } })?.response?.data
                ?.error?.message
            : undefined;
        setRootError(msg ?? "重置密码失败");
      }
    },
  });

  const isInvalidLink = !userId || !resetToken;

  if (isInvalidLink) {
    return (
      <Card>
        <CardHeader
          header={<Text weight="semibold">{"重置密码"}</Text>}
          description={<Text size={200}>{"此密码重置链接无效或已过期。"}</Text>}
        />
        <div className={styles.body}>
          <Link to="/account/forgot-password">
            <Button>{"发送重置密码邮件"}</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={<Text weight="semibold">{"重置密码"}</Text>}
        description={<Text size={200}>{"请输入您的新密码。"}</Text>}
      />
      <div className={styles.body}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          className={styles.form}
        >
          {rootError && (
            <div className={styles.errorAlert} role="alert">
              {rootError}
            </div>
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
            <form.SubmitButton label={"重置密码"} className={styles.fullWidthButton} />
          </form.AppForm>
          <Text as="p" size={200} align="center" block>
            <Link to="/account/login" className={styles.link}>
              {"登录"}
            </Link>
          </Text>
        </form>
      </div>
    </Card>
  );
}
