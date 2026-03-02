/**
 * Utility untuk mengecek kontras warna berdasarkan standar WCAG.
 * ❌ Core tidak boleh depend apa pun (aturan 18).
 */

/**
 * Mengonversi warna hex ke komponen RGB.
 * @param hex Kode warna hex (misal: #ffffff atau #fff)
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Menghitung luminansi relatif dari komponen warna RGB.
 * @param r Red (0-255)
 * @param g Green (0-255)
 * @param b Blue (0-255)
 */
export function getRelativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Menghitung rasio kontras antara dua warna hex.
 * @param hex1 Warna pertama
 * @param hex2 Warna kedua
 * @returns Rasio kontras (1 sampai 21)
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1)
  const rgb2 = hexToRgb(hex2)

  if (!rgb1 || !rgb2) return 1

  const l1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b)
  const l2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b)

  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Menentukan apakah kontras antara dua warna memenuhi standar WCAG.
 * @param hex1 Warna pertama
 * @param hex2 Warna kedua
 * @param level Level WCAG ('AA' atau 'AAA')
 * @param size Ukuran teks ('normal' atau 'large')
 */
export function isContrastAccessible(
  hex1: string,
  hex2: string,
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = getContrastRatio(hex1, hex2)

  if (level === 'AAA') {
    return size === 'large' ? ratio >= 4.5 : ratio >= 7
  }

  // Level AA (Default)
  return size === 'large' ? ratio >= 3 : ratio >= 4.5
}

/**
 * Memilih warna teks terbaik (hitam atau putih) untuk latar belakang tertentu.
 * @param bgColor Warna latar belakang hex
 * @param lightColor Warna teks terang (default: #ffffff)
 * @param darkColor Warna teks gelap (default: #000000)
 */
export function getBestContrastColor(
  bgColor: string,
  lightColor: string = '#ffffff',
  darkColor: string = '#000000'
): string {
  const ratioLight = getContrastRatio(bgColor, lightColor)
  const ratioDark = getContrastRatio(bgColor, darkColor)

  return ratioLight > ratioDark ? lightColor : darkColor
}
