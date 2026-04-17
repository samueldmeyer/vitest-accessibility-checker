import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import HelloWorld from './HelloWorld.jsx'
import {
  getCompliance,
} from 'accessibility-checker'

test('renders name', async () => {
  const { getByText } = await render(<HelloWorld name="Vitest" />)
  await expect.element(getByText('Hello Vitest!')).toBeInTheDocument()
  const results = await getCompliance(document.body, label);
})
