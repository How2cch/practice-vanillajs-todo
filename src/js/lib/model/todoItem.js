export class TodoItem {
  constructor({title, description, isUrgent, time, id, isChecked}) {
    this.title = title;
    this.description = description;
    this.isUrgent = isUrgent;
    this.time = time;
    this.id = id;
    this.isChecked = isChecked;
  }
}