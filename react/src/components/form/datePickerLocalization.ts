/**
 * Fluent UI 日期组件的 zh-CN 本地化默认值。
 *
 * `@fluentui/react-datepicker-compat` 未提供全局本地化 Provider，
 * 每个 `DatePicker` 需通过 `strings` / `formatDate` / `firstDayOfWeek`
 * 等 props 注入本地化配置；不注入时组件使用内置英文文案
 * （月份/星期名、"Go to today"、`Date.toDateString()` 输入框格式）。
 *
 * 使用方式（调用方仍可通过自身 props 覆盖任意默认值）：
 * ```tsx
 * <DatePicker {...zhCNDatePickerDefaults} />
 * ```
 */
import { DayOfWeek, type CalendarStrings } from "@fluentui/react-calendar-compat";
import type { DatePickerProps } from "@fluentui/react-datepicker-compat";
import { format, isValid, parse } from "date-fns";

/** 中文日历文案（月份/星期/"转到今天"及无障碍标签）。 */
export const zhCNCalendarStrings: CalendarStrings = {
  months: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  shortMonths: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  shortDays: ["日", "一", "二", "三", "四", "五", "六"],
  goToToday: "转到今天",
  prevMonthAriaLabel: "上个月",
  nextMonthAriaLabel: "下个月",
  prevYearAriaLabel: "上一年",
  nextYearAriaLabel: "下一年",
  prevYearRangeAriaLabel: "上一个年份区间",
  nextYearRangeAriaLabel: "下一个年份区间",
  monthPickerHeaderAriaLabel: "{0}，选择以更改年份",
  yearPickerHeaderAriaLabel: "{0}，选择以更改月份",
  closeButtonAriaLabel: "关闭",
  weekNumberFormatString: "第 {0} 周",
  selectedDateFormatString: "已选择日期 {0}",
  todayDateFormatString: "今天是 {0}",
  dayMarkedAriaLabel: "已标记此日期",
};

/** 输入框显示格式：2026年8月20日（默认为英文 `toDateString()`）。 */
export function zhCNFormatDate(date?: Date): string {
  return date ? format(date, "yyyy年M月d日") : "";
}

/** 解析用户输入（仅 allowTextInput 时使用）：优先 "yyyy年M月d日"，回退 Date.parse。 */
export function zhCNParseDateFromString(dateStr: string): Date | null {
  const trimmed = dateStr.trim();
  if (!trimmed) return null;
  const parsed = parse(trimmed, "yyyy年M月d日", new Date());
  if (isValid(parsed)) return parsed;
  const fallback = Date.parse(trimmed);
  return Number.isNaN(fallback) ? null : new Date(fallback);
}

/** 所有 DatePicker 的中文默认 props（中国习惯：周一为一周首日）。 */
export const zhCNDatePickerDefaults: Pick<
  DatePickerProps,
  "strings" | "firstDayOfWeek" | "formatDate" | "parseDateFromString"
> = {
  strings: zhCNCalendarStrings,
  firstDayOfWeek: DayOfWeek.Monday,
  formatDate: zhCNFormatDate,
  parseDateFromString: zhCNParseDateFromString,
};
