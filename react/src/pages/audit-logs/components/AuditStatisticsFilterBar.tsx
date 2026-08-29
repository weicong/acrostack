/**
 * 统计面板筛选栏：开始/结束日期范围与刷新按钮。
 * 日期范围本地状态内部化（默认最近 7 天），变化时通过 onRangeChange 上报 ISO 时间串，由父组件驱动查询。
 */
import { useState } from "react";
import { Button, Field } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { Search20Regular } from "@fluentui/react-icons";
import { zhCNDatePickerDefaults } from "@/components/ui/form/datePickerLocalization";
import {
  defaultEndDate,
  defaultStartDate,
  toEndOfDay,
  toStartOfDay,
} from "../utils/auditStatistics";
import { useAuditStatisticsStyles } from "../styles/auditStatistics";

/** 统计查询的日期范围（ISO 时间串）。 */
export interface AuditLogDateRange {
  StartTime?: string;
  EndTime?: string;
}

interface AuditStatisticsFilterBarProps {
  /** 日期范围变化回调（携带 ISO 时间串）。 */
  onRangeChange: (range: AuditLogDateRange) => void;
  /** 点击刷新按钮回调。 */
  onRefresh: () => void;
  /** 查询进行中（禁用刷新按钮）。 */
  refreshing?: boolean;
}

export function AuditStatisticsFilterBar({
  onRangeChange,
  onRefresh,
  refreshing,
}: AuditStatisticsFilterBarProps) {
  const styles = useAuditStatisticsStyles();

  // 默认范围：最近 7 天
  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);

  const emitRange = (start: Date | null, end: Date | null) => {
    onRangeChange({
      StartTime: start ? start.toISOString() : undefined,
      EndTime: end ? end.toISOString() : undefined,
    });
  };

  return (
    <div className={styles.filterBar}>
      <Field label={"开始时间"} className={styles.datePicker}>
        <DatePicker
          value={startDate}
          onSelectDate={(date) => {
            const next = date ? toStartOfDay(date) : null;
            setStartDate(next);
            emitRange(next, endDate);
          }}
          placeholder={"开始时间"}
          {...zhCNDatePickerDefaults}
        />
      </Field>
      <Field label={"结束时间"} className={styles.datePicker}>
        <DatePicker
          value={endDate}
          onSelectDate={(date) => {
            const next = date ? toEndOfDay(date) : null;
            setEndDate(next);
            emitRange(startDate, next);
          }}
          placeholder={"结束时间"}
          {...zhCNDatePickerDefaults}
        />
      </Field>
      <Button
        appearance="primary"
        icon={<Search20Regular />}
        onClick={onRefresh}
        disabled={refreshing}
      >
        {"刷新"}
      </Button>
    </div>
  );
}
