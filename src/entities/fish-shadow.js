import BaseEntity from './base-entity';

export default class FishShadow extends BaseEntity {

}

var shadows = [];
shadows.push(new FishShadow('xs', 'verySmall'));
shadows.push(new FishShadow('s', 'small'));
shadows.push(new FishShadow('m', 'medium'));
shadows.push(new FishShadow('l', 'large'));
shadows.push(new FishShadow('xl', 'huge'));
shadows.push(new FishShadow('lb', 'longBody'));
shadows.push(new FishShadow('fin', 'finned'));

export {shadows};