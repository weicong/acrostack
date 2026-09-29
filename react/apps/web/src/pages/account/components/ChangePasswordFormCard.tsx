import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { FormActions, FormStack, useAppForm } from "@workspace/ui/form";
import { useProfileChangePassword } from "@workspace/api-client/hooks/profile/useProfileChangePassword";
import { extractAbpErrorMessage } from "@workspace/core";
import { passwordSchema } from "../schemas/profile";

/** 修改密码卡片：改密动作自包含，成功后清空表单。 */
export function ChangePasswordFormCard() {
  const changePasswordMutation = useProfileChangePassword();

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
        toast.success("你已成功更改密码。");
      } catch (err) {
        toast.error(extractAbpErrorMessage(err));
      }
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>修改密码</CardTitle>
      </CardHeader>
      <CardContent>
        <form.AppForm>
          <FormStack
            onSubmit={(e) => {
              e.preventDefault();
              void form.handleSubmit();
            }}
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
            <FormActions>
              <form.SubmitButton label={"保存"} />
            </FormActions>
          </FormStack>
        </form.AppForm>
      </CardContent>
    </Card>
  );
}
