import { renderHook } from '@testing-library/react';
import { useMeta } from '../use-meta';
describe('useMeta', () => {
  it('debe actualizar el título y la descripción', () => {
    document.title = '';
    const meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
    renderHook(() => useMeta('Nuevo título', 'Nueva descripción'));
    expect(document.title).toBe('Nuevo título');
    expect(meta.content).toBe('Nueva descripción');
  });
});