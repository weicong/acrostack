import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Card,
  Dropdown,
  Input,
  Option,
  Spinner,
  Switch,
  Text,
  Textarea,
  makeStyles,
  tokens,
  useToastController,
  Field,
} from "@fluentui/react-components";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  useEmailSettingsGet,
  emailSettingsGetQueryKey,
} from "@/api/hooks/emailSettings/useEmailSettingsGet";
import { useEmailSettingsUpdate } from "@/api/hooks/emailSettings/useEmailSettingsUpdate";
import { useEmailSettingsSendTestEmail } from "@/api/hooks/emailSettings/useEmailSettingsSendTestEmail";
import {
  useTimeZoneSettingsGet,
  timeZoneSettingsGetQueryKey,
} from "@/api/hooks/timeZoneSettings/useTimeZoneSettingsGet";
import { useTimeZoneSettingsGetTimezones } from "@/api/hooks/timeZoneSettings/useTimeZoneSettingsGetTimezones";
import { useTimeZoneSettingsUpdate } from "@/api/hooks/timeZoneSettings/useTimeZoneSettingsUpdate";
import { z } from "zod";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  sectionTitle: {
    marginBottom: tokens.spacingVerticalS,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
    marginTop: tokens.spacingVerticalS,
  },
  row: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  rowItem: {
    flex: 1,
    minWidth: "200px",
  },
});

// ── Schemas ─────────────────────────────────────────────────────────

const emailSchema = z.object({
  smtpHost: z.string().max(256).nullable(),
  smtpPort: z.number().int().min(0).max(65535).nullable(),
  smtpUserName: z.string().max(1024).nullable(),
  smtpPassword: z.string().max(1024).nullable(),
  smtpDomain: z.string().max(1024).nullable(),
  smtpEnableSsl: z.boolean(),
  smtpUseDefaultCredentials: z.boolean(),
  defaultFromAddress: z.string().min(1).max(1024),
  defaultFromDisplayName: z.string().min(1).max(1024),
});

const testEmailSchema = z.object({
  senderEmailAddress: z.string().min(1).email(),
  targetEmailAddress: z.string().min(1).email(),
  subject: z.string().min(1),
  body: z.string().nullable(),
});

// ── Email Settings Card ─────────────────────────────────────────────

function EmailSettingsCard() {
  const styles = useStyles();
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

  const handleSave = () => {
    const result = emailSchema.safeParse(form);
    if (result.error) {
      dispatchToast(String(result.error.issues[0]?.message), { intent: "error" });
      return;
    }

    updateMutation.mutate(
      {
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
      },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: emailSettingsGetQueryKey() });
          dispatchToast("保存成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
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
          <Button appearance="primary" onClick={handleSave} disabled={updateMutation.isPending}>
            {"保存"}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// ── Test Email Card ─────────────────────────────────────────────────

function TestEmailCard() {
  const styles = useStyles();
  const sendMutation = useEmailSettingsSendTestEmail();
  const { dispatchToast } = useToastController();

  const [form, setForm] = useState({
    senderEmailAddress: "",
    targetEmailAddress: "",
    subject: "",
    body: "",
  });

  const handleSend = () => {
    const result = testEmailSchema.safeParse(form);
    if (result.error) {
      dispatchToast(String(result.error.issues[0]?.message), { intent: "error" });
      return;
    }

    sendMutation.mutate(
      {
        body: {
          senderEmailAddress: form.senderEmailAddress,
          targetEmailAddress: form.targetEmailAddress,
          subject: form.subject,
          body: form.body || undefined,
        },
      },
      {
        onSuccess: () => {
          dispatchToast("发送成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  return (
    <Card>
      <Text as="h2" size={500} weight="semibold" className={styles.sectionTitle}>
        {"发送测试邮件"}
      </Text>
      <div className={styles.form}>
        <div className={styles.row}>
          <Field label={"发件人邮箱地址"} className={styles.rowItem} required>
            <Input
              value={form.senderEmailAddress}
              onChange={(_, d) => setForm((p) => ({ ...p, senderEmailAddress: d.value }))}
            />
          </Field>
          <Field label={"收件人邮箱地址"} className={styles.rowItem} required>
            <Input
              value={form.targetEmailAddress}
              onChange={(_, d) => setForm((p) => ({ ...p, targetEmailAddress: d.value }))}
            />
          </Field>
        </div>
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
        <div className={styles.actions}>
          <Button appearance="primary" onClick={handleSend} disabled={sendMutation.isPending}>
            {"发送"}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// ── Timezone Settings Card ──────────────────────────────────────────

function TimeZoneSettingsCard() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const updateMutation = useTimeZoneSettingsUpdate();
  const { dispatchToast } = useToastController();

  const tzQuery = useTimeZoneSettingsGet();
  const timezonesQuery = useTimeZoneSettingsGetTimezones();

  const [selectedTz, setSelectedTz] = useState<string>("");

  useEffect(() => {
    if (typeof tzQuery.data === "string") {
      setSelectedTz(tzQuery.data);
    }
  }, [tzQuery.data]);

  const timezones = timezonesQuery.data ?? [];

  const handleSave = () => {
    if (!selectedTz) return;
    updateMutation.mutate(
      { query: { timezone: selectedTz } },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: timeZoneSettingsGetQueryKey() });
          dispatchToast("保存成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  if (tzQuery.isLoading || timezonesQuery.isLoading) {
    return <Spinner label={"加载中..."} />;
  }

  return (
    <Card>
      <Text as="h2" size={500} weight="semibold" className={styles.sectionTitle}>
        {"时区"}
      </Text>
      <Field label={"时区"}>
        <Dropdown
          value={timezones.find((tz) => tz.name === selectedTz)?.value ?? selectedTz ?? ""}
          selectedOptions={selectedTz ? [selectedTz] : []}
          onOptionSelect={(_, data) => {
            setSelectedTz(data.optionValue as string);
          }}
        >
          {timezones.map((tz) => (
            <Option key={tz.name ?? ""} value={tz.name ?? ""}>
              {tz.value ?? tz.name ?? ""}
            </Option>
          ))}
        </Dropdown>
      </Field>
      <Text size={200}>
        {
          "此功能允许您为服务器设置默认时区，同时用户可以选择自己的时区。如果用户的时区与服务器的时区不同，所有时间将相应调整。例如，如果服务器设置为欧洲/伦敦(00:00)，而用户在欧洲/巴黎(+01:00)，则该用户的时间将调整1小时。选择'默认时区'将自动使用服务器或浏览器的时区。"
        }
      </Text>
      <div className={styles.actions}>
        <Button appearance="primary" onClick={handleSave} disabled={updateMutation.isPending}>
          {"保存"}
        </Button>
      </div>
    </Card>
  );
}

// ── Page ────────────────────────────────────────────────────────────

export function SettingsPage() {
  const styles = useStyles();

  return (
    <PageLayout title={"设置"}>
      <div className={styles.cards}>
        <EmailSettingsCard />
        <TestEmailCard />
        <TimeZoneSettingsCard />
      </div>
    </PageLayout>
  );
}
