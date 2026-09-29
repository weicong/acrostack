/**
 * 个人信息页：个人设置与修改密码两张自包含卡片的编排。
 */
import { PageHeader } from "@acrostack/layout";
import { ChangePasswordFormCard } from "./components/ChangePasswordFormCard";
import { ProfileFormCard } from "./components/ProfileFormCard";

export function ProfilePage() {
  return (
    <>
      <PageHeader title={"个人信息"} description="修改个人资料与登录密码。" />
      <ProfileFormCard />
      <ChangePasswordFormCard />
    </>
  );
}
