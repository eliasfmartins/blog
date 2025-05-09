import { formatDateTime, formatRelativeDate } from "@/utils/format-date-time";

type PostDateProps = {
  dateTime: string
}

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      dateTime={dateTime}
      className="text-slate-600 text-sm/tight "
      title={formatRelativeDate(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  )
}
