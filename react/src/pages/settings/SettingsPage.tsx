import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
          dispatchToast(t("AbpSettingManagement::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  if (emailQuery.isLoading) {
    return <Spinner label={t("AbpUi::LoadingWithThreeDot")} />;
  }

  return (
    <Card>
      <Text as="h2" size={500} weight="semibold" className={styles.sectionTitle}>
        {t("AbpSettingManagement::Menu:Emailing")}
      </Text>
      <div className={styles.form}>
        <div className={styles.row}>
          <Field label={t("AbpSettingManagement::SmtpHost")} className={styles.rowItem}>
            <Input
              value={form.smtpHost}
              onChange={(_, d) => setForm((p) => ({ ...p, smtpHost: d.value }))}
            />
          </Field>
          <Field label={t("AbpSettingManagement::SmtpPort")} className={styles.rowItem}>
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
          <Field label={t("AbpSettingManagement::SmtpUserName")} className={styles.rowItem}>
            <Input
              value={form.smtpUserName}
              onChange={(_, d) => setForm((p) => ({ ...p, smtpUserName: d.value }))}
            />
          </Field>
          <Field label={t("AbpSettingManagement::SmtpPassword")} className={styles.rowItem}>
            <Input
              type="password"
              placeholder={t("AbpSettingManagement::SmtpPasswordPlaceholder")}
              value={form.smtpPassword}
              onChange={(_, d) => setForm((p) => ({ ...p, smtpPassword: d.value }))}
            />
          </Field>
        </div>
        <div className={styles.row}>
          <Field label={t("AbpSettingManagement::SmtpDomain")} className={styles.rowItem}>
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
            label={t("AbpSettingManagement::SmtpEnableSsl")}
          />
          <Switch
            checked={form.smtpUseDefaultCredentials}
            onChange={(_, d) => setForm((p) => ({ ...p, smtpUseDefaultCredentials: d.checked }))}
            label={t("AbpSettingManagement::SmtpUseDefaultCredentials")}
          />
        </div>
        <div className={styles.row}>
          <Field
            label={t("AbpSettingManagement::DefaultFromAddress")}
            className={styles.rowItem}
            required
          >
            <Input
              value={form.defaultFromAddress}
              onChange={(_, d) => setForm((p) => ({ ...p, defaultFromAddress: d.value }))}
            />
          </Field>
          <Field
            label={t("AbpSettingManagement::DefaultFromDisplayName")}
            className={styles.rowItem}
            required
          >
            <Input
              value={form.defaultFromDisplayName}
              onChange={(_, d) => setForm((p) => ({ ...p, defaultFromDisplayName: d.value }))}
            />
          </Field>
        </div>
        <div className={styles.actions}>
          <Button appearance="primary" onClick={handleSave} disabled={updateMutation.isPending}>
            {t("AbpUi::Save")}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// ── Test Email Card ─────────────────────────────────────────────────

function TestEmailCard() {
  const { t } = useTranslation();
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
          dispatchToast(t("AbpSettingManagement::SentSuccessfully"), { intent: "success" });
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
        {t("AbpSettingManagement::SendTestEmail")}
      </Text>
      <div className={styles.form}>
        <div className={styles.row}>
          <Field
            label={t("AbpSettingManagement::SenderEmailAddress")}
            className={styles.rowItem}
            required
          >
            <Input
              value={form.senderEmailAddress}
              onChange={(_, d) => setForm((p) => ({ ...p, senderEmailAddress: d.value }))}
            />
          </Field>
          <Field
            label={t("AbpSettingManagement::TargetEmailAddress")}
            className={styles.rowItem}
            required
          >
            <Input
              value={form.targetEmailAddress}
              onChange={(_, d) => setForm((p) => ({ ...p, targetEmailAddress: d.value }))}
            />
          </Field>
        </div>
        <Field label={t("AbpSettingManagement::Subject")} required>
          <Input
            value={form.subject}
            onChange={(_, d) => setForm((p) => ({ ...p, subject: d.value }))}
          />
        </Field>
        <Field label={t("AbpSettingManagement::Body")}>
          <Textarea
            value={form.body}
            onChange={(_, d) => setForm((p) => ({ ...p, body: d.value }))}
          />
        </Field>
        <div className={styles.actions}>
          <Button appearance="primary" onClick={handleSend} disabled={sendMutation.isPending}>
            {t("AbpSettingManagement::Send")}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// ── Timezone Settings Card ──────────────────────────────────────────

function TimeZoneSettingsCard() {
  const { t } = useTranslation();
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
          dispatchToast(t("AbpSettingManagement::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  };

  if (tzQuery.isLoading || timezonesQuery.isLoading) {
    return <Spinner label={t("AbpUi::LoadingWithThreeDot")} />;
  }

  return (
    <Card>
      <Text as="h2" size={500} weight="semibold" className={styles.sectionTitle}>
        {t("AbpSettingManagement::TimeZone")}
      </Text>
      <Field label={t("AbpSettingManagement::DisplayName:Timezone")}>
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
      <Text size={200}>{t("AbpSettingManagement::TimezoneHelpText")}</Text>
      <div className={styles.actions}>
        <Button appearance="primary" onClick={handleSave} disabled={updateMutation.isPending}>
          {t("AbpUi::Save")}
        </Button>
      </div>
    </Card>
  );
}

// ── Page ────────────────────────────────────────────────────────────

export function SettingsPage() {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <PageLayout title={t("AbpSettingManagement::Settings")}>
      <div className={styles.cards}>
        <EmailSettingsCard />
        <TestEmailCard />
        <TimeZoneSettingsCard />
      </div>
    </PageLayout>
  );
}
