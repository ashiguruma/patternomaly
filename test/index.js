import { expect } from 'chai';
import pattern from '../index.js';

describe('index', () => {
  describe('pattern', () => {
    it('should be an object', () => {
      expect(pattern).to.be.an('object');
    });

    it('should have a `draw` function', () => {
      expect(pattern).to.have.property('draw');
      expect(pattern.draw).to.be.a('function');
    });

    it('should have a `generate` function', () => {
      expect(pattern).to.have.property('generate');
      expect(pattern.generate).to.be.a('function');
    });
  });
});
