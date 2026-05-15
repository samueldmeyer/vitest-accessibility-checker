import { defineConfig } from 'vite'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'
import { accessibilityCheckerPlugin } from 'vitest-accessibility-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),accessibilityCheckerPlugin() ],
    test: {
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [
        { browser: 'chromium' }
      ],
    },
  },
})

// Made with Bob
