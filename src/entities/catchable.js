const YEAR_ALL = [1, 12];
const DAY_ALL = [0, 23];
const DAY_MORNING = [];
const DAY_EVENING = [];
const DAY_NIGHT = [];

export default class Catchable {
  // raw ID
  id = '';
  // Catchable Type
  type = '';
  // English Name
  name = '';
  // Number in the collection
  number = 0;

  // Base selling prince
  price = 0;

  // Month from 1 to 12
  monthRanges = [];

  // Hours from 0 to 23. 13 = from 1 PM to 2 PM
  hourRanges = [];

  requirements = [];

  constructor(type, number, id, name, price, monthRanges, hourRanges) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.number = number;
    this.price = price;
    this.monthRanges = monthRanges;
    this.hourRanges = hourRanges;
  }

  offsetMonth(month, northEmishphere) {
    // Offset 6 month in south emisphere
    let offsetMonth = northEmishphere ? month : month + 6
    // Scale back to 1-12
    return (offsetMonth - 1) % 12 + 1; 
  }

  canBeCatchedMonth(month, northEmishphere = true) {
    // console.debug('Check if ' + this.type + '#' + this.id + ' can be catch in month ' + month + ' (' + (northEmishphere ? 'N' : 'S') + ')');
    let offsetMonth = this.offsetMonth(month, northEmishphere);    
    for (var i = 0; i < this.monthRanges.length; i++) {
      if (this._withinRange(this.monthRanges[i][0], this.monthRanges[i][1], offsetMonth)) {
        return true;
      }
    }
    return false;
  }

  canBeCatchedHour(hour) {
    for (var i = 0; i < this.hourRanges.length; i++) {
      if (this._withinRange(this.hourRanges[i][0], this.hourRanges[i][1], hour)) {
        return true;
      }
    }
    return false;
  }

  canBeCatchedTime(hour, month, northEmishphere = true) {
    return this.canBeCatchedMonth(month, northEmishphere) && this.canBeCatchedHour(hour);
  }

  _withinRange(from, to, value) {
    if (from < to) {
      return value >= from && value <= to;
    } else {
      return value >= from || value <= to;
    }
  }
}

export {YEAR_ALL, DAY_ALL};