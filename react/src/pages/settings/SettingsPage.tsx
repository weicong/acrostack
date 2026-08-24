/**
 * 设置页（SettingsPage）。
 *
 * 本文件只负责编排：三张设置卡片（邮件 / 测试邮件 / 时区）的组装；
 * 各卡片的数据获取（Kubb hooks）与表单状态内部化在各自组件中，样式见 styles/settings。
 */
import { PageLayout } from "@/components/layout/PageLayout";
import { useSettingsStyles } from "./styles/settings";
import { EmailSettingsCard } from "./components/EmailSettingsCard";
import { TestEmailCard } from "./components/TestEmailCard";
import { TimeZoneSettingsCard } from "./components/TimeZoneSettingsCard";

export function SettingsPage() {
  const styles = useSettingsStyles();

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
