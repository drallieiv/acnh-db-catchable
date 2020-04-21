import FishDb from '../src/db/db-fish';
var assert = require('assert');

describe('Fish Database:', function() {
  it('Fish Shadows loaded', function() {
    assert.ok(FishDb.shadows !== undefined);
    assert.ok(FishDb.shadows.length > 0);
  }),
  it('Fish Locations loaded', function() {
    assert.ok(FishDb.locations !== undefined);
    assert.ok(FishDb.locations.length > 0);
  })
});