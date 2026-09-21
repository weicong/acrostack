/**
 * 发送测试邮件卡片：测试邮件表单与发送动作。
 * 变更走 Kubb mutation（mutateAsync），表单为卡片内部状态。
 */
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Field,
  Input,
  Text,
  Textarea,
  useToastController,
} from "@fluentui/react-components";
import { z } from "zod";
import { useEmailSettingsSendTestEmail } from "@acrostack/api-client/hooks/emailSettings/useEmailSettingsSendTestEmail";
import { extractAbpErrorMessage } from "@/lib/http/error";

const testEmailSchema = z.object({
  senderEmailAddress: z.string().min(1).email(),
  targetEmailAddress: z.string().min(1).email(),
  subject: z.string().min(1),
  body: z.string().nullable(),
});

export function TestEmailCard() {
  const sendMutation = useEmailSettingsSendTestEmail();
  const { dispatchToast } = useToastController();

  const [form, setForm] = useState({
    senderEmailAddress: "",
    targetEmailAddress: "",
    subject: "",
    body: "",
  });

  const handleSend = async () => {
    const result = testEmailSchema.safeParse(form);
    if (result.error) {
      dispatchToast(String(result.error.issues[0]?.message), { intent: "error" });
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
      dispatchToast("发送成功", { intent: "success" });
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    }
  };

  return (
    <Card>
      <CardHeader
        header={<Text weight="semibold">发送测试邮件</Text>}
        action={
          <Button
            appearance="primary"
            onClick={() => void handleSend()}
            disabled={sendMutation.isPending}
          >
            {"发送"}
          </Button>
        }
      />
      <Field label={"发件人邮箱地址"} required>
        <Input
          value={form.senderEmailAddress}
          onChange={(_, d) => setForm((p) => ({ ...p, senderEmailAddress: d.value }))}
        />
      </Field>
      <Field label={"收件人邮箱地址"} required>
        <Input
          value={form.targetEmailAddress}
          onChange={(_, d) => setForm((p) => ({ ...p, targetEmailAddress: d.value }))}
        />
      </Field>
      <Field label={"主题"} required>
        <Input
          value={form.subject}
          onChange={(_, d) => setForm((p) => ({ ...p, subject: d.value }))}
        />
      </Field>
      <Field label={"正文"}>
        <Textarea
          value={form.body}
          onChange={(_, d) => setForm((p) => ({ ...p, body: d.value }))}
        />
      </Field>
    </Card>
  );
}
