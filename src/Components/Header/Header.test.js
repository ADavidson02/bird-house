import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
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
    )
    expect(screen.getByText('Overview')).toBeInTheDocument()
  });
});
