//@ts-check
import { defineConfig } from 'windicss/helpers'

import filters from 'windicss/plugin/filters'
import lineClamp from 'windicss/plugin/line-clamp'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  // darkMode: 'media',
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      colors: {
        primary: {
          DEFAULT: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--primary-dynamic), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--primary-dynamic), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--primary-dynamic))`
          },
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        test: '#000',
      },
    },
  },
  plugins: [filters, lineClamp, typography],
})
