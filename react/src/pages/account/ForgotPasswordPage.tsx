import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { Button, Card, CardHeader, Text } from "@fluentui/react-components";
import { accountSendPasswordResetCode } from "@/api/clients/account/accountSendPasswordResetCode";
import { useAppForm } from "@/components/form";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { useAccountCardStyles } from "./styles/account";

const forgotPasswordSchema = z.object({
  email: z.string().email("AbpAccount::InvalidEmailAddress"),
});

export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [rootError, setRootError] = useState<string | null>(null);
  const styles = useAccountCardStyles();

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
      <Card>
        <CardHeader
          header={<Text weight="semibold">{"忘记密码？"}</Text>}
          description={<Text size={200}>{"如果该邮箱地址存在，我们已发送密码重置链接。"}</Text>}
        />
        <div className={styles.body}>
          <Link to="/account/login">
            <Button>{"登录"}</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={<Text weight="semibold">{"忘记密码？"}</Text>}
        description={<Text size={200}>{"输入您的邮箱地址，我们将向您发送重置密码的链接。"}</Text>}
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
            name="email"
            children={(field) => (
              <field.TextField
                label={"电子邮件地址"}
                inputProps={{ type: "email", autoComplete: "email" }}
              />
            )}
          />
          <form.AppForm>
            <form.SubmitButton label={"提交"} className={styles.fullWidthButton} />
          </form.AppForm>
          <Text as="p" size={200} align="center" block>
            <Link to="/account/login" className={styles.link}>
              {"返回应用"}
            </Link>
          </Text>
        </form>
      </div>
    </Card>
  );
}
