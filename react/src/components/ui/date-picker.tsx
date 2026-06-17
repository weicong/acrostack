import { CalendarIcon, X } from 'lucide-react'
import { format, isValid, parse, parseISO } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

type DatePickerProps = {
  id?: string
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  withTime?: boolean
  className?: string
  disabled?: boolean
}

function parseDateValue(value?: string, withTime?: boolean): Date | undefined {
  if (!value) return undefined

  const datePrefix = /^(\d{4}-\d{2}-\d{2})/.exec(value)?.[1]

  if (!withTime && datePrefix) {
    const parsedDatePrefix = parse(datePrefix, 'yyyy-MM-dd', new Date())
    if (isValid(parsedDatePrefix)) return parsedDatePrefix
  }

  if (withTime) {
    const dateTime = parse(value, "yyyy-MM-dd'T'HH:mm", new Date())
    if (isValid(dateTime)) return dateTime
  }

  const dateOnly = parse(value, 'yyyy-MM-dd', new Date())
  if (isValid(dateOnly)) return dateOnly

  const parsedIso = parseISO(value)
  if (isValid(parsedIso)) return parsedIso

  const parsedNative = new Date(value)
  return isValid(parsedNative) ? parsedNative : undefined
}

export function DatePicker({
  id,
  value,
  onChange,
  placeholder,
  withTime = false,
  className,
  disabled = false,
}: DatePickerProps) {
  const selectedDate = parseDateValue(value, withTime)
  const displayText = selectedDate
    ? withTime
      ? format(selectedDate, 'PPP p')
      : format(selectedDate, 'PPP')
    : (placeholder ?? 'Pick a date')

  const applyDate = (date: Date | undefined) => {
    if (!date) {
      onChange('')
      return
    }

    if (withTime) {
      const prev = selectedDate ?? new Date()
      const next = new Date(date)
      next.setHours(prev.getHours(), prev.getMinutes(), 0, 0)
      onChange(format(next, "yyyy-MM-dd'T'HH:mm"))
      return
    }

    onChange(format(date, 'yyyy-MM-dd'))
  }

  const applyTime = (time: string) => {
    if (!selectedDate) return
    const [hour, minute] = time.split(':').map((item) => Number(item))
    if (Number.isNaN(hour) || Number.isNaN(minute)) return
    const next = new Date(selectedDate)
    next.setHours(hour, minute, 0, 0)
    onChange(format(next, "yyyy-MM-dd'T'HH:mm"))
  }

  const timeValue = selectedDate ? format(selectedDate, 'HH:mm') : ''

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-full justify-between font-normal',
            !selectedDate && 'text-muted-foreground',
            className
          )}
        >
          <span className="truncate">{displayText}</span>
          <CalendarIcon className="ml-2 h-4 w-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3">
          <Calendar mode="single" selected={selectedDate} onSelect={applyDate} />
          {withTime && (
            <div className="mt-3 border-t pt-3">
              <input
                type="time"
                value={timeValue}
                onChange={(e) => applyTime(e.target.value)}
                disabled={!selectedDate}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              />
            </div>
          )}
          {selectedDate && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="mt-2 w-full"
              onClick={() => onChange('')}
            >
              <X className="mr-2 h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
