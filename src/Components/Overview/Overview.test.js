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

  it('should have a section for amenities', () => {
    render(
      <Overview />
    )
    expect(screen.getByText('Amenities')).toBeInTheDocument()
  })
  
  it('should have a section for house rules', () => {
    render(
      <Overview />
    )
    expect(screen.getByText('House Rules')).toBeInTheDocument()
  })
})