import { render, screen } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Quote View', () => {
  test('Renders Quote component', () => {
    const Snapshot = render(<Quote />);
    expect(Snapshot).toMatchSnapshot();
  });

  test('Check for quote in the component', () => {
    render(<Quote />);
    const quote = screen.getByText(
      '"Pure mathematics is, in its way, the poetry of logical ideas."',
    );
    expect(quote).toBeInTheDocument();
  });
});
