export default class SearchCriteria {
  desc = 'custom criteria';
  // Default filter keep
  filter() {
    return true;
  }
}

class SearchCriteriaBuilder {
  CatchableMonth(month, north = true) {
    let criteria = new SearchCriteria();
    criteria.filter = (f) => {return f.canBeCatchedMonth(month, north)};
    criteria.desc = `Catchable during month ${month} (north=${north})`;
    return criteria;
  }

  CatchableHourMonth(hour, month, north = true) {
    let criteria = new SearchCriteria();
    criteria.filter = (f) => {return f.canBeCatchedTime(hour, month, north)};
    criteria.desc = `Catchable during month ${month} at hour ${hour} (north=${north})`;
    return criteria;
  }

  NotCatchableMonth(month, north = true) {
    let criteria = new SearchCriteria();
    criteria.filter = (f) => {return ! f.canBeCatchedMonth(month, north)};
    criteria.desc = `Not catchable during month ${month} (north=${north})`;
    return criteria;
  }
}

var builder = new SearchCriteriaBuilder;
export {builder};