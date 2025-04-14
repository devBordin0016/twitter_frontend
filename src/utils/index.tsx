export const getFirstLetterAndColor = (username: string, id: number) => {
  const avatarColors = [
    '#EF4444',
    '#F59E0B',
    '#10B981',
    '#3B82F6',
    '#8B5CF6',
    '#EC4899',
    '#FBBF24',
    '#14B8A6',
    '#6366F1',
    '#D946EF'
  ]

  const firstLetter = username.charAt(0).toUpperCase()
  const lastDigit = Number(String(id).slice(-1))
  const avatarColor = avatarColors[lastDigit]
  return { firstLetter, avatarColor }
}
