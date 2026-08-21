import { useQueryClient } from "@tanstack/react-query";
import { makeStyles, tokens, useToastController, Text, Card } from "@fluentui/react-components";
import { PageLayout } from "@/components/layout/PageLayout";
import { useAppForm } from "@/components/form";
import { useProfileGet, profileGetQueryKey } from "@/api/hooks/profile/useProfileGet";
import { useProfileUpdate } from "@/api/hooks/profile/useProfileUpdate";
import { useProfileChangePassword } from "@/api/hooks/profile/useProfileChangePassword";
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
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
  sectionTitle: {
    marginBottom: tokens.spacingVerticalS,
  },
});

// ── Schemas ─────────────────────────────────────────────────────────

const profileSchema = z.object({
  userName: z.string().min(1).max(256),
  email: z.string().min(1).max(256).email(),
  name: z.string().max(64).nullable(),
  surname: z.string().max(64).nullable(),
  phoneNumber: z.string().max(16).nullable(),
  concurrencyStamp: z.string().nullable(),
});

const passwordSchema = z
  .object({
    currentPassword: z.string().max(128),
    newPassword: z.string().min(1).max(128),
    newPasswordConfirm: z.string().min(1).max(128),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    path: ["newPasswordConfirm"],
    message: "两次输入的密码不一致",
  });

// ── Profile Form ────────────────────────────────────────────────────

function ProfileFormCard() {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const updateMutation = useProfileUpdate();
  const { dispatchToast } = useToastController();

  const profileQuery = useProfileGet();
  const profile = profileQuery.data;

  const form = useAppForm({
    defaultValues: {
      userName: profile?.userName ?? "",
      email: profile?.email ?? "",
      name: profile?.name ?? "",
      surname: profile?.surname ?? "",
      phoneNumber: profile?.phoneNumber ?? "",
      concurrencyStamp: profile?.concurrencyStamp ?? "",
    },
    validators: {
      onChange: ({ value }) => {
        const result = profileSchema.safeParse(value);
        if (result.error) return result.error.flatten().fieldErrors as Record<string, string[]>;
      },
    },
    onSubmit: ({ value }) => {
      updateMutation.mutate(
        {
          body: {
            userName: value.userName,
            email: value.email,
            name: value.name || null,
            surname: value.surname || null,
            phoneNumber: value.phoneNumber || null,
            concurrencyStamp: value.concurrencyStamp || undefined,
          },
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: profileGetQueryKey() });
            dispatchToast("你的个人设置保存成功。", { intent: "success" });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
  });

  if (profileQuery.isLoading) {
    return <Text>{"加载中..."}</Text>;
  }

  if (profileQuery.isError || !profile) {
    return <Text>{"错误"}</Text>;
  }

  return (
    <Card>
      <Text as="h2" size={500} weight="semibold" className={styles.sectionTitle}>
        {"个人设置"}
      </Text>
      <form.AppForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void form.handleSubmit();
          }}
          className={styles.form}
        >
          <form.AppField
            name="userName"
            children={(field) => <field.TextField label={"用户名称"} required />}
          />
          <form.AppField
            name="email"
            children={(field) => <field.TextField label={"邮箱"} required />}
          />
          <form.AppField name="name" children={(field) => <field.TextField label={"名称"} />} />
          <form.AppField name="surname" children={(field) => <field.TextField label={"姓"} />} />
          <form.AppField
            name="phoneNumber"
            children={(field) => <field.TextField label={"手机号"} />}
          />
          <div className={styles.actions}>
            <form.SubmitButton label={"保存"} />
          </div>
        </form>
      </form.AppForm>
    </Card>
  );
}

// ── Change Password Form ────────────────────────────────────────────

function ChangePasswordFormCard() {
  const styles = useStyles();
  const changePasswordMutation = useProfileChangePassword();
  const { dispatchToast } = useToastController();

  const form = useAppForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
    validators: {
      onChange: ({ value }) => {
        const result = passwordSchema.safeParse(value);
        if (result.error) {
          const fieldErrors = result.error.flatten().fieldErrors as Record<string, string[]>;
          return fieldErrors;
        }
      },
    },
    onSubmit: ({ value }) => {
      changePasswordMutation.mutate(
        {
          body: {
            currentPassword: value.currentPassword || undefined,
            newPassword: value.newPassword,
          },
        },
        {
          onSuccess: () => {
            form.reset();
            dispatchToast("你已成功更改密码。", { intent: "success" });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
  });

  return (
    <Card>
      <Text as="h2" size={500} weight="semibold" className={styles.sectionTitle}>
        {"修改密码"}
      </Text>
      <form.AppForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void form.handleSubmit();
          }}
          className={styles.form}
        >
          <form.AppField
            name="currentPassword"
            children={(field) => (
              <field.TextField label={"当前密码"} inputProps={{ type: "password" }} />
            )}
          />
          <form.AppField
            name="newPassword"
            children={(field) => (
              <field.TextField label={"新密码"} required inputProps={{ type: "password" }} />
            )}
          />
          <form.AppField
            name="newPasswordConfirm"
            children={(field) => (
              <field.TextField label={"确认新密码"} required inputProps={{ type: "password" }} />
            )}
          />
          <div className={styles.actions}>
            <form.SubmitButton label={"保存"} />
          </div>
        </form>
      </form.AppForm>
    </Card>
  );
}

// ── Page ────────────────────────────────────────────────────────────

export function ProfilePage() {
  const styles = useStyles();

  return (
    <PageLayout title={" 个人信息"}>
      <div className={styles.cards}>
        <ProfileFormCard />
        <ChangePasswordFormCard />
      </div>
    </PageLayout>
  );
}
