import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Criteria } from './criteria.model';
import { type } from './type.data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  types: string[] = type;
 
  @Output()
  sendFilter: EventEmitter<Criteria> = new EventEmitter();
  
  criteria: Criteria = new Criteria();

  eventName(event) {
    this.criteria.name = event.target.value;
    this.sendFilter.emit(this.criteria);
  }
  eventId(event) {
    this.criteria.id = event.target.value;
    this.sendFilter.emit(this.criteria);
  }
  eventType(event) {
    this.criteria.type = event.target.value;
    this.sendFilter.emit(this.criteria);
  }
}
