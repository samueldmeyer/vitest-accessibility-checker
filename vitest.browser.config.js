import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'
import { accessibilityCheckerPlugin } from 'vitest-accessibility-checker'

export default defineConfig({
  plugins: [react(), accessibilityCheckerPlugin({
      // Optional configuration
      ruleArchive: "latest",
      policies: ["IBM_Accessibility"],
      failLevels: ["violation"],
      reportLevels: ["violation", "potentialviolation", "recommendation", "potentialrecommendation", "manual"]
    })],
  test: {
    setupFiles: ['./setupMatchers.js'],
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
