import Catchable, * as Catch from './catchable';

export default class Fish extends Catchable{
  location = undefined;
  shadow = undefined;

  constructor(number, id, name, price, location, shadow, monthRanges, hourRanges) {
    if(monthRanges == null){
      monthRanges = [Catch.YEAR_ALL];
    }
    if(hourRanges == null){
      hourRanges = [Catch.DAY_ALL];
    }
    super('fish', number, id, name, price, monthRanges, hourRanges);
    this.location = location;
    this.shadow = shadow;
  }
}

// List of Fishs
var fishs = [];
fishs.push(new Fish(1, 'bitterling', 'Bitterling', 900, 'riv', 's', [[11, 3]]));
fishs.push(new Fish(2, 'palechub', 'Pale chub', 200, 'riv', 'xs', [Catch.YEAR_ALL], [[9, 16]]));
export {fishs};
