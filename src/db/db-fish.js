import { FishShadow } from '../entities/fish-shadow';
import { FishLocation } from '../entities/fish-location';

export default class FishDb {
  shadows = [];
  locations = [];

  constructor() {
    // Fish Shadows
    this.shadows = [];
    shadows.push(new FishShadow('xs', 'verySmall'));
    shadows.push(new FishShadow('s', 'small'));
    shadows.push(new FishShadow('m', 'medium'));
    shadows.push(new FishShadow('l', 'large'));
    shadows.push(new FishShadow('xl', 'huge'));
    shadows.push(new FishShadow('lb', 'longBody'));
    shadows.push(new FishShadow('fin', 'finned'));

    // Fish Locations
    this.locations = [];
    locations.push(new FishLocation('sea', 'sea'));
    locations.push(new FishLocation('riv', 'river'));
    locations.push(new FishLocation('rim', 'riverMouth'));
    locations.push(new FishLocation('pnd', 'pond'));
    locations.push(new FishLocation('clf', 'cliff'));
    locations.push(new FishLocation('wtf', 'waterfall'));
    locations.push(new FishLocation('pir', 'pier'));
  }
};