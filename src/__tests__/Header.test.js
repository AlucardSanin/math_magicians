import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/NavBar';

describe('Header test', () => {
  test('Renders Header component', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const headerTitle = screen.getByText('Math Magicians');
    const headerLink = screen.getByText('Calculator');
    const headerLink2 = screen.getByText('Quote');
    expect(headerTitle).toBeInTheDocument();
    expect(headerLink).toBeInTheDocument();
    expect(headerLink2).toBeInTheDocument();
  });
});
