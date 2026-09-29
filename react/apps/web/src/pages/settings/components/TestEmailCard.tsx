/**
 * 发送测试邮件卡片：测试邮件表单与发送动作。
 * 变更走 Kubb mutation（mutateAsync），表单为卡片内部状态。
 */
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@acrostack/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@acrostack/ui/components/card";
import { Field, FieldLabel } from "@acrostack/ui/components/field";
import { Input } from "@acrostack/ui/components/input";
import { Textarea } from "@acrostack/ui/components/textarea";
import { z } from "zod";
import { useEmailSettingsSendTestEmail } from "@acrostack/api-client/hooks/emailSettings/useEmailSettingsSendTestEmail";
import { extractAbpErrorMessage } from "@acrostack/core";

const testEmailSchema = z.object({
  senderEmailAddress: z.string().min(1).email(),
  targetEmailAddress: z.string().min(1).email(),
  subject: z.string().min(1),
  body: z.string().nullable(),
});

export function TestEmailCard() {
  const sendMutation = useEmailSettingsSendTestEmail();

  const [form, setForm] = useState({
    senderEmailAddress: "",
    targetEmailAddress: "",
    subject: "",
    body: "",
  });

  const handleSend = async () => {
    const result = testEmailSchema.safeParse(form);
    if (result.error) {
      toast.error(String(result.error.issues[0]?.message));
      return;
    }

    try {
      await sendMutation.mutateAsync({
        body: {
          senderEmailAddress: form.senderEmailAddress,
          targetEmailAddress: form.targetEmailAddress,
          subject: form.subject,
          body: form.body || undefined,
        },
      });
      toast.success("发送成功");
    } catch (err) {
      toast.error(extractAbpErrorMessage(err));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{"发送测试邮件"}</CardTitle>
        <CardAction>
          <Button onClick={() => void handleSend()} disabled={sendMutation.isPending}>
            {"发送"}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="test-sender-email">
            {"发件人邮箱地址"}
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="test-sender-email"
            required
            value={form.senderEmailAddress}
            onChange={(e) => setForm((p) => ({ ...p, senderEmailAddress: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="test-target-email">
            {"收件人邮箱地址"}
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="test-target-email"
            required
            value={form.targetEmailAddress}
            onChange={(e) => setForm((p) => ({ ...p, targetEmailAddress: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="test-subject">
            {"主题"}
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="test-subject"
            required
            value={form.subject}
            onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="test-body">{"正文"}</FieldLabel>
          <Textarea
            id="test-body"
            value={form.body}
            onChange={(e) => setForm((p) => ({ ...p, body: e.target.value }))}
          />
        </Field>
      </CardContent>
    </Card>
  );
}
