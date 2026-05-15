import { expect } from 'vitest'
import { toBeAccessible } from 'vitest-accessibility-checker/matchers'

expect.extend({
  toBeAccessible
})