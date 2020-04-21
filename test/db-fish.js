import FishDb from '../src/db/db-fish';
import {builder as SearchCriteriaBuilder} from '../src/db/searchcriteria';

var chai = require('chai');
var assert = chai.assert;

describe('Fish Database:', function() {
  it('Fish Shadows loaded', function() {
    assert.exists(FishDb.shadows);
    assert.isAbove(FishDb.shadows.length, 0);
  }),

  it('Fish Locations loaded', function() {
    assert.exists(FishDb.locations);
    assert.isAbove(FishDb.locations.length, 0);
  })

  it('Fish List loaded', function() {
    assert.exists(FishDb.fishs);
    assert.isAbove(FishDb.fishs.length, 0);
  })
});

describe('Single Fish Tests:', function() {
  it('Bitterling, All day, Nov-March North', function() {
    assert.exists(FishDb.fishs);

    let bitterling = FishDb.getFish('bitterling');
    assert.exists(bitterling, 'found fish with id = bitterling');

    // Check all Hours
    assert.isOk(bitterling.canBeCatchedHour(0));
    assert.isOk(bitterling.canBeCatchedHour(9));
    assert.isOk(bitterling.canBeCatchedHour(12));
    assert.isOk(bitterling.canBeCatchedHour(23));

    // Check month North Emisphere (Nov to March)
    assert.isOk(bitterling.canBeCatchedMonth(1));
    assert.isOk(bitterling.canBeCatchedMonth(3));
    assert.isNotOk(bitterling.canBeCatchedMonth(5));
    assert.isNotOk(bitterling.canBeCatchedMonth(9));
    assert.isOk(bitterling.canBeCatchedMonth(12));

    // Check month South Emisphere (May to Sept)
    let isNorth = false;
    assert.isNotOk(bitterling.canBeCatchedMonth(1, isNorth));
    assert.isNotOk(bitterling.canBeCatchedMonth(3, isNorth));
    assert.isOk(bitterling.canBeCatchedMonth(5, isNorth));
    assert.isOk(bitterling.canBeCatchedMonth(9, isNorth));
    assert.isNotOk(bitterling.canBeCatchedMonth(12, isNorth));
  })

  it('Pale Chub, Morning Fish, 9AM to 4PM', function() {
    assert.exists(FishDb.fishs);

    let palechub = FishDb.getFish('palechub');
    assert.exists(palechub, 'found fish with id = palechub');

    // Check all Hours
    assert.isNotOk(palechub.canBeCatchedHour(0));
    assert.isOk(palechub.canBeCatchedHour(9));
    assert.isOk(palechub.canBeCatchedHour(12));
    assert.isNotOk(palechub.canBeCatchedHour(23));
  })

});

describe('Fish Search:', function() {
  it('Pale Chub and Bitterling catchable in March', function() {
    let inMonth = SearchCriteriaBuilder.CatchableMonth(3);
    let monthFish = FishDb.search([inMonth]);
    let monthFishId = monthFish.map((f) => f.id);

    assert.include(monthFishId, 'palechub');
    assert.include(monthFishId, 'bitterling');
  })
  it('Pale Chub catchable in April but not Bitterling', function() {
    let inMonth = SearchCriteriaBuilder.CatchableMonth(4);
    let monthFish = FishDb.search([inMonth]);
    let monthFishId = monthFish.map((f) => f.id);

    assert.include(monthFishId, 'palechub');
    assert.notInclude(monthFishId, 'bitterling');
  })
  it('March is last Month for Bitterling', function() {
    let inMarch = SearchCriteriaBuilder.CatchableMonth(3);
    let notInApril = SearchCriteriaBuilder.NotCatchableMonth(4);
    let lastMonthFish = FishDb.search([inMarch, notInApril]);
    let lastMonthFishId = lastMonthFish.map((f) => f.id);

    assert.include(lastMonthFishId, 'bitterling');
    assert.notInclude(lastMonthFishId, 'palechub');
  })
  it('South Emisphere Search', function() {
    for (var north = 1; north<=12; north++) {
      let south = (north + 6 - 1) % 12 + 1
      let inNorth = SearchCriteriaBuilder.CatchableMonth(north, true);
      let inSouth = SearchCriteriaBuilder.CatchableMonth(south, false);
      assert.equal(inNorth.length, inSouth.length);
    }
  })
});