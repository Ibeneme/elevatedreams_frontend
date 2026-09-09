import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateString(char: string, num: number = 270) {
  if (char.length > num) {
    return `${char.substring(0, num)}...`
  }
  return char
}
