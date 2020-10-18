export const randomId = (nChars = 8) => {
  const chars = '0123456789abcdef'
  const rv = []
  for (let i = 0; i < nChars; i++) {
    rv.push(chars[Math.floor(Math.random() * chars.length)])
  }
  return rv.join('')
} 