import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('should have a link to home page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should have a link to the overview page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  it('should have a link to the map page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Map')).toBeInTheDocument();
  });

  it('should have a link to the gallery page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Gallery')).toBeInTheDocument();
  });

  it('should have a link to the rates page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Rates')).toBeInTheDocument();
  });

  it('should have a link to the availability', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Availability')).toBeInTheDocument();
  });

  it('should have a link to the reviews page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });

  it('should have a link to the contact page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should have a link to the book page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Book')).toBeInTheDocument();
  });

  it('should have a location name', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByText('Birdhouse')).toBeInTheDocument()
  })
});
