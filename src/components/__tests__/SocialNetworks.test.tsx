import { render, screen } from '@testing-library/react';
import SocialNetworks from '../SocialNetworks';

describe('SocialNetworks', () => {
  it('renders redes sociales y enlaces', () => {
    render(<SocialNetworks />);
    const container = screen.getByTestId('social-networks');
    expect(container).toBeInTheDocument();
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/WhatsApp/i)).toBeInTheDocument();
  });
});