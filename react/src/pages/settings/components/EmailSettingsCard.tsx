/**
 * 邮件设置卡片：SMTP 参数表单与保存。
 * 查询/变更均走 Kubb hooks，表单为卡片内部状态；保存成功后失效设置查询缓存。
 */
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Card,
  Field,
  Input,
  Spinner,
  Switch,
  Text,
  useToastController,
} from "@fluentui/react-components";
import {
  useEmailSettingsGet,
  emailSettingsGetQueryKey,
} from "@/api/hooks/emailSettings/useEmailSettingsGet";
import { useEmailSettingsUpdate } from "@/api/hooks/emailSettings/useEmailSettingsUpdate";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { emailSchema } from "../email-settings-schemas";
import { useSettingsStyles } from "../styles/settings";

export function EmailSettingsCard() {
  const styles = useSettingsStyles();
  const queryClient = useQueryClient();
  const updateMutation = useEmailSettingsUpdate();
  const { dispatchToast } = useToastController();

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
      dispatchToast(String(result.error.issues[0]?.message), { intent: "error" });
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
      dispatchToast("保存成功", { intent: "success" });
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    }
  };

  if (emailQuery.isLoading) {
    return <Spinner label={"加载中..."} />;
  }

  return (
    <Card>
      <Text as="h2" size={500} weight="semibold" className={styles.sectionTitle}>
        {"邮件"}
      </Text>
      <div className={styles.form}>
        <div className={styles.row}>
          <Field label={"主机"} className={styles.rowItem}>
            <Input
              value={form.smtpHost}
              onChange={(_, d) => setForm((p) => ({ ...p, smtpHost: d.value }))}
            />
          </Field>
          <Field label={"端口"} className={styles.rowItem}>
            <Input
              type="number"
              value={String(form.smtpPort ?? "")}
              onChange={(_, d) =>
                setForm((p) => ({
                  ...p,
                  smtpPort: d.value === "" ? null : Number(d.value),
                }))
              }
            />
          </Field>
        </div>
        <div className={styles.row}>
          <Field label={"用户名"} className={styles.rowItem}>
            <Input
              value={form.smtpUserName}
              onChange={(_, d) => setForm((p) => ({ ...p, smtpUserName: d.value }))}
            />
          </Field>
          <Field label={"密码"} className={styles.rowItem}>
            <Input
              type="password"
              placeholder={"输入一个值以更新密码"}
              value={form.smtpPassword}
              onChange={(_, d) => setForm((p) => ({ ...p, smtpPassword: d.value }))}
            />
          </Field>
        </div>
        <div className={styles.row}>
          <Field label={"域"} className={styles.rowItem}>
            <Input
              value={form.smtpDomain}
              onChange={(_, d) => setForm((p) => ({ ...p, smtpDomain: d.value }))}
            />
          </Field>
        </div>
        <div className={styles.row}>
          <Switch
            checked={form.smtpEnableSsl}
            onChange={(_, d) => setForm((p) => ({ ...p, smtpEnableSsl: d.checked }))}
            label={"启用ssl"}
          />
          <Switch
            checked={form.smtpUseDefaultCredentials}
            onChange={(_, d) => setForm((p) => ({ ...p, smtpUseDefaultCredentials: d.checked }))}
            label={"使用默认凭据"}
          />
        </div>
        <div className={styles.row}>
          <Field label={"默认发件人"} className={styles.rowItem} required>
            <Input
              value={form.defaultFromAddress}
              onChange={(_, d) => setForm((p) => ({ ...p, defaultFromAddress: d.value }))}
            />
          </Field>
          <Field label={"默认显示名称"} className={styles.rowItem} required>
            <Input
              value={form.defaultFromDisplayName}
              onChange={(_, d) => setForm((p) => ({ ...p, defaultFromDisplayName: d.value }))}
            />
          </Field>
        </div>
        <div className={styles.actions}>
          <Button
            appearance="primary"
            onClick={() => void handleSave()}
            disabled={updateMutation.isPending}
          >
            {"保存"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
