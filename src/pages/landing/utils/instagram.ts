export function toInstagramUrl(handle: string): string {
  const normalized = handle.trim().replace(/^@/, '')
  return `https://www.instagram.com/${normalized}`
}

export function toInstagramProfilePicUrl(handle: string, size: 'small' | 'large' = 'large'): string {
  const normalized = handle.trim().replace(/^@/, '')
  return `https://www.instagram.com/${normalized}/profile_pic/?size=${size}`
}

