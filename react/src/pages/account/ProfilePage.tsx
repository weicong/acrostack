/**
 * 个人信息页：个人设置与修改密码两张自包含卡片的编排。
 */
import { PageLayout } from "@/components/layout/PageLayout";
import { ChangePasswordFormCard } from "./components/ChangePasswordFormCard";
import { ProfileFormCard } from "./components/ProfileFormCard";

export function ProfilePage() {
  return (
    <PageLayout title={" 个人信息"}>
      <ProfileFormCard />
      <ChangePasswordFormCard />
    </PageLayout>
  );
}
