import { differenceInCalendarDays, parseISO, isValid } from "date-fns";

export function daysUntil(deadline: string): number | null {
  const trimmed = deadline.trim();
  if (!trimmed) return null;
  const d = parseISO(trimmed);
  if (!isValid(d)) return null;
  return differenceInCalendarDays(d, new Date());
}
