import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import {
  Button,
  Card,
  CardHeader,
  MessageBar,
  MessageBarBody,
  Text,
} from "@fluentui/react-components";
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
      <Card>
        <CardHeader
          header={<Text weight="semibold">忘记密码？</Text>}
          description={<Text size={200}>如果该邮箱地址存在，我们已发送密码重置链接。</Text>}
        />
        <Link to="/account/login">
          <Button>{"登录"}</Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={<Text weight="semibold">忘记密码？</Text>}
        description={<Text size={200}>输入您的邮箱地址，我们将向您发送重置密码的链接。</Text>}
      />
      <FormStack
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        {rootError && (
          <MessageBar intent="error">
            <MessageBarBody>{rootError}</MessageBarBody>
          </MessageBar>
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
        <Text as="p" size={200} block>
          <Link to="/account/login">{"返回应用"}</Link>
        </Text>
      </FormStack>
    </Card>
  );
}
