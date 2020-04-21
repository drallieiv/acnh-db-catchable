import FishShadow from '../entities/fish-shadow';
import FishLocation from '../entities/fish-location';

class FishDb {
  constructor() {
    console.debug('Initialize FishDb');

    // Fish Shadows
    var shadows = [];
    shadows.push(new FishShadow('xs', 'verySmall'));
    shadows.push(new FishShadow('s', 'small'));
    shadows.push(new FishShadow('m', 'medium'));
    shadows.push(new FishShadow('l', 'large'));
    shadows.push(new FishShadow('xl', 'huge'));
    shadows.push(new FishShadow('lb', 'longBody'));
    shadows.push(new FishShadow('fin', 'finned'));
    this.shadows = shadows;
    console.debug('Fish Shadows: '+ shadows.length);

    // Fish Locations
    var locations = [];
    locations.push(new FishLocation('sea', 'sea'));
    locations.push(new FishLocation('riv', 'river'));
    locations.push(new FishLocation('rim', 'riverMouth'));
    locations.push(new FishLocation('pnd', 'pond'));
    locations.push(new FishLocation('clf', 'cliff'));
    locations.push(new FishLocation('wtf', 'waterfall'));
    locations.push(new FishLocation('pir', 'pier'));
    this.locations = locations;
    console.debug('Fish Locations: '+ locations.length);
  }
};

var fishDb = new FishDb();
export default fishDb;