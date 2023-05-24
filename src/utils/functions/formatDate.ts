import { getPositionSuffix } from '@/utils/functions';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const suffix = getPositionSuffix(day);

  return `${day}${suffix} ${month}`;
}

export function getDayPosition(dateString: string): string {
  const day = new Date(dateString).getDate();
  const suffix = getPositionSuffix(day);

  return `${day}${suffix}`;
}
