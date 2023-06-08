import { getPositionSuffix } from '@/utils/functions';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const suffix = getPositionSuffix(day);

  return `${day}${suffix} ${month}`;
}

export function getDayPosition(dateString: string): string {
  const day = new Date(dateString).getDate();
  const suffix = getPositionSuffix(day);

  return `${day}${suffix}`;
}

export function formatDateWithYear(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const suffix = getPositionSuffix(day);
  const year = date.getFullYear();

  return `${day}${suffix} ${month} ${year}`;
}
