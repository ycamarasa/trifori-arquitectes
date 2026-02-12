import { render } from '@testing-library/react';
import Projects from '../Projects';
import { MemoryRouter } from 'react-router-dom';
describe('Projects page', () => {
  it('renders sin crash y muestra proyectos', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );
  });
});