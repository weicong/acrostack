/**
 * 邮件设置卡片：SMTP 参数表单与保存。
 * 查询/变更均走 Kubb hooks，表单为卡片内部状态；保存成功后失效设置查询缓存。
 */
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
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
import { Spinner } from "@acrostack/ui/components/spinner";
import { Switch } from "@acrostack/ui/components/switch";
import {
  useEmailSettingsGet,
  emailSettingsGetQueryKey,
} from "@acrostack/api-client/hooks/emailSettings/useEmailSettingsGet";
import { useEmailSettingsUpdate } from "@acrostack/api-client/hooks/emailSettings/useEmailSettingsUpdate";
import { extractAbpErrorMessage } from "@acrostack/core";
import { emailSchema } from "../schemas/emailSettings";

export function EmailSettingsCard() {
  const queryClient = useQueryClient();
  const updateMutation = useEmailSettingsUpdate();

  const emailQuery = useEmailSettingsGet();
  const data = emailQuery.data;

  const [form, setForm] = useState({
    smtpHost: "",
    smtpPort: 587 as number | null,
    smtpUserName: "",
    smtpPassword: "",
    smtpDomain: "",
    smtpEnableSsl: false,
    smtpUseDefaultCredentials: false,
    defaultFromAddress: "",
    defaultFromDisplayName: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        smtpHost: data.smtpHost ?? "",
        smtpPort: data.smtpPort ?? 587,
        smtpUserName: data.smtpUserName ?? "",
        smtpPassword: "",
        smtpDomain: data.smtpDomain ?? "",
        smtpEnableSsl: data.smtpEnableSsl ?? false,
        smtpUseDefaultCredentials: data.smtpUseDefaultCredentials ?? false,
        defaultFromAddress: data.defaultFromAddress ?? "",
        defaultFromDisplayName: data.defaultFromDisplayName ?? "",
      });
    }
  }, [data]);

  const handleSave = async () => {
    const result = emailSchema.safeParse(form);
    if (result.error) {
      toast.error(String(result.error.issues[0]?.message));
      return;
    }

    try {
      await updateMutation.mutateAsync({
        body: {
          smtpHost: form.smtpHost || null,
          smtpPort: form.smtpPort ?? undefined,
          smtpUserName: form.smtpUserName || null,
          smtpPassword: form.smtpPassword || undefined,
          smtpDomain: form.smtpDomain || null,
          smtpEnableSsl: form.smtpEnableSsl,
          smtpUseDefaultCredentials: form.smtpUseDefaultCredentials,
          defaultFromAddress: form.defaultFromAddress,
          defaultFromDisplayName: form.defaultFromDisplayName,
        },
      });
      void queryClient.invalidateQueries({ queryKey: emailSettingsGetQueryKey() });
      toast.success("保存成功");
    } catch (err) {
      toast.error(extractAbpErrorMessage(err));
    }
  };

  if (emailQuery.isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{"邮件"}</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <Spinner />
            {"加载中..."}
          </span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{"邮件"}</CardTitle>
        <CardAction>
          <Button onClick={() => void handleSave()} disabled={updateMutation.isPending}>
            {"保存"}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="smtp-host">{"主机"}</FieldLabel>
          <Input
            id="smtp-host"
            value={form.smtpHost}
            onChange={(e) => setForm((p) => ({ ...p, smtpHost: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="smtp-port">{"端口"}</FieldLabel>
          <Input
            id="smtp-port"
            type="number"
            value={String(form.smtpPort ?? "")}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                smtpPort: e.target.value === "" ? null : Number(e.target.value),
              }))
            }
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="smtp-user-name">{"用户名"}</FieldLabel>
          <Input
            id="smtp-user-name"
            value={form.smtpUserName}
            onChange={(e) => setForm((p) => ({ ...p, smtpUserName: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="smtp-password">{"密码"}</FieldLabel>
          <Input
            id="smtp-password"
            type="password"
            placeholder={"输入一个值以更新密码"}
            value={form.smtpPassword}
            onChange={(e) => setForm((p) => ({ ...p, smtpPassword: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="smtp-domain">{"域"}</FieldLabel>
          <Input
            id="smtp-domain"
            value={form.smtpDomain}
            onChange={(e) => setForm((p) => ({ ...p, smtpDomain: e.target.value }))}
          />
        </Field>
        <Field orientation="horizontal">
          <Switch
            id="smtp-enable-ssl"
            checked={form.smtpEnableSsl}
            onCheckedChange={(checked) => setForm((p) => ({ ...p, smtpEnableSsl: checked }))}
          />
          <FieldLabel htmlFor="smtp-enable-ssl">{"启用ssl"}</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Switch
            id="smtp-use-default-credentials"
            checked={form.smtpUseDefaultCredentials}
            onCheckedChange={(checked) =>
              setForm((p) => ({ ...p, smtpUseDefaultCredentials: checked }))
            }
          />
          <FieldLabel htmlFor="smtp-use-default-credentials">{"使用默认凭据"}</FieldLabel>
        </Field>
        <Field>
          <FieldLabel htmlFor="default-from-address">
            {"默认发件人"}
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="default-from-address"
            required
            value={form.defaultFromAddress}
            onChange={(e) => setForm((p) => ({ ...p, defaultFromAddress: e.target.value }))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="default-from-display-name">
            {"默认显示名称"}
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="default-from-display-name"
            required
            value={form.defaultFromDisplayName}
            onChange={(e) => setForm((p) => ({ ...p, defaultFromDisplayName: e.target.value }))}
          />
        </Field>
      </CardContent>
    </Card>
  );
}
