import BaseEntity from './base-entity';

export default class FishLocation extends BaseEntity {

}

// Fish Locations
var locations = [];
locations.push(new FishLocation('sea', 'sea'));
locations.push(new FishLocation('riv', 'river'));
locations.push(new FishLocation('rim', 'riverMouth'));
locations.push(new FishLocation('pnd', 'pond'));
locations.push(new FishLocation('clf', 'cliff'));
locations.push(new FishLocation('wtf', 'waterfall'));
locations.push(new FishLocation('pir', 'pier'));

export {locations};