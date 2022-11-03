import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home View', () => {
  test('Renders Home component', () => {
    const HomeSnapshot = render(<Home />);
    expect(HomeSnapshot).toMatchSnapshot();
  });

  test('Check for title in the component', () => {
    render(<Home />);
    const homeTitle = screen.getByText('Welcome to our page!');
    expect(homeTitle).toBeInTheDocument();
  });
});
