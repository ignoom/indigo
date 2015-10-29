'use strict';

describe('indigo.version module', function() {
  beforeEach(module('indigo.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
