import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Overview from './Overview'

describe('Overview', () => {
  it('have a page title', () => {
    render(
      <Overview />
    )
    expect(screen.getByText('Overview')).toBeInTheDocument()
  })

})