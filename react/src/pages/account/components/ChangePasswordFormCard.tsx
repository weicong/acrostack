import { Card, Text, useToastController } from "@fluentui/react-components";
import { useAppForm } from "@/components/form";
import { useProfileChangePassword } from "@/api/hooks/profile/useProfileChangePassword";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { passwordSchema } from "../schemas/profile";
import { useProfileStyles } from "../styles/profile";

/** 修改密码卡片：改密动作自包含，成功后清空表单。 */
export function ChangePasswordFormCard() {
  const styles = useProfileStyles();
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
    onSubmit: async ({ value }) => {
      try {
        await changePasswordMutation.mutateAsync({
          body: {
            currentPassword: value.currentPassword || undefined,
            newPassword: value.newPassword,
          },
        });
        form.reset();
        dispatchToast("你已成功更改密码。", { intent: "success" });
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      }
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
