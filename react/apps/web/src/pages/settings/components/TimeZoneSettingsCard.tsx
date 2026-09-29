/**
 * 时区设置卡片：服务器默认时区下拉选择与保存。
 * 查询/变更均走 Kubb hooks，选中值为卡片内部状态；保存成功后失效时区查询缓存。
 */
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@acrostack/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@acrostack/ui/components/card";
import { Field, FieldLabel } from "@acrostack/ui/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@acrostack/ui/components/select";
import { Spinner } from "@acrostack/ui/components/spinner";
import {
  useTimeZoneSettingsGet,
  timeZoneSettingsGetQueryKey,
} from "@acrostack/api-client/hooks/timeZoneSettings/useTimeZoneSettingsGet";
import { useTimeZoneSettingsGetTimezones } from "@acrostack/api-client/hooks/timeZoneSettings/useTimeZoneSettingsGetTimezones";
import { useTimeZoneSettingsUpdate } from "@acrostack/api-client/hooks/timeZoneSettings/useTimeZoneSettingsUpdate";
import { extractAbpErrorMessage } from "@acrostack/core";

export function TimeZoneSettingsCard() {
  const queryClient = useQueryClient();
  const updateMutation = useTimeZoneSettingsUpdate();

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
      toast.success("保存成功");
    } catch (err) {
      toast.error(extractAbpErrorMessage(err));
    }
  };

  if (tzQuery.isLoading || timezonesQuery.isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{"时区"}</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <Spinner />
            {"加载中..."}
          </span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{"时区"}</CardTitle>
        <CardAction>
          <Button onClick={() => void handleSave()} disabled={updateMutation.isPending}>
            {"保存"}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="server-timezone">{"时区"}</FieldLabel>
          <Select value={selectedTz} onValueChange={(value) => setSelectedTz(value as string)}>
            <SelectTrigger id="server-timezone" className="w-full">
              <SelectValue>
                {(value) =>
                  timezones.find((tz) => tz.name === value)?.value ?? (value as string) ?? ""
                }
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {timezones.map((tz) => (
                <SelectItem key={tz.name ?? ""} value={tz.name ?? ""}>
                  {tz.value ?? tz.name ?? ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <p className="text-sm text-muted-foreground">
          {
            "此功能允许您为服务器设置默认时区，同时用户可以选择自己的时区。如果用户的时区与服务器的时区不同，所有时间将相应调整。例如，如果服务器设置为欧洲/伦敦(00:00)，而用户在欧洲/巴黎(+01:00)，则该用户的时间将调整1小时。选择'默认时区'将自动使用服务器或浏览器的时区。"
          }
        </p>
      </CardContent>
    </Card>
  );
}
