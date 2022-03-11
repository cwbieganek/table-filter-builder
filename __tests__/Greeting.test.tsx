import { render, screen } from '@testing-library/react';
import Greeting from '@/components/Greeting/Greeting';

describe('Greeting', () => {
  it('renders a proper greeting', () => {
    render(<Greeting firstName='Chris' lastName='Bieganek' />);

    const greetingElement = screen.getByText("Hello Chris Bieganek!");

    expect(greetingElement).toBeInTheDocument();
  });
});
