
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Home from './Home'



describe ('Home', () => {
  it('should render a welcome message', () => {
    render(
      <Home />
    )
    expect(screen.getByText('Welcome to the Birdhouse')).toBeInTheDocument()
  })
})
