import { render } from '@testing-library/react';
import FAQ from '../FAQ';
describe('FAQ page', () => {
  it('renders without crashing', () => {
    render(<FAQ />);
  });
});