import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);
  return format(date, "dd/MM/yyyy 'ás' HH'h'mm" , {
    locale: ptBR,
  })
}

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);
  return formatDistanceToNow(date,  {
    locale: ptBR,
    addSuffix: true,
  })
}



console.log(formatRelativeDate('2025-05-04T10:00:00Z'));
