import {
  Calendar as FluentCalendar,
  type CalendarProps as FluentCalendarProps,
} from "@fluentui/react-calendar-compat";

export type CalendarProps = FluentCalendarProps & {
  className?: string;
  buttonVariant?: string;
};

export function Calendar(props: CalendarProps) {
  return <FluentCalendar {...props} />;
}

Calendar.displayName = "Calendar";

export function CalendarDayButton() {
  return null;
}
