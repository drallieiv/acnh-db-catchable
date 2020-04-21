const YEAR_ALL = [1, 12];
const DAY_ALL = [0, 23];
const DAY_MORNING = [];
const DAY_EVENING = [];
const DAY_NIGHT = [];

export default class Catchable {
  // raw ID
  _id = '';
  // Catchable Type
  _type = '';
  // English Name
  _name = '';
  // Number in the collection
  _number = 0;

  // Month from 1 to 12
  _monthRanges = [];
  // Hours from 0 to 23. 13 = from 1 PM to 2 PM
  _hoursRange = [];

  constructor(id, type, name, number, monthRanges, hoursRange) {
    this._id = id;
    this._type = type;
    this._name = name;
    this._number = number;
    this._monthRanges = monthRanges;
    this._hoursRange = hoursRange;
  }
}