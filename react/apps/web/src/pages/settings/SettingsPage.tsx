/**
 * 设置页（SettingsPage）。
 *
 * 本文件只负责编排：三张设置卡片（邮件 / 测试邮件 / 时区）的组装；
 * 各卡片的数据获取（Kubb hooks）与表单状态内部化在各自组件中。
 */
import { PageHeader } from "@acrostack/layout";
import { EmailSettingsCard } from "./components/EmailSettingsCard";
import { TestEmailCard } from "./components/TestEmailCard";
import { TimeZoneSettingsCard } from "./components/TimeZoneSettingsCard";

export function SettingsPage() {
  return (
    <>
      <PageHeader title={"设置"} description="邮件发送与系统时区等应用级设置。" />
      <EmailSettingsCard />
      <TestEmailCard />
      <TimeZoneSettingsCard />
    </>
  );
}
