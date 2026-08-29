import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { Card, CardHeader, Text } from "@fluentui/react-components";
import { accountRegister } from "@/api/clients/account/accountRegister";
import { useAuth } from "@/lib/auth/AuthContext";
import { useAppForm } from "@/components/ui/form";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { useState } from "react";
import { useAccountCardStyles } from "./styles/account";

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
  const styles = useAccountCardStyles();

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
    <Card>
      <CardHeader
        header={<Text weight="semibold">{"注册"}</Text>}
        description={<Text size={200}>{"创建新账户"}</Text>}
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
            <form.SubmitButton label={"注册"} className={styles.fullWidthButton} />
          </form.AppForm>
          <Text as="p" size={200} align="center" block>
            {"已经有账户了？"}{" "}
            <Link to="/account/login" className={styles.link}>
              {"登录"}
            </Link>
          </Text>
        </form>
      </div>
    </Card>
  );
}
