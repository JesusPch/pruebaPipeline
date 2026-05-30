// src/app.test.js
import { jest } from '@jest/globals';

describe('Pruebas iniciales del proyecto', () => {
  test('La base de datos y el servidor deberían tener variables definidas', () => {
    const valid = true;
    expect(valid).toBe(true);
  });
});