/* eslint-disable no-unused-expressions */
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator tests', () => {
  test('Mocking Calculator Components', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  test('Mocking user input', () => {
    render(<Calculator />);
    const resultNumber = document.getElementById('calc-display');
    const key5 = screen.getByText('5');
    const key4 = screen.getByText('4');
    fireEvent.click(key5);
    fireEvent.click(key4);
    expect(resultNumber.textContent).toBe('54');
  });

  test('Mocking user interaction', () => {
    render(<Calculator />);

    const resultNumber = document.getElementById('calc-display');
    const key2 = screen.getByText('2');
    const key9 = screen.getByText('9');
    const keyTimes = screen.getByText('x');
    const keyEquals = screen.getByText('=');

    fireEvent.click(key2);
    fireEvent.click(keyTimes);
    fireEvent.click(key9);
    fireEvent.click(keyEquals);

    expect(resultNumber.textContent).toBe('18');
  });
});
