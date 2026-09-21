import { useQueryClient } from "@tanstack/react-query";
import { Card, CardHeader, Text, useToastController } from "@fluentui/react-components";
import { FormActions, FormStack, useAppForm } from "@acrostack/ui/form";
import {
  useProfileGet,
  profileGetQueryKey,
} from "@acrostack/api-client/hooks/profile/useProfileGet";
import { useProfileUpdate } from "@acrostack/api-client/hooks/profile/useProfileUpdate";
import { extractAbpErrorMessage } from "@acrostack/core";
import { profileSchema } from "../schemas/profile";

/** 个人设置卡片：资料查询与更新自包含。 */
export function ProfileFormCard() {
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
    onSubmit: async ({ value }) => {
      try {
        await updateMutation.mutateAsync({
          body: {
            userName: value.userName,
            email: value.email,
            name: value.name || null,
            surname: value.surname || null,
            phoneNumber: value.phoneNumber || null,
            concurrencyStamp: value.concurrencyStamp || undefined,
          },
        });
        void queryClient.invalidateQueries({ queryKey: profileGetQueryKey() });
        dispatchToast("你的个人设置保存成功。", { intent: "success" });
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      }
    },
  });

  if (profileQuery.isLoading) {
    return (
      <Card>
        <CardHeader header={<Text weight="semibold">个人设置</Text>} />
        <Text>{"加载中..."}</Text>
      </Card>
    );
  }

  if (profileQuery.isError || !profile) {
    return (
      <Card>
        <CardHeader header={<Text weight="semibold">个人设置</Text>} />
        <Text>{"错误"}</Text>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader header={<Text weight="semibold">个人设置</Text>} />
      <form.AppForm>
        <FormStack
          onSubmit={(e) => {
            e.preventDefault();
            void form.handleSubmit();
          }}
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
          <FormActions>
            <form.SubmitButton label={"保存"} />
          </FormActions>
        </FormStack>
      </form.AppForm>
    </Card>
  );
}
