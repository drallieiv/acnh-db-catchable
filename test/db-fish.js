import { FishDb } from '../src/db/db-fish';

describe('Fish Database', function() {
  it('Shadows are defined', function() {
    var db = new FishDb();
    assert.ok(db.shadows !== undefined, '');
    assert.ok(db.shadows.lenght > 0, 'List is empty');
  })
});