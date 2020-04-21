import {shadows as FishShadows}     from '../entities/fish-shadow';
import {locations as FishLocations} from '../entities/fish-location';
import {fishs as FishList} from '../entities/fish';
import * as Catchable from '../entities/catchable';

class FishDb {
  constructor() {
    this.shadows = FishShadows;
    this.locations = FishLocations;
    this.fishs = FishList;
  }

  getLocation(id) {
    return this.locations.filter((l) => l.id == id)[0];
  }
  getShadow(id) {
    return this.shadows.filter((s) => s.id == id)[0];
  }
  getFish(id) {
    return this.fishs.filter((f) => f.id == id)[0];
  }

  getAllFish() {
    return this.fishs;
  }

  search(criterias, sorts) {
    let search = this.getAllFish();
    for (let index = 0; index < criterias.length; index++) {
      const criteria = criterias[index];
      search = search.filter(criteria.filter);

      // Stop if nothing
      if (search.length == 0) {
        return [];
      }
    }
    return search;
  }

};

var fishDb = new FishDb();
export default fishDb;