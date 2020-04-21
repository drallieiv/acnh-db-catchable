export default class BaseEntity {
  id = '';
  name = '';

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}