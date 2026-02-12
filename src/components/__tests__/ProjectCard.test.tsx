import { render } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

describe('ProjectCard', () => {
  it('renderiza correctamente con una imagen', () => {
    render(
      <ProjectCard
        project={{
          title: 'Test',
          location: 'Barcelona',
          description: 'desc',
          images: ['img1.jpg'],
        }}
      />
    );
  });
  it('renderiza correctamente con varias imágenes', () => {
    render(
      <ProjectCard
        project={{
          title: 'Test',
          location: 'Barcelona',
          description: 'desc',
          images: ['img1.jpg', 'img2.jpg'],
        }}
      />
    );
  });
});