import { render } from '@testing-library/react';
import InstagramEmbed from '../InstagramEmbed';

describe('InstagramEmbed', () => {
  it('renders without crashing', () => {
    const url = 'https://www.instagram.com/p/12345/';
    const { container } = render(<InstagramEmbed url={url} />);
    expect(container.querySelector('.instagram-medias')).toBeInTheDocument();
  });
});