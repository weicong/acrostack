/**
 * 时区设置卡片：服务器默认时区下拉选择与保存。
 * 查询/变更均走 Kubb hooks，选中值为卡片内部状态；保存成功后失效时区查询缓存。
 */
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Card,
  Dropdown,
  Field,
  Option,
  Spinner,
  Text,
  useToastController,
} from "@fluentui/react-components";
import {
  useTimeZoneSettingsGet,
  timeZoneSettingsGetQueryKey,
} from "@/api/hooks/timeZoneSettings/useTimeZoneSettingsGet";
import { useTimeZoneSettingsGetTimezones } from "@/api/hooks/timeZoneSettings/useTimeZoneSettingsGetTimezones";
import { useTimeZoneSettingsUpdate } from "@/api/hooks/timeZoneSettings/useTimeZoneSettingsUpdate";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { useSettingsStyles } from "../styles/settings";

export function TimeZoneSettingsCard() {
  const styles = useSettingsStyles();
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

  const handleSave = async () => {
    if (!selectedTz) return;
    try {
      await updateMutation.mutateAsync({ query: { timezone: selectedTz } });
      void queryClient.invalidateQueries({ queryKey: timeZoneSettingsGetQueryKey() });
      dispatchToast("保存成功", { intent: "success" });
    } catch (err) {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    }
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
        <Button
          appearance="primary"
          onClick={() => void handleSave()}
          disabled={updateMutation.isPending}
        >
          {"保存"}
        </Button>
      </div>
    </Card>
  );
}
