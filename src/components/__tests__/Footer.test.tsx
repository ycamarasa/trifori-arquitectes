import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { vi } from 'vitest';

// Mock de react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // simple mock que devuelve la key
  }),
}));

// Mock de SocialNetworks
vi.mock('../SocialNetworks', () => ({
  default: () => <div data-testid="social-networks" />,
}));

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the footer element', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the logo with correct alt text and attributes', () => {
    const logo = screen.getByAltText('Logo Trifori Arquitectes') as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('/assets/logo-white.png');
    expect(logo.width).toBe(167);
    expect(logo.height).toBe(53);
  });

  it('renders the brand info with translated texts', () => {
    expect(screen.getByText('footer_title')).toBeInTheDocument();
    expect(screen.getByText('footer_description')).toBeInTheDocument();
  });

  it('renders the SocialNetworks component', () => {
    expect(screen.getByTestId('social-networks')).toBeInTheDocument();
  });

  it('renders the copyright with the current year', () => {
    const year = new Date().getFullYear().toString();
    expect(screen.getByText((content) => {
      return content.includes(year) && content.includes('footer_copyright');
    })).toBeInTheDocument();
  });

  it('renders the privacy policy link with correct href and translation', () => {
    const link = screen.getByRole('link', { name: 'privacyPolicy_title' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/privacy-policy');
  });

  it('renders the made-by element with dangerouslySetInnerHTML content', () => {
    const madeBy = screen.getByText('footer_made_by', { exact: false });
    expect(madeBy).toBeInTheDocument();
  });
});
